// map variables (can be zoomed and opens with a precise center)
let mapOptions1 = {
    scrollwheel: true, zoom: 9, center: new google.maps.LatLng(46.071065, 13.232324)
};

let map = new google.maps.Map(document.getElementById('mtb_01'), mapOptions1);

// add the kml itinerary obtained with url
const MAPLayer = new google.maps.KmlLayer({
    url: "https://sites.google.com/site/pathprojectunimi/mtb/0111.kml", map: map
});


// windows for adding comments in specific map points (start, arrival, lake)
const contentString_partenza = '<div class="infowindow">' + 'ARRIVO a ' + '<br>' + '<ul>' + '<li>' + 'Sauris di Sopra' + '</li>' + '<br>' + '<li>' + 'altezza: ' + '1813m' + '</li>' + '</ul>' + '<br>' + '<button id="comtButton" class="function" onclick="openwindow(2)">' + 'commenta' + '</button>' + '</div>';
const infowindow_partenza = new google.maps.InfoWindow({
    content: contentString_partenza
});

const partenza = new google.maps.Marker({
    position: new google.maps.LatLng(46.47868, 12.61289), map,
});

partenza.addListener("click", () => {		// open window on user click
    infowindow_partenza.open(map, partenza);
});


const contentString_arrivo = '<div class="infowindow">' + 'ARRIVO a ' + '<br>' + '<ul>' + '<li>' + 'Villa Santina' + '</li>' + '<br>' + '<li>' + 'Altezza: ' + '363m' + '</li>' + '</ul>' + '<br>' + '<button id="comtButton" class="function" onclick="openwindow(3)">' + 'commenta' + '</button>' + '</div>';
const infowindow_arrivo = new google.maps.InfoWindow({
    content: contentString_arrivo
});

const arrivo = new google.maps.Marker({
    position: new google.maps.LatLng(46.416859, 12.92092), map,
});

arrivo.addListener("click", () => {
    infowindow_arrivo.open(map, arrivo);
});


// I call camera the point of the lake that has a camera-shaped icon
const contentString_camera = '<div class="infowindow">' + 'Luogo panoramico: Lago di Sauris' + '<br>' + '<br>' + '<button id="comtButton" class="function" onclick="openwindow(4)">' + 'commenta' + '</button>' + '</div>';

const infowindow_camera = new google.maps.InfoWindow({
    content: contentString_camera
});

const camera = new google.maps.Marker({
    position: new google.maps.LatLng(46.452191, 12.732710),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/camera.jpg',
    map,
});

camera.addListener("click", () => {
    infowindow_camera.open(map, camera);
});

// SHOPS LIST //
let shops = []; // array containing markers with shop positions (google.maps.Marker)
let xhttpShops = new XMLHttpRequest();
xhttpShops.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let shopsChoords = JSON.parse(this.responseText);
        createMarker(shopsChoords, shops, 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg');
    }
};
xhttpShops.open("GET", "../../../Contents/shops.json", true);
xhttpShops.send();

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
    console.log(choords);
    for (let i = 0; i < choords.length; i++) {
        let marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(choords[i].latitude, choords[i].longitude),
            icon: iconImage,
            optimized: true
        });
        arrayOfMarkers.push(marker);  // ex: shops.push(marker)
    }
    // initially do not display shops and chargers on the map
    setMapOnAllMarkers("shop", null);
    setMapOnAllMarkers("charger", null);
}

function setMapOnAllMarkers(typeOfMarker, map) {					// load shops on map
    if (typeOfMarker == "shop" || typeOfMarker == "shops")
    {
        for (let i = 0; i < shops.length; i++)
            shops[i].setMap(map);
    }
    else    // chargers
    {
        for (let i = 0; i < chargers.length; i++) 	// load chargers on map
            chargers[i].setMap(map);
    }
}


let show_sh = true;  // parameter to toggle the functionality of the button that activates the function (show/hide)
function show_markers(typeOfMarker) {

    if (show_sh) {
        setMapOnAllMarkers(typeOfMarker, map);
        if (typeOfMarker == "shop")
            document.getElementById("show_shop").innerHTML = "Nascondi officine";
        else
            document.getElementById("show_charger").innerHTML = "Nascondi Stazioni di Ricarica";

        show_sh = false;
    } else {
        setMapOnAllMarkers(typeOfMarker, null);
        show_sh = true;

        if (typeOfMarker == "shop")
            document.getElementById("show_shop").innerHTML = "Mostra officine";
        else
            document.getElementById("show_charger").innerHTML = "Mostra Stazioni di Ricarica";

    }
}


let geomarker, circle;  // variables to display device location
let show_gl = false; // parameter to toggle the functionality of the button that activates the function (show/hide)

function getLocation() {
    if (show_gl) {
        if (geomarker) geomarker.setMap(null);
        if (circle) circle.setMap(null);
        show_gl = false;
    } else {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocalizzazione non supportata da questo browser.");
        }
        show_gl = true;
    }

    if (geomarker) geomarker.setMap(null);
    if (circle) circle.setMap(null);
}


function showPosition(position) {
    geomarker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_bike_position.jpg',
        visible: true,
    });

    circle = new google.maps.Circle({
        map: map, radius: 1000, fillColor: '#0000ff', strokeWeight: 0,
    });
    circle.bindTo('center', geomarker, 'position');   // associate the circle to the marker
}


/* COMMENTS */

// first call on page opening, to load comments and print the number in console
window.onload = function () {
    getComments("0", 0); // because I want all of them, and I show 6
    $.get("/api/comments/list/mtb/m1").done(function (dataComments) {	 // attempt to load comments
        dataComments = JSON.parse(dataComments);
        console.log("total number of comments: ", dataComments.length);
    });
};

