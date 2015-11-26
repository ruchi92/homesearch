var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
    MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
        if (err) throw err;
        db.collection('propdetails').find().toArray(function(err, result) {
            if (err) throw err;
            res.render('details', { property: result[0] });
        });
    });
});



module.exports = router;
