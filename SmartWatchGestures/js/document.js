//testing testing

window.onload = function () {
	

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
        	window.location.href = "index.html";;
    });

    screen.lockOrientation("portrait");
    //tizen.power.request("SCREEN", "SCREEN_NORMAL");
    window.addEventListener('devicemotion', rotationScroller, true);

};
var accValueX = document.querySelector('#accValueX');
var accValueY = document.querySelector('#accValueY');
var accValueZ = document.querySelector('#accValueZ');
var ax;
var ay;
var az;
var newScrollPoint;

 
    /*var rotx = Math.floor(e.rotationRate.alpha);
        var roty = Math.floor(e.rotationRate.beta);
        var rotz = Math.floor(e.rotationRate.gamma);
 
        rotValueX.innerHTML = "Alpha: " + rotx;
        rotValueY.innerHTML = "Beta: " + roty;
        rotValueZ.innerHTML = "Gamma: " + rotz;*/

function rotationScroller(e){
	ax = Math.floor(e.accelerationIncludingGravity.x);
    ay = Math.floor(-e.accelerationIncludingGravity.y);
    az = Math.floor(-e.accelerationIncludingGravity.z);
            
    if(ay > 1 && ay < 3 && ax <= 4 && ax >= -3){
    	newScrollPoint = window.pageYOffset - 4;
    	window.scrollTo(0, newScrollPoint);
    	
    }
    if(ay < -3 && ay > -6 && ax <= 4 && ax >= -3){
    	newScrollPoint = window.pageYOffset + 4;
    	window.scrollTo(0, newScrollPoint);
    	
    }
    if(ay > 2 && ay < 5 && ax <= 4 && ax >= -3){
    	newScrollPoint = window.pageYOffset - 13;
    	window.scrollTo(0, newScrollPoint);
    }
    if(ay < -5 && ay > -8 && ax <= 4 && ax >= -3){
    	newScrollPoint = window.pageYOffset + 13;
    	window.scrollTo(0, newScrollPoint);
    }
    if(ay > 4 && ax <= 4 && ax >= -3){
    	newScrollPoint = window.pageYOffset - 30;
    	window.scrollTo(0, newScrollPoint);
    }
    if(ay < -7&& ax <= 4 && ax >= -3){
    	newScrollPoint = window.pageYOffset + 30;
    	window.scrollTo(0, newScrollPoint);
    }
}

