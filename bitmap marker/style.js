
      function initMap() 
      {
      /*
      script to change basic map layout
      */
      
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv,{center: {lat: 28.6139, lng: 77.2090}, zoom: 5 });
        setMarkers(map);
      /*
      script to change map features like element geometry, visibilitiy of various components,hue,saturation.
      */
        map.set('styles' , [
                      { stylers: [
                                 { hue: "#00ffe6" },{ saturation: -20 } 
                                 ]
                      },
                      { featureType: "road", elementType: "geometry", stylers: [
                                 { lightness: 100 },
                                 { visibility: "simplified" }
                                 ]
                      },
                      { featureType: "poi.cities", elementType: "labels", stylers: [
                                 { visibility: "off" }
                                 ]
                      }
                      ]);
}
      /*
      script to change icon of POC/marker on map 
      */
      function setMarkers(map) {
        var image = 'http://maps.google.com/mapfiles/kml/shapes/';
        var beachMarker = new google.maps.Marker({
          position: {lat: 28.6139, lng: 77.2090},
          map: map,
          icon: image+'road_shield3.png'
        });

        var beachMarker2 = new google.maps.Marker({
          position: {lat: 22.5726, lng: 88.3639},
          map: map,
          icon: image+'polygon.png'
        });
        // Data for the markers consisting of a name, a LatLng and a zIndex for the
        // order in which these markers should display on top of each other.
        var beaches = [
        ['Bondi Beach', -33.890542, 151.274856, 4],
        ['Coogee Beach', -33.923036, 151.259052, 5],
        ['Cronulla Beach', -34.028249, 151.157507, 3],
        ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
        ['Maroubra Beach', -33.950198, 151.259302, 1]
      ];
        // Marker sizes are expressed as a Size of X,Y where the origin of the image
        // (0,0) is located in the top left of the image.

        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.
        var image = {
          url: 'http://maps.google.com/mapfiles/kml/shapes/polygon.png',
          /* This marker is 50 pixels wide by 50 pixels high.The image gets cropped in this case.
          In case we give a range greater than that of the actual size of icon , the size will limit at its max.
          */
          size: new google.maps.Size(50, 50),

          /*The marker can be scaled from (0,0) to (max,max)
          this feature will help in increasing the size of marker proportionally ie image will not get cropped 
          but resized.
          */
          scaledSize: new google.maps.Size(40, 40),
          
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32)
        };
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };
        for (var i = 0; i < beaches.length; i++) {
          var beach = beaches[i];
          var marker = new google.maps.Marker({
            position: {lat: beach[1], lng: beach[2]},
            map: map,
            icon: image,
            shape: shape,
            title: beach[0],
            zIndex: beach[7]
          });
        }
      }
       



