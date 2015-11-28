var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('search', { langchange: langchange });
});

var langchange = {
    english: {
        tools: "tools",
        message: "View in Spanish",
        aref: "http://localhost:3000/home/spanish"
    }, spanish: {
        tools: "herramientas",
        message: "Ver en Inglés",
        aref: "http://localhost:3000/home"
    }
}

module.exports = router;
