//testing testing
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });

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
        var ax = e.accelerationIncludingGravity.x;
        var ay = -e.accelerationIncludingGravity.y;
        var az = -e.accelerationIncludingGravity.z;
        accValueX.innerHTML = ax;
        accValueY.innerHTML = ay;
        accValueZ.innerHTML = az;
 
    });
    
};
