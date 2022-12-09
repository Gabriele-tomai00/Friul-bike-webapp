function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
        var mapOptions1 = {
          scrollwheel: true,
          zoom: 9,
          center: new google.maps.LatLng(46.071065, 13.232324)
        };
               
        var map = new google.maps.Map(document.getElementById('shopmap'),mapOptions1);

          
          var marker1 = new google.maps.Marker({
          map: map, position: new google.maps.LatLng(46.120876, 13.224290),
          icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
          });
       
          var marker2 = new google.maps.Marker({
          map: map, position: new google.maps.LatLng(46.065163, 13.239396),
          icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
          });
         

          var marker3 = new google.maps.Marker({
          map: map, position: new google.maps.LatLng(46.100883, 13.419984),
          icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
          });

          var marker4 = new google.maps.Marker({
          map: map, position: new google.maps.LatLng(45.972660, 12.975724),
          icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
          });


          var marker5 = new google.maps.Marker({
          map: map, position: new google.maps.LatLng(46.026559, 12.875474),
          icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
          });

          var marker6 = new google.maps.Marker({
          map: map, position: new google.maps.LatLng(45.996039, 12.708619),
          icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
          });

          var marker7 = new google.maps.Marker({
          map: map, position: new google.maps.LatLng(45.942628, 13.572000),
          icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
          });

          var marker8 = new google.maps.Marker({
          map: map, position: new google.maps.LatLng(46.411179, 13.024993),
          icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
          });

          var marker9 = new google.maps.Marker({
          map: map, position: new google.maps.LatLng(46.523026, 13.532599),
          icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
          });

          var marker10 = new google.maps.Marker({
          map: map, position: new google.maps.LatLng(46.433185, 12.347449),
          icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
          });

          var marker11 = new google.maps.Marker({
          map: map, position: new google.maps.LatLng(45.807236, 13.522339),
          icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
          });

        var marker12 = new google.maps.Marker({
          map: map, position: new google.maps.LatLng(45.631533, 13.811415),
          icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
          });

        var marker13 = new google.maps.Marker({
          map: map, position: new google.maps.LatLng(45.649024, 13.766558),
          icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
          });


