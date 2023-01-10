// moduli richiesti
const express = require('express')
let bodyParser = require('body-parser');

const DataBaseHandler = require('./public/Scripts/DataBaseHandler');

const app = express()
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//per hostare tutto quello che è nella cartella public
app.use(express.static('public'));

// per la gestione dei commenti salvati in un file
let dbh = new DataBaseHandler("comments.json");
app.post('/api/comments/add/mtb/m1', function (req, res) {
    dbh.add(req.body);
    res.send("ok");
});

app.get('/api/comments/list/mtb/m1', function (req, res) {
    res.send(JSON.stringify(dbh.db));
});


// metto in ascolto il server all'indirizzo 127.0.0.1
app.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/Views/home.html');