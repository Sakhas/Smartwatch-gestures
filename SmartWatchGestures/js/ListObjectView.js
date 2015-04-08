var passedScrollPoint;
window.onload = function () {
	
	passedScrollPoint = getUrlVars()["passedScrollPoint"];
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
        	window.location = "List.html?lastScrollPoint=" + passedScrollPoint;
    });
    
    var selectedObjectName = getUrlVars()["selectedObject"];
    selectedObjectName = selectedObjectName.replace("%20", ' ');
    selectedObject.innerHTML = selectedObjectName;
    
    window.addEventListener('devicemotion', rotationScroller, true);
    
    

}

function rotationScroller(e){
	ax = Math.floor(e.accelerationIncludingGravity.x);
    ay = Math.floor(-e.accelerationIncludingGravity.y);
    az = Math.floor(-e.accelerationIncludingGravity.z);
    
    if(ax <= -5 && az <= -7 && ay <= 1  && ay >= -3){
    	passedScrollPoint = getUrlVars()["passedScrollPoint"];
    	window.removeEventListener('devicemotion', rotationScroller, true);
    	window.location = "List.html?lastScrollPoint=" + passedScrollPoint;
    	
    }
    
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}