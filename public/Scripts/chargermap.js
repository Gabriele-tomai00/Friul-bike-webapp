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
    zoom: 9,
    center: new google.maps.LatLng(46.071065, 13.232324)
};

let map = new google.maps.Map(document.getElementById('chargermap'), mapOptions1);

// CHARGING STATIONS LIST //
let chargers = []; // array containing markers with shop positions (google.maps.Marker)
let xhttpChargers = new XMLHttpRequest();
xhttpChargers.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let chargersChoords = JSON.parse(this.responseText);
        createMarker(chargersChoords, chargers, 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg');
    }
};
xhttpChargers.open("GET", "../../../Contents/chargers.json", true);
xhttpChargers.send();


function createMarker(choords, arrayOfMarkers, iconImage) {
    for (let i = 0; i < choords.length; i++) {
        let marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(choords[i].latitude, choords[i].longitude),
            icon: iconImage,
            optimized: true
        });
        arrayOfMarkers.push(marker);  // ex: shops.push(marker)
    }
}

if (typeof module !== 'undefined') {
    module.exports = { createMarker, showLinks };
}
