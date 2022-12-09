/*FUNZIONE PER RENDERE RESPONSIVE LA BARRA SUPERIORE

function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
*/

let shop, charger;
let shops = [];
let chargers = [];

// variabili della mappa (si può ingrandire e viene aperta con un centro preciso)
let mapOptions1 = {
    scrollwheel: true,
    zoom: 9,
    center: new google.maps.LatLng(46.071065, 13.232324)
  };

let map = new google.maps.Map(document.getElementById('mtb_01'),mapOptions1);

// aggiungo l'itinerario kml ottenuto con url
const MAPLayer = new google.maps.KmlLayer({
  url: "https://sites.google.com/site/pathprojectunimi/mtb/0111.kml",
  map: map
});


// finestre per l'aggiunta di commenti in punti precisi della mappa (partenza, arrivo, lago)
const contentString_partenza =
	'<div class="infowindow">' + 'PARTENZA da ' + '<br>' +
		'- Sauris di Sopra' + '<br>' +
		'- altezza: '	+ '1813m' + '<br>' + '<br>' +
	  	'<button id="myBtn" class="function" onclick="openwindow(2)">' + 'commenta' + '</button>' +
  	'</div>';

        const infowindow_partenza = new google.maps.InfoWindow ({
        content: contentString_partenza
    });

  	const partenza = new google.maps.Marker({
    	position: new google.maps.LatLng(46.47868, 12.61289),
    	map,
    });

  	partenza.addListener("click", () => {		//apro la finestra al click dell'utente
    	infowindow_partenza.open(map, partenza);
  	});



  	const contentString_arrivo =
  	'<div class="infowindow">' + 'ARRIVO a ' + '<br>' +
  	'<ul>' +
	'<li>'+	'- Villa Santina' + '</li>' + '<br>' +
	'<li>'+	'- altezza: '	+ '363m' + '</li>' + '</ul>' + '<br>' + '<br>' +
	'<button id="myBtn" class="function" onclick="openwindow(3)">' + 'commenta' + '</button>' +
  	'</div>';
      const infowindow_arrivo = new google.maps.InfoWindow({
      content: contentString_arrivo
    });

  	const arrivo = new google.maps.Marker({
    	position: new google.maps.LatLng(46.416859, 12.92092),
    	map,
  	});

	arrivo.addListener("click", () => {
	   	infowindow_arrivo.open(map, arrivo);
	});



// chiamo camera il punto del lago che ha un icona a forma di telecamera
const contentString_camera =
	'<div class="infowindow">' + 'Luogo panoramico: Lago di Sauris' + '<br>' +
	  	'<button id="myBtn" class="function" onclick="openwindow(4)">' + 'commenta' + '</button>' +
  	'</div>';

        const infowindow_camera = new google.maps.InfoWindow ({
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

  				shop = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(46.120876, 13.224290),
			    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
				});
			    shops.push(shop);

			  	shop = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(46.065163, 13.239396),
			    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
			  	});
			    shops.push(shop);

			  	shop = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(46.100883, 13.419984),
			    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
			  	});
			    shops.push(shop);

			    shop = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(45.972660, 12.975724),
			    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
			  	});
			    shops.push(shop);

			    shop = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(46.026559, 12.875474),
			    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
			  	});
			    shops.push(shop);

			    shop = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(45.996039, 12.708619),
			    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
			  	});
			    shops.push(shop);

			    shop = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(45.942628, 13.572000),
			    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
			  	});
			    shops.push(shop);

			    shop = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(46.411179, 13.024993),
			    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
			  	});
			    shops.push(shop);

			    shop = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(46.523026, 13.532599),
			    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
			  	});
			    shops.push(shop);

			    shop = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(46.433185, 12.347449),
			    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
			  	});
			    shops.push(shop);

			    shop = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(45.807236, 13.522339),
			    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
			  	});
			    shops.push(shop);

			    shop = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(45.631533, 13.811415),
			    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
			  	});
			    shops.push(shop);

			    shop = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(45.649024, 13.766558),
			    icon: 'https://sites.google.com/site/pathprojectunimi/images/shop.jpg'
			  	});
			    shops.push(shop);

			// LISTA COLONNINE DI RICARICA //

				charger = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(46.520509, 13.584922),
				icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg'
				});
			    chargers.push(charger);

			    charger = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(46.186966, 12.704981),
				icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg'
			  	});
			    chargers.push(charger);

			    charger = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(46.175804, 13.212284),
				icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg'
			  	});
			    chargers.push(charger);

			    charger = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(46.028968, 12.653150),
				icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg'
			  	});
			    chargers.push(charger);

			    charger = new google.maps.Marker({
			    map: map, position: new google.maps.LatLng(45.710037, 13.132824),
				icon: 'https://sites.google.com/site/pathprojectunimi/images/logo_charger.jpg'
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



let b=1;  //parametro per alternare la funzionalità del bottone che attiva la funzione (mostra/nascondi)
function show_shop() {

	if (b === 1) {
      		setMapOnAllshop(map);
			b = 0;
		}
		else {
  			setMapOnAllshop(null);
			b = 1;
		}
}

let d=1;	//parametro per alternare la funzionalità del bottone che attiva la funzione (mostra/nascondi)
function show_charger() {

	if (d === 1) { setMapOnAllcharger(map);
			d = 0;
		}

		else { setMapOnAllcharger(null);
			d = 1;
		}
}


let geomarker, circle;  //variabili per visualizzare la località del dispositivo
let a = 0; //parametro per alternare la funzionalità del bottone che attiva la funzione (mostra/nascondi)

	function getLocation() {

				if ( a === 0 ) {
				  	if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(showPosition); }
				  	else { alert("Geolocalizzazione non supportata da questo browser."); }
				a = 1;
				}

				else if (a === 1) {
					geomarker.setMap(null);
					circle.setMap(null);
				a = 0;
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
 				map: map,
    			radius: 1000,
 				fillColor: '#0000ff',
 				strokeWeight: 0,
  			});
     	circle.bindTo('center', geomarker, 'position');   //associo il cerchio al marker
	}



	/* COMMENTI */

