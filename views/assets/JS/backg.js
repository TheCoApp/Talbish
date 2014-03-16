// JavaScript Document
function setStatusBar(msgStr) { self.status = msgStr; } 
msgstr = "stamkoteret";

 function disableRightClick(e)
 {
  var message = "זה לפלאפונים סבבה? כפתור ימני זה לחלשים";
  if(!document.rightClickDisabled) // initialize
  {
    if(document.layers) 
    {
      document.captureEvents(Event.MOUSEDOWN);
      document.onmousedown = disableRightClick;
    }
    else document.oncontextmenu = disableRightClick;
    return document.rightClickDisabled = true;
  }
  if(document.layers || (document.getElementById && !document.all))
  {
    if (e.which==2||e.which==3)
    {
      alert(message);
      return false;
    }
  }
  else
  {
    alert(message);
    return false;
  }
 }
disableRightClick();

// Example:

// var b = new BrowserInfo();

// alert(b.version); 

var backArray = new Array();
backArray[0] = new Image();
backArray[0].src = 'images/class.jpg';
backArray[1] = new Image();
backArray[1].src = 'images/office.jpg';
backArray[2] = new Image();
backArray[2].src = 'images/nature.jpg';

i=1
function backchange(){
	document.getElementById('background').style.background = 'url('+backArray[i].src+'), 100% 100%';
	window.location.href = "#main";  
	}