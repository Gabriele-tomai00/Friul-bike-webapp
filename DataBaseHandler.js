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
            console.error(err)
            this.saveToStorage();
        }
    }

    saveToStorage() {
        let toSave = JSON.stringify(this.db);
        console.log(toSave);
        this.fs.writeFile(this.fileName, toSave, 'utf8', function (err, data) {
            console.log(data, err);
        })
    }
}