function updateComments() {
    let id_marker = document.getElementById("mySelect").value;  // id_marker is 1 or 2 or 3...
    getComments(id_marker, 6);
}


function generateComment(c_id) {

    let c_name = $("#name").val();
    let c_text = $("#textcomment").val();

    // calculate the date and save it in a user-friendly format
    let c_date = new Date();
    let y = c_date.getFullYear();
    let m = c_date.getMonth() + 1;
    let d = c_date.getDate();
    let datedmy = d + "/" + m + "/" + y;   // example 20/6/2010

    if (!c_text || !c_name) {
        alert("hai lasciato vuoto uno o più campi!");
    } else {
        let objComment = {
            name: c_name, text: c_text, id: c_id, date: datedmy
        };
        $('#c_name').val('');					// clear input types
        $('#textcomment').val('');

        modal.style.display = "none";		// hide infowindow


        $.post("/api/comments/add/mtb/m1", objComment)  // send comment and then display
            .done(function () {
                getComments("0", 1);
                updateComments(); 			// to restore the visualization of only interested comments
            })
            .fail(function (data) {
                alert(`Non è stato possibile aggiungere il commento: ${data}`);
            })
    }


}

// parameters for getComments function (to view only comments of a marker)
let number_c = 0;

function getComments(id_marker, counter_c) { // parameters: comments id (to view), number of comments to view
    let comment_count = 0; 						 // comment counter
    if (counter_c == 0)
        number_c = 6;  // number of comments to view returns to initial: 6
    else
        number_c += counter_c;
    $.get("/api/comments/list/mtb/m1").done(function (dataComments) {	 // attempt to load comments

        let dataC = JSON.parse(dataComments);
        $("#comments").each(function () {
            $(this).empty();
            $(this).empty();
        });

        if (id_marker === "0") {  // if equal to zero, view all comments
            for (let i = dataC.length - 1; i >= 0 && comment_count < (number_c); i--) {
                let comment = dataC[i];
                $(`#comments`).append(`  
										<div class="modal-content">
										    <div class="modal-header">
										      ${descrMarker(comment.id)}
										    </div>
										    <div class="modal-body">
										    	${comment.name}<br>
										      	<p>${comment.text}</p>
										      	${comment.date}
										    </div>
										    <div class="modal-footer"></div>
										</div><br>
										`);
                comment_count += 1;
            }

        } else {  // if different from zero, I want to view only certain comments
            for (let i = dataC.length - 1; i >= 0 && comment_count < (number_c); i--) {
                let comment = dataC[i];
                if (id_marker === comment.id) { // view only comments with that id
                    $(`#comments`).append(`  						 		
										<div class="modal-content">
										    <div class="modal-header">
										      ${descrMarker(comment.id)} 
										    </div>
										    <div class="modal-body">
										    	${comment.name}<br>
										      	<p>${comment.text}</p>
										      	${comment.date}
										    </div>
										    <div class="modal-footer"></div>
										</div><br>
										`);
                    comment_count += 1;
                }
            }
        }

        // if there are other comments display "VIEW OTHER COMMENTS" button
        $("#number_comments").html("Commenti visualizzati: " + comment_count);


        // if there are still comments to view, insert the button to view them
        // calculate the number of comments for that id, to know if I have to print the "view other comments" button
        let number_c_ofID = dataC.length;
        if (id_marker != "0") { // calculate number of comments for that marker
            number_c_ofID = 0;
            for (let i = 0; i < dataC.length; i++) if (id_marker == dataC[i].id) number_c_ofID += 1;
        } // print the button in any case, whether it's marker x or all comments
        if (number_c_ofID > comment_count) // print only if there are still comments to view
            $("#update_comments").html("<button class='function' style='float: right;' type='submit' onclick='updateComments()'>Visualizza Altri Commenti</button>");
        // if I load all of them on page and don't want to view them anymore, I hide it
        else $("#update_comments").empty();


        comment_count = 0;
    })

        .fail(function (data) {
            alert(`Non è stato possibile caricare i commenti: ${data}`);
        })

}

/* FUNCTIONS FOR COMMENT ADDITION WINDOW */

let modal = document.getElementById("myModal");

// button that opens the window
let btn = document.getElementById("comtButton");

// element that closes the window
let span = document.getElementsByClassName("close")[0];

// function to open the window
function openwindow(id) {
    /* ADD PRECISE MARKER TO COMMENT WINDOW */
    let marcatore = descrMarker(id);
    $("#marcatore").html("<p>Marcatore percorso: " + marcatore + "</p>");
    $("#id_marcatore").html(id);
    $("#id-button").html("<p><button class='function' type='submit' onclick='generateComment(" + id + ")'>Invia Commento!</button></p>");

    modal.style.display = "block";
}

// hide window when clicking x
span.onclick = function () {
    modal.style.display = "none";
}

// hide window when clicking anywhere outside it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


// BASED ON MARKER ID, RETURN A STRING WITH ITS RELATIVE NAME
function descrMarker(id) {

    let id_m = Number.parseInt(id);  // convert strings to int
    let marcatore;
    switch (id_m) {

        case 0:
            marcatore = "tutti i marcatori";
            break;

        case 1:
            marcatore = "tutto il percorso";
            break;

        case 2:
            marcatore = "partenza";
            break;

        case 3:
            marcatore = "arrivo";
            break;

        case 4:
            marcatore = "lago di Sauris (zona Maina)";
            break;

        default:
            marcatore = "altro";
    }

    return marcatore;
}

if (typeof module !== 'undefined') {
    module.exports = {
        createMarker,
        setMapOnAllMarkers,
        show_markers,
        getLocation,
        showPosition,
        updateComments,
        generateComment,
        getComments,
        openwindow,
        descrMarker
    };
}
