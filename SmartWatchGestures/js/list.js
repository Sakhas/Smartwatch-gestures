//testing testing

window.onload = function () {
	

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });

    screen.lockOrientation("portrait");
    
    /*var listObjects = document.getElementById("listObjects");
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
    }*/
    
    

    var accValueX = document.querySelector('#accValueX');
    var accValueY = document.querySelector('#accValueY');
    var accValueZ = document.querySelector('#accValueZ');
    var ax;
    var ay;
    var az;
    var newScrollPoint;
    var oldHighlighted = null;
    var selectionDialogVisible = 0;
    /*
    var canvas;
    var context;
    var alphabet;
    
    
    var canvasTop;
    var canvasLeft;
    
    canvas = document.createElement("CANVAS");
	canvas.style.width = "300px";
	canvas.style.height = "300px";
	canvas.style.position = "absolute";
	canvas.style.zIndex = "2";
	canvasLeft = (window.innerWidth/2).toString() + "px";
	canvas.style.top =  canvasLeft;
	context = canvas.getContext("2d");
	context.fillStyle = "#E65800";
	context.font = "bold 30px Arial";
	context.fillText("A", 25, 25);
	document.body.appendChild(canvas);
	canvas.style.display = "none";*/
    
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
        	newScrollPoint = window.pageYOffset - 8;
        	window.scrollTo(0, newScrollPoint);
        	
        }
        if(ay < -3 && ay > -6){
        	newScrollPoint = window.pageYOffset + 8;
        	window.scrollTo(0, newScrollPoint);
        	
        }
        if(ay > 2 && ay < 5){
        	newScrollPoint = window.pageYOffset - 15;
        	window.scrollTo(0, newScrollPoint);
        }
        if(ay < -5 && ay > -8){
        	newScrollPoint = window.pageYOffset + 15;
        	window.scrollTo(0, newScrollPoint);
        }
        if(ay > 4){
        	newScrollPoint = window.pageYOffset - 30;
        	window.scrollTo(0, newScrollPoint);
        	/*
        	canvasTop = (window.innerHeight/2).toString() + "px";
        	canvas.style.top =  canvasTop;
        	canvas.style.display = "inline";
        	*/
        }
        if(ay < -7){
        	newScrollPoint = window.pageYOffset + 30;
        	window.scrollTo(0, newScrollPoint);
        	
        	/*
        	canvasTop = (window.innerHeight/2).toString() + "px";
        	canvas.style.top =  canvasTop;
        	canvas.style.display = "inline";
        	*/
        }
        /*
         else{
        	canvas.style.display = "none";
        }
        */
        
        
        if(ax >= 6 && az <= -6 && selectionDialogVisible === 0){
        	console.log("EKAIFFI");
        	var elem = document.elementFromPoint(0, window.innerHeight/2);
        	var body = document.getElementById("body");
        	
    		if(elem.type == "button" && selectionDialogVisible === 0){
    			var elementName = elem.textContent;
            	alert("You have selected:\n" + elementName);
            	console.log("ALERTTIIFFI");
            }
    		selectionDialogVisible = 1;
        }
        else if(ax < 6 && az > -6 && selectionDialogVisible === 1){
        	selectionDialogVisible = 0;
        	console.log("LIPUNNOLLAUSIFFI");
        }
    }
   
    function highlight(e){
    	var elem = document.elementFromPoint(0, window.innerHeight/2);
    	var body = document.getElementById("body");
    	
		if(elem.type == "button"){

    		if(oldHighlighted != null && oldHighlighted != elem){
    			oldHighlighted.style.backgroundColor = '#404040';
    		}
    		
    		elem.style.backgroundColor = '#E65800';
    		oldHighlighted = elem;
        		        	
        }
    
    }
};
