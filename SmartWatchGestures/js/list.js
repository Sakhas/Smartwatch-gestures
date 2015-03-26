//testing testing

window.onload = function () {
	

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });

    screen.lockOrientation("portrait");
    
    var listObjects = document.getElementById("listObjects");
    var tableBody = document.createElement("TBODY");
    listObjects.appendChild(tableBody);
    for(var i=0; i<26; i++){
    	var row = listObjects.insertRow(i);
    	var button = document.createElement("BUTTON");
    	button.id = i.toString();
    	var bText = document.createTextNode("Object" + i.toString());
    	button.appendChild(bText);
    	
    	var tr = document.createElement("TR");
    	tableBody.appendChild(tr);
    	var td = document.createElement("TD");
    	td.appendChild(button);
    	tr.appendChild(td);
    }

    var accValueX = document.querySelector('#accValueX');
    var accValueY = document.querySelector('#accValueY');
    var accValueZ = document.querySelector('#accValueZ');
    var ax;
    var ay;
    var az;
    var newScrollPoint;
    
    window.addEventListener('devicemotion', rotationScroller, true); 
    window.addEventListener('scroll', highlight, true);
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
                
        if(ay > 1 && ay < 3){
        	newScrollPoint = window.pageYOffset - 4;
        	window.scrollTo(0, newScrollPoint);
        	
        }
        if(ay < -3 && ay > -6){
        	newScrollPoint = window.pageYOffset + 4;
        	window.scrollTo(0, newScrollPoint);
        	
        }
        if(ay > 2 && ay < 5){
        	newScrollPoint = window.pageYOffset - 9;
        	window.scrollTo(0, newScrollPoint);
        }
        if(ay < -5 && ay > -8){
        	newScrollPoint = window.pageYOffset + 9;
        	window.scrollTo(0, newScrollPoint);
        }
        if(ay > 4){
        	newScrollPoint = window.pageYOffset - 20;
        	window.scrollTo(0, newScrollPoint);
        }
        if(ay < -7){
        	newScrollPoint = window.pageYOffset + 20;
        	window.scrollTo(0, newScrollPoint);
        }
    }
   
    function highlight(){
    	var elem = document.elementFromPoint(50, window.pageYOffset);
    	if(elem == null){
    		console.log("VITTUPASKAAKATOTATATATATATATA");
    	}
        if(elem.type === "button"){
    		navigator.vibrate(500);

 //       	if(elem.id === "20"){
    		console.log(elem.id);
        		
   //     	}
        	
        }
    }
};
