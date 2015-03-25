//testing testing

window.onload = function () {
	
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });

    screen.lockOrientation("portrait");
    
    // Sample code
    var textbox = document.querySelector('.contents');
    textbox.addEventListener("click", function(){
    	box = document.querySelector('#button1');
    
    });
    
    //dslakdla
    
    var accValueX = document.querySelector('#accValueX');
    var accValueY = document.querySelector('#accValueY');
    var accValueZ = document.querySelector('#accValueZ');
    
    window.addEventListener('devicemotion', function(e) {
        var ax = Math.floor(e.accelerationIncludingGravity.x);
        var ay = Math.floor(-e.accelerationIncludingGravity.y);
        var az = Math.floor(-e.accelerationIncludingGravity.z);
        accValueX.innerHTML = "X:" + ax;
        accValueY.innerHTML = "Y:" + ay;
        accValueZ.innerHTML = "Z:" + az;
        
        if(ay > 1 && ay < 3){
        	var newScrollPoint = window.pageYOffset - 4;
        	window.scrollTo(0, newScrollPoint);
        }
        if(ay < -3 && ay > -6){
        	var newScrollPoint = window.pageYOffset + 4;
        	window.scrollTo(0, newScrollPoint);
        }
        if(ay > 2 && ay < 5){
        	var newScrollPoint = window.pageYOffset - 9;
        	window.scrollTo(0, newScrollPoint);
        }
        if(ay < -5 && ay > -8){
        	var newScrollPoint = window.pageYOffset + 9;
        	window.scrollTo(0, newScrollPoint);
        }
        if(ay > 4){
        	var newScrollPoint = window.pageYOffset - 20;
        	window.scrollTo(0, newScrollPoint);
        }
        if(ay < -7){
        	var newScrollPoint = window.pageYOffset + 20;
        	window.scrollTo(0, newScrollPoint);
        }
        setScreenBrightness(getScreenBrightness());
        
        
        
        var rotx = Math.floor(e.rotationRate.alpha);
        var roty = Math.floor(e.rotationRate.beta);
        var rotz = Math.floor(e.rotationRate.gamma);
 
        rotValueX.innerHTML = "Alpha: " + rotx;
        rotValueY.innerHTML = "Beta: " + roty;
        rotValueZ.innerHTML = "Gamma: " + rotz;
    });
    
   
    
};
