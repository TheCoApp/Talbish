// JavaScript Document
//var images = new Array()
//			function preload() {
//				for (i = 0; i < preload.arguments.length; i++) {
//					images[i] = new Image()
//					images[i].src = preload.arguments[i]
//				}
//			}
//			preload(
//				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26O79xqUYq1SGxu80naeSqAdM3DKXXNJ9mpbeMhiihcgUUBhW",
//				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy4mNoAnTDjRuxmzhpyPicYZUdnVXHQjkcFYwZoazPqZPcWlCs",
//				"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlckQIZpdstD6r3WAPpt_NuDoy_IN1z_NdiyTTCMmN6gXq7lYy"
//			)

var photos= new Array()

photos[0]= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26O79xqUYq1SGxu80naeSqAdM3DKXXNJ9mpbeMhiihcgUUBhW"
photos[1]= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy4mNoAnTDjRuxmzhpyPicYZUdnVXHQjkcFYwZoazPqZPcWlCs"

var index =0;

var z = "photos[index]"; 
//document.write(<img src='"z"'/>);

var varhead=document.getElementById("head");
varhead.innerHTML="<img src=photos[index] />";
