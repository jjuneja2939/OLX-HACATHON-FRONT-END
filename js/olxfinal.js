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
  var bounds = new google.maps.LatLngBounds();
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 28.480, lng: 77.108},
    zoom: 8
	
  });
var infoWindow = new google.maps.InfoWindow({map: map});


var markers = [
        ['HONDA STUNNER, NOIDA', 28.578,77.365],
        ['BAJAJ PULSAR, GURGAON', 28.435,28.435],
		['HERO SPLENDOR, BANGALURU', 12.95,77.63],
		['TVS APACHE, CHENNAI', 13.047,80.209]
    ];

  // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Honda Stunner</h3>' +
        '<p>Available for sale a honda stunner bike. the bike is red coloured, 2012 make and 20000km driven.</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3>Bajaj Pulsar</h3>' +
        '<p>Available for sale a bajaj pulsar bike. the bike is red coloured, 2010 make and 35000km driven.</p>' +
        '</div>']
    ];
        
		
		// Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
// Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
		//alert("hi");
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });


// Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        //map.fitBounds(bounds);
	}
 

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

/*var myLatLng = {lat: 28.578, lng: 77.365};
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
}*/
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}