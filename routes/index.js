var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { langchange: langchange.english, staticTxt: staticTxt.english });
});

router.get('/spanish', function(req, res, next) {
    res.render('index', { langchange: langchange.spanish, staticTxt: staticTxt.spanish});
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

var staticTxt = {
    english: {
        easy: "Home Search makes it all easy!",
        desc: "We’re full-service, local agents who get to know you over coffee and on home tours, and we use online tools to make you smarter and faster. More than 10,000 customers buy or sell a home with us each year.",
        seestory: "See Story",
        howmuchsave: "See how much can you save using HomeSearch!",
        sabebuy: "Save when you buy",
        savesell: "Save when you sell",
        adjustslider: "Adjust the slider according to house value",
        firstslide: "It's so nice to recommend a service that we know is going to be great every time!We tell all our friends :'You are going to love 'Home Search!'",
        secondslide: "We had a great experience thanks to the lack of pressure from our HomeSearch Agent. A home is a big purchase; we felt like HomeSearch really got that.",
        thirdslide: "We loved that a HomeSearch Agent could meet us to see a house whenever it worked for us. Flexibility was key since we were house-hunting with a baby.",
        fourthslide: "As first-time homebuyers, we expected negotiations and closing to be more difficult. Our HomeSearch Agent made it all so easy.",
        fifthslide: "Buying with HomeSearch was a triple win: The website was easy to use, the way we set up home tours was efficient, and we even got money back at the end.",
        agentshelp: "Our Agents are always there to help!",
        fullname: "Full Name",
        email: "email",
        query: "query",
        ask: "Ask your query",
        getintouch: "Let's Get In Touch!",
        getintouchdescription: "Homesearch surveys every customer, and posts every review online. We base our bonuses on these reviews. This makes us accountable for not just any sale, but the one that’s right for you."
    },
    spanish: {
        easy: "Inicio Buscar hace que sea aún más fácil !",
        desc: "Estamos de servicio completo , los agentes locales que llegan a saber sobre el café y en las giras de casa , y utilizamos herramientas en línea para hacer más inteligente y más rápido. Más de 10.000 clientes de comprar o vender una casa con nosotros cada año .",
        seestory: "Vea Artículo",
        howmuchsave: "Vea cuánto puede ahorrar usando InicioResultados !",
        sabebuy: "Ahorra al comprar",
        savesell: "Ahorre cuando usted vende",
        adjustslider: "Ajuste el control deslizante de acuerdo al valor de la casa",
        firstslide: "Es muy agradable para recomendar un servicio que sabemos va a ser genial cada vez nos dicen todos nuestros amigos : ' Usted va a amar ' Inicio Buscar ' !",
        secondslide: "Tuvimos una gran experiencia gracias a la falta de presión de nuestro agente InicioResultados . Un hogar es una compra grande ; nos sentimos como InicioResultados realmente tiene eso.",
        thirdslide: "Nos encantó que un agente InicioResultados nos podría reunirse para ver una casa cada vez que trabajaba para nosotros . La flexibilidad fue clave ya que estábamos buscando casa con un bebé .",
        fourthslide: "Como los compradores de vivienda por primera vez , esperábamos negociaciones y cierre a ser más difícil. Nuestro Agente InicioResultados hizo todo tan fácil.",
        fifthslide: "Comprar con InicioResultados fue un triple beneficio : El sitio web es fácil de usar, la forma en que establecimos visitas de casa fue eficiente , y hasta nos dieron vuelta al final el dinero .",
        agentshelp: "Nuestros agentes están siempre ahí para ayudar!",
        fullname: "Nombre completo",
        email: "email",
        query: "correo electrónico",
        ask: "Pregúntele a su consulta",
        getintouch: "Vamos a estar en contacto !",
        getintouchdescription: "Encuestas InicioResultados de cada cliente , y los puestos de todas las reseñas online . Basamos nuestros bonos en estas críticas . Esto nos hace responsables por no cualquier venta, pero la que más te convenga ."

    }
}
router.get('/login', function(req, res, next) {
    res.render('login', { langchange: langchange });

});
router.get('/signup', function(req, res, next) {
    res.render('signup', { langchange: langchange });
});
module.exports = router;
