// moduli richiesti
const express = require('express')
const xss = require('xss');
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
    let comment = req.body;
    
    // Function to check for XSS attempts
    const isSafe = (fieldName, value) => {
        if (!value) return true;
        const sanitized = xss(value);
        if (sanitized !== value) {
            console.warn(`[SECURITY WARNING] XSS attempt detected in '${fieldName}'. Input: "${value}"`);
            return false;
        }
        return true;
    };

    // Validate fields
    if (!isSafe('name', comment.name) || 
        !isSafe('text', comment.text) || 
        !isSafe('date', comment.date)) {
        console.warn("Comment rejected.");
        return res.status(400).send("Potential XSS detected. Comment rejected.");
    }
    
    dbh.add(comment);
    res.send("ok");
});

app.get('/api/comments/list/mtb/m1', function (req, res) {
    res.send(JSON.stringify(dbh.db));
});


app.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/Views/home.html');