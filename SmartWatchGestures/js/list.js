var canvas;
var context;
var alphabet;


var canvasTop;
var canvasLeft;

window.onload = function () {
	

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
           window.location.href = "index.html";
    });

    screen.lockOrientation("portrait");
    
    var lastScrollPoint = getUrlVars()["lastScrollPoint"];
    
    if(lastScrollPoint != null){
    	window.scrollTo(0, parseInt(lastScrollPoint));
    	window.setTimeout(function() {setEventListener();}, 649);
    }else {
    	window.setTimeout(function() {setEventListener();}, 150);
    }
    
    canvas = document.createElement("CANVAS");
    canvas.style.width = "150px";
    canvas.style.height = "150px";
    canvas.style.position = "fixed";
    canvas.style.top = "50%";
    canvas.style.left = "50%";
    canvas.style.marginTop = "-75px";
    canvas.style.marginLeft = "-75px";
    canvas.style.zIndex = "1000";
    canvas.style.border = "1px solid #ccc";
    canvas.style.backgroundColor = "#E65800";
    canvas.style.opacity = "0.7";
    context = canvas.getContext("2d");
    setContext("A");
    document.body.appendChild(canvas);
    canvas.style.display = "none";
    
    //window.addEventListener('devicemotion', rotationScroller, true); 
    
    window.addEventListener('scroll', highlight, true);
    
}

function setEventListener() {
	window.addEventListener('devicemotion', rotationScroller, true);
}

function setContext(alphabet){
	context.font = "bold 90px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText(alphabet, 150, 95);
}
//tizen.power.request("SCREEN", "SCREEN_NORMAL");

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
	tr.appendChild(td);*/


var ax;
var ay;
var az;
var newScrollPoint;
var passedScrollPoint;
var oldHighlighted = null;

/* position:fixed;
    top: 50%;
    left: 50%;
    width:30em;
    height:18em;
    margin-top: -9em; 
    margin-left: -15em; 
    border: 1px solid #ccc;
    background-color: #f3f3f3;
*/


/*var rotx = Math.floor(e.rotationRate.alpha);
var roty = Math.floor(e.rotationRate.beta);*/
var rotBeta;
 
/*rotValueX.innerHTML = "Alpha: " + rotx;
rotValueY.innerHTML = "Beta: " + roty;
rotValueZ.innerHTML = "Gamma: " + rotz;*/

function rotationScroller(e){
	ax = Math.floor(e.accelerationIncludingGravity.x);
    ay = Math.floor(-e.accelerationIncludingGravity.y);
    az = Math.floor(-e.accelerationIncludingGravity.z);
            
    rotBeta = Math.floor(e.rotationRate.beta);
    
    if(ay > 1 && ay < 3 && ax <= 4 && ax >= -3){
    	newScrollPoint = window.pageYOffset - 4;
    	window.scrollTo(0, newScrollPoint);
    	
    }
    if(ay < -3 && ay > -6 && ax <= 4 && ax >= -3){
    	newScrollPoint = window.pageYOffset + 4;
    	window.scrollTo(0, newScrollPoint);
    	
    }
    if(ay > 2 && ay < 5 && ax <= 4 && ax >= -3){
    	newScrollPoint = window.pageYOffset - 12;
    	window.scrollTo(0, newScrollPoint);
    }
    if(ay < -5 && ay > -8 && ax <= 4 && ax >= -3){
    	newScrollPoint = window.pageYOffset + 12;
    	window.scrollTo(0, newScrollPoint);
    }
    if(ay > 4 && ax <= 4 && ax >= -3){
    	window.removeEventListener('scroll', highlight, true);
    	newScrollPoint = window.pageYOffset - 40;
    	window.scrollTo(0, newScrollPoint);
    	
    	canvasTop = (window.innerHeight/2).toString() + "px";
    	
    	var elem = document.elementFromPoint(0, window.innerHeight/2);
    	console.log("ELEM ID" + elem.id);
    	var elementName = elem.textContent;
    	var alphabet = elementName.charAt(0);
    	context.clearRect ( 0, 0, 300, 300);
    	setContext(alphabet);
    	canvas.style.display = "inline";
    	
    }
    if(ay < -7 && ax <= 3 && ax >= -3){
    	window.removeEventListener('scroll', highlight, true);
    	newScrollPoint = window.pageYOffset + 40;
    	window.scrollTo(0, newScrollPoint);
    	
    	
    	canvasTop = (window.innerHeight/2).toString() + "px";
    	
    	var elem = document.elementFromPoint(0, window.innerHeight/2);
    	var elementName = elem.textContent;
    	var alphabet = elementName.charAt(0);
    	context.clearRect ( 0, 0, 300, 300);
    	setContext(alphabet);
    	canvas.style.display = "inline";
    	
    }
    if(ay >= -7 && ay <= 4){
    	window.addEventListener('scroll', highlight, true);
    	canvas.style.display = "none";
    }
    
     
    
    
    
    if(ax >= 5 && az <= -5 && ay <= 1  && ay >= -3){
    	var elem = document.elementFromPoint(0, window.innerHeight/2);
    	console.log("rotBeta: " + rotBeta + " | ax: " + ax + " | az: " + az + " | ay: " + ay);
    	
		if(elem.type == "button"){
			var elementName = elem.textContent;
			window.removeEventListener('devicemotion', rotationScroller, true); 
    			passedScrollPoint = window.pageYOffset;
            	selectionDone(elementName);
            	
        }
    		
    }
    if(ax <= -5 && az <= -7 && ay <= 1  && ay >= -3){
    	window.removeEventListener('devicemotion', rotationScroller, true);
    	window.location.href = "index.html";
    	
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

function selectionDone(elementName){    	
	window.location = "ListObjectView.html?selectedObject=" + elementName + 
						"&passedScrollPoint=" + passedScrollPoint.toString();
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

