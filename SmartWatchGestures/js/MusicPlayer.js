window.onload = function () {
	

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
           window.location.href = "index.html";
    });
    
    
    var label = document.querySelector('#label');
    screen.lockOrientation("portrait");
    
    setABGListener();
    
    if(document.getElementById('resetButton').clicked == true)
    {
    	label.innerHTML = "";
    }
    
}

var ax;
var ay;
var az;

var rotAlpha;
var rotBeta;
var rotGamma;

var handLifted = false;

    /*
 
        /*rotValueX.innerHTML = "Alpha: " + rotx;
        rotValueY.innerHTML = "Beta: " + roty;
        rotValueZ.innerHTML = "Gamma: " + rotz;*/

function setABGListener(){
	console.log("ABGLISTENER ACTIVATED");
	window.addEventListener('devicemotion', ABGListener, true);
}

function setXYZListener(){
	console.log("XYZLISTENER ACTIVATED");
    window.addEventListener('devicemotion', XYZListener, true);
}

function removeABGListener(){
	window.removeEventListener('devicemotion', ABGListener, true);
}

function removeXYZListener(){
	window.removeEventListener('devicemotion', XYZListener, true);
}



function ABGListener(e){  
    rotAlpha = Math.floor(e.rotationRate.alpha);
    rotBeta = Math.floor(e.rotationRate.beta);
    rotGamma = Math.floor(e.rotationRate.gamma);
    
    if(rotGamma <= -80){
    	console.log("HANDLIFTED");
    	handLifted = true;
    	removeABGListener();
    	setXYZListener();
    }
}

function XYZListener(e){
	
	ax = Math.floor(e.accelerationIncludingGravity.x);
    ay = Math.floor(-e.accelerationIncludingGravity.y);
    az = Math.floor(-e.accelerationIncludingGravity.z);
    
    if(handLifted && ax > -4 && ax < 4 && ay >-4 && ay < 4 && az >-15 && az < -6 ){
    	console.log("ACTIVATED");
    	label.innerHTML = "activated";
    	handLifted = false;
    	//setTimeout(refreshLabel(), 3000);
    	setABGListener();
    }
    
}

/*function refreshLabel(){
	label.innerHTML = "not activated";
}*/