function updateComments() {
	let id_marker = document.getElementById("mySelect").value;  //l'id_marker vale 1 o 2 o 3...
	getComments(id_marker);
}


function comment(id){

	let name = $("#name").val();
	let text = $("#textcomment").val();

	// calcolo la data e la salvo in un formato comodo all'utente
	let date = new Date();
	let y = date.getFullYear();
	let m = date.getMonth() + 1;
	let d = date.getDate();
	let datedmy = d + "/" + m + "/" + y;   // esempio 20/6/2010

	if (text === "" || name ==="") {
		alert("hai lasciato vuoto uno o più campi!");
	}

	else {
		let obj = {
			name: name,
			text: text,
			id: id,
			date: datedmy
		};

		$('#name').val('');					//pulisco gli inputype
		$('#textcomment').val('');

		modal.style.display = "none";		//nascondo l'infowindow



		$.post("/api/comments/add/mtb/m1", obj)  //invio il commento e poi visualizzo
		.done(function(data) {
			getComments(0);
			updateComments(); //per ripristinare la visualizzazione dei soli commenti d'interesse

		})
		.fail(function(data) {
			alert(`Non è stato possibile aggiungere il commento: ${data}`);
		})
	}


}

//parametri per la funzione getComments (per visualizzare solo i commenti di un marcatore)
let a = 0;
let y = -3;

function getComments(id_marker){

	let contatore = 0; 						 //contatore dei commenti

	$.get("/api/comments/list/mtb/m1")
	.done(function(data) { 					 //tento di caricare i commenti

		data = JSON.parse(data);
		$("#comments").each(function() {
			$(this).empty();
		});

		let b = a; 				//verifico il marcatore e aggiungo solo i commenti di quell'id
		if (b != id_marker) {
			y=0;
			a = id_marker;
		}

		y=y+6; 		//agginugo commenti alla lista (vengono aggiunti, 6 ad ogni ciclo

			if (id_marker == 0) {  //se uguale a zero, visualizzo tutti i commenti

								/*	for (let i = data.length; i > 0; i--) {   */
									for (let i=0; i < y && i<data.length; i++) {
										let comment = data[i];
										contatore = contatore+1;
										$(`#comments`).prepend(`  
										<div class="modal-content">
										    <div class="modal-header">
										      ${selectmarker(comment.id)}
										    </div>
										    <div class="modal-body">
										    	${comment.name}<br>
										      	<p>${comment.text}</p>
										      	${comment.date}
										    </div>
										    <div class="modal-footer"></div>
										</div><br>
										`);

									}

			}

			else {  //se diverso da zero, voglio visualizzare solo certi commenti

								for (let i=0; i < y && i<data.length; i++) {
									let comment = data[i];

									if (id_marker == comment.id) { //visualizzo solo i commenti con quell'id
										console.log("dentro l'if");
										$(`#comments`).prepend(`  						 		
										<div class="modal-content">
										    <div class="modal-header">
										      ${selectmarker(comment.id)} 
										    </div>
										    <div class="modal-body">
										    	${comment.name}<br>
										      	<p>${comment.text}</p>
										      	${comment.date}
										    </div>
										    <div class="modal-footer"></div>
										</div><br>
										`);
									contatore= contatore+1;
									}

									else { y = y+1; }  //se non trovo un commento modifico y così che il ciclo
													//non si fermi troppo presto (deve stampare almento tot commenti)
								}
			}


		// se ci sono altri commenti visualizzo il tasto "VISUALIZZA ALTRI COMMENTI"
		if (data.length > i) {
			$("#number_comments").html("Commenti visualizzati: " + contatore +
			"<button class='function' style='float: right;'	type='submit' onclick='updateComments()'>Visualizza Altri Commenti</button>");
		}

	})

	.fail(function(data) {
		alert(`Non è stato possibile caricare i commenti: ${data}`);
	})

}

//prima chiamata all'apertura della pagina, per caricare i commenti
document.addEventListener('readystatechange', (event) => {
	getComments(0);  //id di default a zero, perchè carica TUTTI i commenti, senza preferenze
})


	/* FUNZIONI PER LA FINESTRA DI AGGIUNTA COMMENTI */

let modal = document.getElementById("myModal");

// bottone che apre la finestra
let btn = document.getElementById("myBtn");

// elemento che chiude la finestra
let span = document.getElementsByClassName("close")[0];

// funzione per aprire la finestra
function openwindow(id) {

	/* AGGIUNGO IL MARCATORE PRECISO ALLA FINESTRA DEL COMMENTO */
	marcatore = selectmarker(id);
   $("#marcatore").html("<p>Marcatore percorso: " + marcatore + "</p>");
   $("#id-marcatore").html(id);
   $("#id-button").html("<p><button class='function' type='submit' onclick='comment(" + id + ")'>Invia Commento!</button></p>");

   modal.style.display = "block";
}

// nascondo la finestra quando clicco la x
span.onclick = function() {
  modal.style.display = "none";
}

// nascondo la finestra quando clicco un punto qualsiasi fuori da essa
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// IN BASE ALL'ID DEL MARCATORE, RESTITUISCO UNA STRINGA CON IL SUO RELATIVO NOME
function selectmarker(id) {

	let id_m = parseInt(id);  // converto in int le stringhe
	let marcatore;
	switch(id_m) {

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


