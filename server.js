// moduli richiesti
const express = require('express')
const DataBaseHandler = require('./DataBaseHandler');

const app = express()

//per hostare tutto quello che è nella cartella public
app.use(express.static('public'));

// per la gestione dei commenti salvati in un file testuale
let dbh = new DataBaseHandler("comments.dat");
app.post('/api/comments/add/mtb/m1', function (req, res) {
    dbh.add(req.body);
    res.send("ok");
});
app.get('/api/comments/list/mtb/m1', function (req, res) {
    res.send(JSON.stringify(dbh.db));
});


// metto in ascolto il server all'indirizzo 127.0.0.1
app.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/Home.html');