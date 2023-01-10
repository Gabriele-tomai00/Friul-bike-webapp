function showLinks() {
    let x = document.getElementById("topNavBar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

let mapOptions1 = {
    scrollwheel: false,
    zoom: 8,
    center: new google.maps.LatLng(46.071065, 13.232324)
};

let map = new google.maps.Map(document.getElementById('shopmap'), mapOptions1);

// LISTA COLONNINE DI RICARICA //
let shops = []; // array contenente i marker con la posizione delle officine (google.maps.Marker)
let xhttpShops = new XMLHttpRequest();
xhttpShops.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let shopsChoords = JSON.parse(this.responseText);
        createMarker(shopsChoords, shops, 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg');
    }
};
xhttpShops.open("GET", "../../../Contents/shops.json", true);
xhttpShops.send();


function createMarker(choords, arrayOfMarkers, iconImage) {
    for (let i = 0; i < choords.length; i++) {
        let marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(choords[i].latitude, choords[i].longitude),
            icon: iconImage,
            optimized: true
        });
        arrayOfMarkers.push(marker);  // es: shops.push(marker)
    }
}


