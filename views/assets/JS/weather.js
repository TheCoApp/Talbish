// JavaScript Document

// var x=document.getElementById("weather");
// function getLocation()
//  {
//      navigator.geolocation.getCurrentPosition(showPosition);
//  }
//function showPosition(position)
//  {
//  x.innerHTML="Latitude: " + position.coords.latitude + 
//  "<br>Longitude: " + position.coords.longitude;	
//  }
//  
//var y=getLocation();  
//document.write(y); 

var varweather=document.getElementById("weather");    
var geocoder;
var lat = 32.497233;
var lng = 35.498595;
var wicon = "'http://icons-ak.wxug.com/i/c/k/nt_clear.gif'";
//document.write("<p>weather js external</p>"); 

 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} 
//Get the latitude and the longitude;
 function successFunction(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    //alert(lat + "   " +lng);
	codeLatLng(lat, lng);
 }

 function errorFunction(){ //לא עובד כנראה
    //alert("Geocoder failed");
	//alert(lat + "   " +lng);
	codeLatLng(lat, lng);
	varweather.innerHTML+="Geocoder failed<br/>" + lat + "   " +lng;
 }

 function initialize() {
  geocoder = new google.maps.Geocoder();
 }

  function codeLatLng(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
      console.log(results)
        if (results[1]) {
         //formatted address
         //alert(results[0].formatted_address)
 			varweather.innerHTML+= " מה איבדת ב" + results[0].formatted_address + "<br/>" + lat + "  " +lng;
        //find country name
             for (var i=0; i<results[0].address_components.length; i++) {
             for (var b=0;b<results[0].address_components[i].types.length;b++) {

            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                    //this is the object you are looking for
                    city= results[0].address_components[i];
                    break;
                }
            }
        }
        //city data
		//var y="מה איבדת ב"+ city.short_name + " " + city.long_name;  
		//document.write(y); 
        //alert(city.short_name + " " + city.long_name)
        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
	
	
var varurl= 'http://api.wunderground.com/api/78c268ffc85f675f/geolookup/conditions/forecast/q/' + lat + ',' + lng + '.json';
jQuery(document).ready(function($) { $.ajax({ url : varurl, dataType : "jsonp", success : function(parsed_json) 
{ var location = parsed_json['location']['city']; var temp_c = parsed_json['current_observation']['temp_c']; 
var feelslike_c = parsed_json['current_observation']['feelslike_c'];
var theweather = parsed_json['current_observation']['weather']; 
var wicon = parsed_json['current_observation']['icon_url']; 

varweather.innerHTML+=("<br />Current temperature in " + location + " is: " + temp_c + ".   and feels like: " + feelslike_c + ", generally: " + theweather);
// varweather.innerHTML+=("<img src='wicon' width='160' height='160'>");
varweather.innerHTML+=("<img src=" + wicon + ">");
// document.getElementById('wimage').src = wicon;
 }
  }); }
  );

/*var varurl= 'http://api.wunderground.com/api/78c268ffc85f675f/geolookup/conditions/yesterday/q/' + lat + ',' + lng + '.json';
jQuery(document).ready(function($) { $.ajax({ url : varurl, dataType : "jsonp", success : function(parsed_json) 
{ var location = parsed_json['location']['city']; var temp_c = parsed_json['history']['temp_c']; 
var feelslike_c = parsed_json['history']['feelslike_c'];
var theweather = parsed_json['history']['weather']; 
var wicon = parsed_json['history']['icon_url']; 

varweather.innerHTML+=("yesterday temperature in " + location + " is: " + temp_c + ".   and feels like: " + feelslike_c + ", generally: " + theweather);
// varweather.innerHTML+=("<img src='wicon' width='160' height='160'>");
varweather.innerHTML+=("<img src=" + wicon + ">");
// document.getElementById('wimage').src = wicon;
 }
  }); }
  );*/
		
  }
