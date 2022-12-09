const express = require('express')
const app = express()
app.use(express.static('/public'))


app.use(express.static('public')); //per hostare tutto quello che è nella cartella public

app.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/Home.html');