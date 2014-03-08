// JavaScript Document

function BrowserInfo()

{

  this.name = navigator.appName;

  this.codename = navigator.appCodeName;

  this.version = navigator.appVersion.substring(0,4);

  this.platform = navigator.platform;

  this.javaEnabled = navigator.javaEnabled();

  this.screenWidth = screen.width;

  this.screenHeight = screen.height;
  
}

BrowserInfo();
var varbody=document.getElementById("body");
varbody.innerHTML=name+ "  " + codename+ "  " + version+ "  " + platform+ "  " + javaEnabled+ "  " + screenWidth+ "  " + screenHeight;	
