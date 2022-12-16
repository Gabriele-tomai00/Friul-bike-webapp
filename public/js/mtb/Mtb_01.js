// variabili della mappa (si può ingrandire e viene aperta con un centro preciso)
let mapOptions1 = {
    scrollwheel: true, zoom: 9, center: new google.maps.LatLng(46.071065, 13.232324)
};

let map = new google.maps.Map(document.getElementById('mtb_01'), mapOptions1);

// aggiungo l'itinerario kml ottenuto con url
const MAPLayer = new google.maps.KmlLayer({
    url: "https://sites.google.com/site/pathprojectunimi/mtb/0111.kml", map: map
});


// finestre per l'aggiunta di commenti in punti precisi della mappa (partenza, arrivo, lago)
const contentString_partenza = '<div class="infowindow">' + 'ARRIVO a ' + '<br>' + '<ul>' + '<li>' + 'Sauris di Sopra' + '</li>' + '<br>' + '<li>' + 'altezza: ' + '1813m' + '</li>' + '</ul>' + '<br>' + '<button id="myBtn" class="function" onclick="openwindow(2)">' + 'commenta' + '</button>' + '</div>';
const infowindow_partenza = new google.maps.InfoWindow({
    content: contentString_partenza
});

const partenza = new google.maps.Marker({
    position: new google.maps.LatLng(46.47868, 12.61289), map,
});

partenza.addListener("click", () => {		//apro la finestra al click dell'utente
    infowindow_partenza.open(map, partenza);
});


const contentString_arrivo = '<div class="infowindow">' + 'ARRIVO a ' + '<br>' + '<ul>' + '<li>' + 'Villa Santina' + '</li>' + '<br>' + '<li>' + 'Altezza: ' + '363m' + '</li>' + '</ul>' + '<br>' + '<button id="myBtn" class="function" onclick="openwindow(3)">' + 'commenta' + '</button>' + '</div>';
const infowindow_arrivo = new google.maps.InfoWindow({
    content: contentString_arrivo
});

const arrivo = new google.maps.Marker({
    position: new google.maps.LatLng(46.416859, 12.92092), map,
});

arrivo.addListener("click", () => {
    infowindow_arrivo.open(map, arrivo);
});


// chiamo camera il punto del lago che ha un icona a forma di telecamera
const contentString_camera = '<div class="infowindow">' + 'Luogo panoramico: Lago di Sauris' + '<br>' + '<br>' + '<button id="myBtn" class="function" onclick="openwindow(4)">' + 'commenta' + '</button>' + '</div>';

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

// LISTA OFFICINE //
let shops = [];
shop = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(46.120876, 13.224290),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg',
    optimized: true
});
shops.push(shop);

shop = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(46.065163, 13.239396),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg',
    optimized: true
});
shops.push(shop);

shop = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(46.100883, 13.419984),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg',
    optimized: true
});
shops.push(shop);

shop = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(45.972660, 12.975724),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg',
    optimized: true
});
shops.push(shop);

shop = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(46.026559, 12.875474),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg',
    optimized: true
});
shops.push(shop);

shop = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(45.996039, 12.708619),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg',
    optimized: true
});
shops.push(shop);

shop = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(45.942628, 13.572000),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg',
    optimized: true
});
shops.push(shop);

shop = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(46.411179, 13.024993),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg',
    optimized: true
});
shops.push(shop);

shop = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(46.523026, 13.532599),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg',
    optimized: true
});
shops.push(shop);

shop = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(46.433185, 12.347449),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg',
    optimized: true
});
shops.push(shop);

shop = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(45.807236, 13.522339),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg',
    optimized: true
});
shops.push(shop);

shop = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(45.631533, 13.811415),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg',
    optimized: true
});
shops.push(shop);

shop = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(45.649024, 13.766558),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg',
    optimized: true
});
shops.push(shop);

// LISTA COLONNINE DI RICARICA //
let chargers = [];
charger = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(46.520509, 13.584922),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg',
    optimized: true
});
chargers.push(charger);

charger = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(46.186966, 12.704981),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg',
    optimized: true
});
chargers.push(charger);

charger = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(46.175804, 13.212284),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg',
    optimized: true
});
chargers.push(charger);

charger = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(46.028968, 12.653150),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg',
    optimized: true
});
chargers.push(charger);

charger = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(45.710037, 13.132824),
    icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg',
    optimized: true
});
chargers.push(charger);

//inizialmente non visualizzo officine e colonnine sulla mappa
setMapOnAllshop(null);
setMapOnAllcharger(null);

function setMapOnAllshop(map) {					//carico in mappa le officine
    for (let i = 0; i < shops.length; i++) {
        shops[i].setMap(map);
    }
}

function setMapOnAllcharger(map) {
    for (let i = 0; i < chargers.length; i++) {	//carico in mappa le colonnine
        chargers[i].setMap(map);
    }
}


let show_sh = true;  //parametro per alternare la funzionalità del bottone che attiva la funzione (mostra/nascondi)
function show_shop() {

    if (show_sh) {
        setMapOnAllshop(map);
        show_sh = false;
    } else {
        setMapOnAllshop(null);
        show_sh = true;
    }
}

let show_ch = true;	//parametro per alternare la funzionalità del bottone che attiva la funzione (mostra/nascondi)
function show_charger() {

    if (show_ch) {
        setMapOnAllcharger(map);
        show_ch = false;
    } else {
        setMapOnAllcharger(null);
        show_ch = true;
    }
}


