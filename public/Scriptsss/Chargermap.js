function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

let mapOptions1 = {
    scrollwheel: false,
    zoom: 9,
    center: new google.maps.LatLng(46.071065, 13.232324)
};

let map = new google.maps.Map(document.getElementById('chargermap'), mapOptions1);


/* MARKER */

let marker1 = new google.maps.Marker({
    map: map, position: new google.maps.LatLng(46.520509, 13.584922),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg'

});

let marker2 = new google.maps.Marker({
    map: map, position: new google.maps.LatLng(46.186966, 12.704981),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg'
});


let marker3 = new google.maps.Marker({
    map: map, position: new google.maps.LatLng(46.175804, 13.212284),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg'
});

let marker4 = new google.maps.Marker({
    map: map, position: new google.maps.LatLng(46.028968, 12.653150),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg'
});

let marker5 = new google.maps.Marker({
    map: map, position: new google.maps.LatLng(45.710037, 13.132824),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg'
});
