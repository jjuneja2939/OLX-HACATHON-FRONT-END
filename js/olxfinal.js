$(window).load(function() {
	
    var date = new Date();
        var timestamp = date.getTime();
	$.ajax({
            type: "GET",
            cache : false,
            dataType: "json",
           	url: "js/aap.json?_="+timestamp
        })
        .done(function(response) {
			CreatePagewithData(response);
		  });
});
var rows = [];
 function CreatePagewithData(response){
       			
			
 }

 var map;
 
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 28.480, lng: 77.108},
    zoom: 8
  });
var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

var myLatLng = {lat: 28.578, lng: 77.365};
  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
	draggable: true,
    animation: google.maps.Animation.DROP,
    title: 'Available Red Honda Stunner For Sale'
  });
  marker.addListener('click', toggleBounce);

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}