let geomarker, circle;  //variabili per visualizzare la località del dispositivo
let show_gl = false; //parametro per alternare la funzionalità del bottone che attiva la funzione (mostra/nascondi)

function getLocation() {
    if (show_gl) {
        geomarker.setMap(null);
        circle.setMap(null);
        show_gl = false;
    } else {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocalizzazione non supportata da questo browser.");
        }
        show_gl = true;
    }

    geomarker.setMap(null);
    circle.setMap(null);
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
    circle.bindTo('center', geomarker, 'position');   //associo il cerchio al marker
}


/* COMMENTI */

//prima chiamata all'apertura della pagina, per caricare i commenti e stampare in console il numero
window.onload = function () {
    getComments("0"); //perchè li voglio tutti
    $.get("/api/comments/list/mtb/m1").done(function (data) {	 //tento di caricare i commenti
        data = JSON.parse(data);
        console.log("numero totale di commenti: ", data.length);
    });
};

function updateComments() {
    let id_marker = document.getElementById("mySelect").value;  //l'id_marker vale 1 o 2 o 3...
    getComments(id_marker);
}


function generateComment(c_id) {

    let c_name = $("#name").val();
    let c_text = $("#textcomment").val();

    // calcolo la data e la salvo in un formato comodo all'utente
    let c_date = new Date();
    let y = c_date.getFullYear();
    let m = c_date.getMonth() + 1;
    let d = c_date.getDate();
    let datedmy = d + "/" + m + "/" + y;   // esempio 20/6/2010

    if (!c_text || !c_name) {
        alert("hai lasciato vuoto uno o più campi!");
    } else {
        let objComment = {
            name: c_name, text: c_text, id: c_id, date: datedmy
        };
        $('#c_name').val('');					//pulisco gli inputype
        $('#textcomment').val('');

        modal.style.display = "none";		//nascondo l'infowindow


        $.post("/api/comments/add/mtb/m1", objComment)  //invio il commento e poi visualizzo
            .done(function () {
                getComments("0");
                updateComments(); 			//per ripristinare la visualizzazione dei soli commenti d'interesse
            })
            .fail(function (data) {
                alert(`Non è stato possibile aggiungere il commento: ${data}`);
            })
    }


}

//parametri per la funzione getComments (per visualizzare solo i commenti di un marcatore)
let number_c = 0;

function getComments(id_marker) {
    let comment_count = 0; 						 //contatore dei commenti
    number_c += 1;
    $.get("/api/comments/list/mtb/m1").done(function (data) {	 //tento di caricare i commenti

        data = JSON.parse(data);
        $("#comments").each(function () {
            $(this).empty();
            $(this).empty();
        });

        if (id_marker === "0") {  //se uguale a zero, visualizzo tutti i commenti
            for (let i = data.length - 1; i >= 0 && comment_count < (6 * number_c); i--) {
                let comment = data[i];
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

        } else {  //se diverso da zero, voglio visualizzare solo certi commenti
            for (let i = data.length - 1; i >= 0 && comment_count < (6 * number_c); i--) {
                let comment = data[i];
                if (id_marker === comment.id) { //visualizzo solo i commenti con quell'id
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

        // se ci sono altri commenti visualizzo il tasto "VISUALIZZA ALTRI COMMENTI"
        $("#number_comments").html("Commenti visualizzati: " + comment_count);


        // se ci sono ancora commenti da visualizzare, inserisco il bottone per visualizzarli
        // calcolo il numero di commenti per quell'id, per sapere se devo stampare il bottone "visualizza altri commenti"
        let number_c_ofID = data.length;
        if (id_marker != "0") { //calcolo il numero dei commenti per quel marcatore
            number_c_ofID = 0;
            for (let i = 0; i < data.length; i++) if (id_marker == data[i].id) number_c_ofID += 1;
        } // stampo in ogni caso il bottone, che sia marcatore x oppure tutti i commenti
        if (number_c_ofID > comment_count) //lo stampo solo se ci sono ancora commenti da visualizzare
            $("#update_comments").html("<button class='function' style='float: right;' type='submit' onclick='updateComments()'>Visualizza Altri Commenti</button>");
        // se li carico tutti in pagina e non voglio più visualizzarli, lo nascondo
        else $("#update_comments").empty();


        comment_count = 0;
    })

        .fail(function (data) {
            alert(`Non è stato possibile caricare i commenti: ${data}`);
        })

}

/* FUNZIONI PER LA FINESTRA DI AGGIUNTA COMMENTI */

let modal = document.getElementById("myModal");

// bottone che apre la finestra
let btn = document.getElementById("myBtn");

// elemento che chiude la finestra
let span = document.getElementsByClassName("close")[0];

// funzione per aprire la finestra
function openwindow(id) {
    /* AGGIUNGO IL MARCATORE PRECISO ALLA FINESTRA DEL COMMENTO */
    let marcatore = descrMarker(id);
    $("#marcatore").html("<p>Marcatore percorso: " + marcatore + "</p>");
    $("#id_marcatore").html(id);
    $("#id-button").html("<p><button class='function' type='submit' onclick='generateComment(" + id + ")'>Invia Commento!</button></p>");

    modal.style.display = "block";
}

// nascondo la finestra quando clicco la x
span.onclick = function () {
    modal.style.display = "none";
}

// nascondo la finestra quando clicco un punto qualsiasi fuori da essa
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


// IN BASE ALL'ID DEL MARCATORE, RESTITUISCO UNA STRINGA CON IL SUO RELATIVO NOME
function descrMarker(id) {

    let id_m = parseInt(id);  // converto in int le stringhe
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


