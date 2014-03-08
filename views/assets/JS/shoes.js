// JavaScript Document
function switch1()
{
	document.getElementById("shoes1").innerHTML="<img src='shoes2.jpg'>";
}

var p = document.getElementById("shoes1");
p.onclick = switch1();
//               <element onclick="switch()">
