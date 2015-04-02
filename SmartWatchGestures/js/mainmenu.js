//testing testing

window.onload = function () {
	

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
        	window.location.href = "index.html";;
    });

    screen.lockOrientation("portrait");
    //tizen.power.request("SCREEN", "SCREEN_NORMAL");
    
    var accValueX = document.querySelector('#accValueX');
    var accValueY = document.querySelector('#accValueY');
    var accValueZ = document.querySelector('#accValueZ');
    var ax;
    var ay;
    var az;
    var newScrollPoint;
    var oldHighlighted;
    
    
    window.addEventListener('devicemotion', rotationScroller, true); 
    window.addEventListener('scroll', highlight, true);
    
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
        	newScrollPoint = window.pageYOffset - 9;
        	window.scrollTo(0, newScrollPoint);
        }
        if(ay < -5 && ay > -8 && ax <= 4 && ax >= -3){
        	newScrollPoint = window.pageYOffset + 9;
        	window.scrollTo(0, newScrollPoint);
        }
        if(ay > 4 && ax <= 4 && ax >= -3){
        	newScrollPoint = window.pageYOffset - 20;
        	window.scrollTo(0, newScrollPoint);
        }
        if(ay < -7&& ax <= 4 && ax >= -3){
        	newScrollPoint = window.pageYOffset + 20;
        	window.scrollTo(0, newScrollPoint);
        }
        
        if(ax >= 6 && az <= -6 && ay <= 1  && ay >= -3){
        	var elem = document.elementFromPoint(0, window.innerHeight/2);
        	
    		if(elem.type == "submit"){
    			window.removeEventListener('devicemotion', rotationScroller, true);   	
            	window.location.href = elem.id.toString() + ".html";
            	
            	
            }
    		
        }
    }
    
    function highlight(e){
    	var elem = document.elementFromPoint(0, window.innerHeight/2);
		if(elem.type == "submit"){

    		if(oldHighlighted != null && oldHighlighted != elem){
    			oldHighlighted.style.backgroundColor = '#404040';
    		}
    		
    		elem.style.backgroundColor = '#E65800';
    		oldHighlighted = elem;
        		        	
        }
    
    }
};
