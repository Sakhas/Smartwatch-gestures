//testing testing

window.onload = function () {
	

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
    var rotValueX = document.querySelector('#rotValueX');
    var rotValueY = document.querySelector('#rotValueY');
    var rotValueZ = document.querySelector('#rotValueZ');
    var rotx;
    var roty;
    var rotz;
    var ax;
    var ay;
    var az;
    var newScrollPoint;
    
    window.addEventListener('devicemotion', function(e){
    	
        ax = Math.floor(e.accelerationIncludingGravity.x);
        ay = Math.floor(-e.accelerationIncludingGravity.y);
        az = Math.floor(-e.accelerationIncludingGravity.z);
        
        rotx = Math.floor(e.rotationRate.alpha);
        roty = Math.floor(e.rotationRate.beta);
        rotz = Math.floor(e.rotationRate.gamma);
        
        accValueX.innerHTML = "X: " + ax;
        accValueY.innerHTML = "Y: " + ay;
        accValueZ.innerHTML = "Z: " + az;
        
        rotValueX.innerHTML = "Alpha: " + rotx;
        rotValueY.innerHTML = "Beta: " + roty;
        rotValueZ.innerHTML = "Gamma: " + rotz;
        
    });
};
