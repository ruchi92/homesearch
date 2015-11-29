var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('search', {langchange: langchange.english, housejson: housejson});
});

var langchange = {
    english: {
        tools: "tools",
        message: "View in Spanish",
        aref: "/spanish",
        charts: "Charts"
    }, spanish: {
        tools: "herramientas",
        message: "Ver en Inglés",
        aref: "/",
        charts: "Gráficas"
    }
}

var housejson = [
    {
        backgroundimg: '/images/simhome1.jpg',
        price: "$740,000",
        str_addr: "7601 Halladale Ct.",
        addr: "San Jose, CA 95135",
        city: "San Jose",
        beds: 2,
        baths: 2,
        sqft: 1572,
        hoa: "$890",
        agent: "Mallika Kulkarni",
        agentpic: "/images/Mallika.jpg",
        dolsqft: "$470",
        yearbuilt: 1988,
        lot: "2110 Sq. Ft.",
        status: "Active",
        onhs: "31 Days"
    },
    {
        price: "$762,000",
        str_addr: "16200 Alum Rock Ave",
        addr: "San Jose, CA 95127",
        city: "San Jose",
        beds: 3,
        baths: 2,
        sqft: 1924,
        hoa: "None",
        agent: "Jihirsha Golwala",
        agentpic: "/images/JGolwala.jpg",
        dolsqft: "$396",
        yearbuilt: 1955,
        lot: "9583 Sq. Ft.",
        status: "Active",
        onhs: "67 Days"
    },
    {
        price: "$699,000",
        str_addr: "1414 Dentwood Dr",
        addr: "San Jose, CA 95118",
        city: "San Jose",
        beds: 3,
        baths: 2,
        sqft: 1220,
        hoa: "None",
        agent: "Ruchi Shah",
        agentpic: "/images/RShah.jpg",
        dolsqft: "$572",
        yearbuilt: 1960,
        lot: "6148 Sq. Ft.",
        status: "Active",
        onhs: "4 Days"
    },
    {
        price: "$539,000",
        str_addr: "903 Sinbad Ave",
        addr: "San Jose, CA 95116",
        city: "San Jose",
        beds: 3,
        baths: 2,
        sqft: 1109,
        hoa: "None",
        agent: "Saraswathi Natarajan",
        agentpic: "/images/SNatarajan.jpg",
        dolsqft: "$486",
        yearbuilt: 1955,
        lot: "6120 Sq. Ft.",
        status: "Active",
        onhs: "7 Days"
    },
    {
        price: "$899,000",
        str_addr: "3872 Suncrest Ave",
        addr: "San Jose, CA 95127",
        city: "San Jose",
        beds: 3,
        baths: 2.5,
        sqft: 2870,
        hoa: "None",
        agent: "Jihirsha Golwala",
        agentpic: "/images/JGolwala.jpg",
        dolsqft: "$313",
        yearbuilt: 1976,
        lot: "0.44 Acres",
        status: "Active",
        onhs: "8 Days"
    },
    {
        price: "$499,000",
        str_addr: "603 Savstrom Way",
        addr: "San Jose, CA 95111",
        city: "San Jose",
        beds: 3,
        baths: 2,
        sqft: 1056,
        hoa: "None",
        agent: "Saraswathi Natarajan",
        agentpic: "/images/SNatarajan.jpg",
        dolsqft: "$472",
        yearbuilt: 1962,
        lot: "5602 Sq. Ft.",
        status: "Active",
        onhs: "9 Days"
    },
    {
        price: "$915,000",
        str_addr: "669 Mary Evelyn Dr",
        addr: "San Jose, CA 95123",
        city: "San Jose",
        beds: 4,
        baths: 2.5,
        sqft: 2009,
        hoa: "None",
        agent: "Mallika Kulkarni",
        agentpic: "/images/Mallika.jpg",
        dolsqft: "$455",
        yearbuilt: 1974,
        lot: "5663 Sq. Ft.",
        status: "Active",
        onhs: "1 Day"
    },
    {
        price: "$875,888",
        str_addr: "2163 Calle Vista Verde",
        addr: "Milpitas, CA 95035",
        city: "Milpitas",
        beds: 3,
        baths: 2.5,
        sqft: 1528,
        hoa: "$360",
        agent: "Ruchi Shah",
        agentpic: "/images/RShah.jpg",
        dolsqft: "$573",
        yearbuilt: 1992,
        lot: "1742 Sq. Ft.",
        status: "Active",
        onhs: "10 Days"
    }

]

module.exports = router;
