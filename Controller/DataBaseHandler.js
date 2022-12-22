module.exports = class DataBaseHandler {
    constructor(fileName) {
        this.fileName = fileName;
        this.fs = require('fs');
        this.db = [];

        this.loadDB();
    }

    checkForFile(callback) {
        this.fs.exists(this.fileName, function (exists) {
            if (exists) {
                callback();
            } else {
                fs.writeFile(this.fileName, '[]', function () {
                    callback();
                })
            }
        });
    }

    add(entry) {
        this.db.push(entry);
        this.saveToStorage();
        console.log("nuovo commento: ", entry);
    }

    loadDB() {
        try {
            if (this.fs.existsSync(this.fileName)) {
                this.db = JSON.parse(this.fs.readFileSync(this.fileName, 'utf8'));
            } else {
                this.saveToStorage();
                console.log("Save empyy");
            }
        } catch (err) {
            console.error("catched error: ", err);
            this.saveToStorage();
        }
    }

    saveToStorage() {
        let toSave = JSON.stringify((this.db), null, 4);  //secondo e terzo parametro per formattare correttamente il json
        this.fs.writeFile(this.fileName, toSave, 'utf8', function (err, dataComments) {
        })
    }
}

var fs = require('fs');

//fs.writeFile('test.json', JSON.stringify({ a:1, b:2, c:3 }, null, 4));
