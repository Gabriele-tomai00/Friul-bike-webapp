const express = require('express')
const xss = require('xss');
let bodyParser = require('body-parser');

const DataBaseHandler = require('./public/Scripts/DataBaseHandler');

const app = express()
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// host everything in the public folder
app.use(express.static('public'));

// for handling comments saved in a file
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
    let safeComments = dbh.db.map(comment => {
        return {
            ...comment,
            name: xss(comment.name),
            text: xss(comment.text),
            date: xss(comment.date)
        };
    });
    res.send(JSON.stringify(safeComments));
});


if (require.main === module) {
    app.listen(1337, '127.0.0.1');
    console.log('Server running at http://127.0.0.1:1337/Views/home.html');
}

module.exports = app;