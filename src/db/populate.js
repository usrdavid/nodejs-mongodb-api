const mongo = require('./connect');
const argv = require('yargs').argv;
const data = require('../../database/artList');

if (argv.fill) {
    mongo.connect()
        .then(db => {
            db.collection("artList").insertMany(data, (err, result) => {
                if (err) throw err;
                console.log("Data is loaded.");
                mongo.disconnect();
            });
        })
    return;
}

if (argv.clear) {
    mongo.connect()
        .then(db => {
            db.collection("artList").drop((err, result) => {
                if (err) throw err;
                console.log("Collection droped.");
                mongo.disconnect();
            });
        })
    return;
}
