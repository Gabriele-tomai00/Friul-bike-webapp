module.exports = class DataBaseHandler {
    constructor(fileName) {
        this.fileName = fileName;
        this.fs = require('fs');
        this.db = [];

        this.loadDB();
    }

    checkForFile(callback) {
        this.fs.access(this.fileName, (exists) => {
            if (exists) {
                callback();
            } else {
                this.fs.writeFile(this.fileName, '[]', function () {
                    callback();
                })
            }
        });
    }

    add(entry) {
        this.db.push(entry);
        this.saveToStorage();
        console.log("new comment: ", entry);
    }

    loadDB() {
        try {
            if (this.fs.existsSync(this.fileName)) {
                this.db = JSON.parse(this.fs.readFileSync(this.fileName, 'utf8'));
            } else {
                this.saveToStorage();
                console.log("Empty");
            }
        } catch (err) {
            console.error("Error: ", err);
            this.saveToStorage();
        }
    }

    saveToStorage() {
        let toSave = JSON.stringify((this.db), null, 4);  // second and third parameters to format json correctly
        this.fs.writeFile(this.fileName, toSave, 'utf8', function (err, dataComments) {
        })
    }
}
