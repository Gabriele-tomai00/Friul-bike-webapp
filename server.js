// let http = require('http')
// let server = http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello Worldn and brothers!');
// });

const express = require('express')
const path = require("path")
const app = express()
app.use(express.static('/public'))

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

// app.get('/', function (req, res) {
//     res.sendFile('p1.html' , { root : __dirname + "/public"});
// })
/*
app.get('/', function (req, res) {  //indica il percorso/url per visualizzare la pagina
    res.sendFile(path.resolve('public/p1.html'));        //indica dove si trova la pagina rispetto al file node
});
*/

app.use(express.static('public')); //per hostare tutto quello che è nella cartella public


//app.listen(3000)
app.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');