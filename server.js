const express = require('express')
const app = express()
app.use(express.static('/public'))

const DataBaseHandler = require('./DataBaseHandler');


app.use(express.static('public')); //per hostare tutto quello che è nella cartella public

let dbh = new DataBaseHandler("comments.dat");
app.post('/api/comments/add/mtb/m1', function(req, res) {
    dbh.add(req.body);
    res.send("ok");
});
app.get('/api/comments/list/mtb/m1', function(req, res) {
    res.send(JSON.stringify(dbh.db));
});



app.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/Home.html');