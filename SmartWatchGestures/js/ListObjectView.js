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
    
    

}


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}