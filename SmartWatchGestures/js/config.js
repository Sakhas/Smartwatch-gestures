window.onload = function () {
	

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
           window.location.href = "index.html";
    });
    screen.lockOrientation("portrait");
  //tizen.power.request("SCREEN", "SCREEN_NORMAL");
  window.addEventListener('devicemotion', rotationScroller, true);

  var confCookie = readCookie('reverted');
  if(confCookie){
  	if(confCookie === "on"){
  		document.getElementById("on").checked = true;
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

var ax;
var ay;
var az;



function rotationScroller(e){
	ax = Math.floor(e.accelerationIncludingGravity.x);
	ay = Math.floor(-e.accelerationIncludingGravity.y);
	az = Math.floor(-e.accelerationIncludingGravity.z);

	if(ax <= -5 && az <= -7 && ay <= 1  && ay >= -3){
		window.removeEventListener('devicemotion', rotationScroller, true);
		if(document.getElementById("on").checked){
			window.location.href = "index.html?revertedScrolling=on";
			createCookie("reverted", "on", 2);
		}
		else{
			window.location.href = "index.html?revertedScrolling=off";
			createCookie("reverted", "off", 2);
		}
	}
}

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}