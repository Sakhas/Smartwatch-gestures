var revertedScrolling = false;

window.onload = function () {
	

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
        	window.location.href = "index.html";;
    });

    screen.lockOrientation("portrait");
    //tizen.power.request("SCREEN", "SCREEN_NORMAL");
    window.addEventListener('devicemotion', rotationScroller, true);
    
    var confCookie = readCookie('reverted');
    if(confCookie){
    	console.log("KAKSKKSKSKAAA");
    	console.log(confCookie);
    	if(confCookie === "on"){
    		revertedScrolling = true;
    	}
    }

};

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

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
    	if(revertedScrolling){
    		newScrollPoint = window.pageYOffset + 4;
    	}
    	else {
    		newScrollPoint = window.pageYOffset - 4;
    	}
    	window.scrollTo(0, newScrollPoint);
    	
    }
    if(ay < -3 && ay > -6 && ax <= 4 && ax >= -3){
    	if(revertedScrolling){
    		newScrollPoint = window.pageYOffset - 4;
    	}
    	else {
    		newScrollPoint = window.pageYOffset + 4;
    	}
    	window.scrollTo(0, newScrollPoint);
    	
    }
    if(ay > 2 && ay < 5 && ax <= 4 && ax >= -3){
    	if(revertedScrolling){
    		newScrollPoint = window.pageYOffset + 12;
    	}
    	else {
    		newScrollPoint = window.pageYOffset - 12;
    	}
    	window.scrollTo(0, newScrollPoint);
    }
    if(ay < -5 && ay > -8 && ax <= 4 && ax >= -3){
    	if(revertedScrolling){
    		newScrollPoint = window.pageYOffset - 12;
    	}
    	else {
    		newScrollPoint = window.pageYOffset + 12;
    	}
    	window.scrollTo(0, newScrollPoint);
    }
    if(ay > 4 && ax <= 4 && ax >= -3){
    	if(revertedScrolling){
    		newScrollPoint = window.pageYOffset + 30;
    	}
    	else {
    		newScrollPoint = window.pageYOffset - 30;
    	}
    	window.scrollTo(0, newScrollPoint);
    }
    if(ay < -7&& ax <= 4 && ax >= -3){
    	if(revertedScrolling){
    		newScrollPoint = window.pageYOffset - 30;
    	}
    	else {
    		newScrollPoint = window.pageYOffset + 30;
    	}
    	window.scrollTo(0, newScrollPoint);
    }
    if(ax <= -5 && az <= -7 && ay <= 1  && ay >= -3){
    	window.removeEventListener('devicemotion', rotationScroller, true);
    	window.location.href = "index.html";
    	
    }
}

