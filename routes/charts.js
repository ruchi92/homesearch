var express = require('express');
var router = express.Router();
mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    type: String,
    percent: Number,
    mthYr: String,
    unitsSingle: Number,
    unitsCondo: Number,
    mthYr1: String,
    msi: Number,
    city: String,
    onSale: Number
});

var uri = 'mongodb://saro:1234@ds059284.mongolab.com:59284/web280';

var PUser = mongoose.model('webcollec', userSchema);

router.get('/', function(req, res, next) {
    mongoose.connect(uri, function (err, res) {
        if (err) {
            console.log ('ERROR connecting to: ' + uri + '. ' + err);
        } else {
            console.log ('Succeeded connected to: ' + uri);
        }
    });
/*
    var johndoe = new PUser ({
        city: "San Jose",
        onSale: 1075
    });

    // Saving it to the database.
    johndoe.save(function (err) {if (err) console.log ('Error on save!')});
*/
    var pageCount = 4,
        currentPage = 1;

    if (typeof req.query.page !== 'undefined') {
        currentPage = +req.query.page;
    }

    PUser.find({}).exec(function (err, result) {
        if (!err) {
            console.log(result);
            res.render('charts', { result: result,  pageCount: pageCount,
                currentPage: currentPage, langchange: langchange.english});
        } else {
            // error handling
        }
    });
});

var langchange = {
    english: {
        tools: "tools",
        message: "View in Spanish",
        aref: "http://localhost:3000/spanish",
        charts: "Charts"
    }, spanish: {
        tools: "herramientas",
        message: "Ver en Inglés",
        aref: "http://localhost:3000/",
        charts: "Gráficas"
    }
}
    module.exports = router;