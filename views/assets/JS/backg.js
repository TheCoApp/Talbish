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


