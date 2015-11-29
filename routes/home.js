var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
    MongoClient.connect('mongodb://webarch:webarch@ds053874.mongolab.com:53874/cmpe280project', function(err, db) {
        if (err) throw err;
        console.log(db);
        db.collection('proppdetails').find().toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.render('details', { property: result[0], language: langtokens.english, langchange: langchange.english });
        });
    });
});

router.get('/spanish', function(req, res, next) {
    MongoClient.connect('mongodb://webarch:webarch@ds053874.mongolab.com:53874/cmpe280project', function(err, db) {
        if (err) throw err;
        db.collection('propdetailsspan').find().toArray(function(err, result) {
            if (err) throw err;
            res.render('details', { property: result[0], language: langtokens.spanish, langchange: langchange.spanish });
        });
    });
});

var langtokens = {
    english : {
        navbar: {
            overview: "Overview",
            propertydetails: "Property Details",
            tourinsights: "Tour Insights",
            propertyhistory: "Property History",
            publicrecords: "Public Records",
            nearbyschools: "Nearby Schools",
            neighborhood: "Neighborhood",
            similarhomes: "Similar Homes"
        }, hoadues: "HOA Dues",
        community: "Community",
        propertytype: "Property Type",
        county: "County",
        mlshash: "MLS#",
        listingcourtesy: "Listing provided Courtesy of",
        source: "Source",
        propertydetails: {
            heading: "Property Details",
            interiorfeatures: {
                heading: "Interior features",
                bedroom: {
                    heading: "Bedroom Information",
                    minimum: "# of Bedrooms (Minimum): ",
                    maximum: "# of Bedrooms (Maximum): "
                }, bathroom: {
                    heading: "Bathroom Information",
                    full: "# of Bathrooms (Full): ",
                    half: "# of Bathrooms (Half): ",
                    description: "Bathroom Description: "
                }, room: {
                    heading: "Room Information",
                    diningroomdescription: "Dining Room Description: ",
                    kitchendescription: "Kitchen Description: Kitchen Description: "
                }, interiorfeatures: {
                    heading: "Interior features",
                    laundry: "Laundry: ",
                    flooring: "Flooring: "
                }, fireplace: {
                    heading: "Fireplace Information",
                    hasfireplace: "Has Fireplace: ",
                    fireplacedescription: "Fireplace Description: ",
                    minimum: "Fireplaces (Minimum): "
                }, heatingandcooling: {
                    heading: "Heating and cooling information",
                    cooling: "Cooling: ",
                    heating: "Heating: "
                }
            }, parking: {
                heading: "Parking / Garage, Multi-Unit Information, Homeowners Association, School / Neighborhood",
                parkinginformation: {
                    heading: "Parking Information",
                    minimum: "Garage (Minimum): ",
                    maximum: "Garage (Maximum): ",
                    description: "Parking Description: ",
                    garagespaces: "Garage Spaces: ",
                    parkingspaces: "Parking Spaces:"
                }, multiunitinformation: {
                    heading: "Multi Unit Information",
                    stories: "# of Stories: ",
                    units: "# of Units in Complex (Minimum): "
                }, hoainformation: {
                    heading: "HOA Information",
                    hashoa: "Has HOA: ",
                    fees: "Fees Include: ",
                    fee: "HOA Fee: ",
                    name: "HOA Name: ",
                    phone: "HOA Primary Phone: "
                }, schoollinformation: {
                    heading: "School Information",
                    elementary: "Elementary School District: ",
                    highschool: "High School District: "
                }
            }, exteriorfeatures: {
                heading: "Exterior Features",
                exterior: {
                    heading: "Exterior Features",
                    roof: "Roof: "
                }, building: {
                    heading: "Building Information",
                    type: "Construction Type: "
                }
            }, utilities: {
                heading: "Utilities",
                utilitiesinformation: {
                    heading: "Utitlities Information",
                    sewer: "Sewer Septic: ",
                    utilities: "Utilities: "
                }, water: {
                    heading: "Water Features",
                    water: "Water: "
                }
            }, taxes: {
                heading: "Taxes / Assessments, Location Details, Misc. Information",
                tax: {
                    heading: "Tax/Assessment Information",
                    citytax: "City Transfer Tax: "
                }, location: {
                    heading: "Location Information",
                    directions: "Directions: "
                }, misc: {
                    heading: "Miscellaneous Information",
                    incorporated: "Incorporated: "
                }
            }, propertylot: {
                heading: "Property / Lot Details",
                propfeatures: {
                    heading: "Property Features",
                    amenities: "Amenities: ",
                    livingsqft: "Living Sq. Ft.: "
                }, propertyinfo: {
                    heading: "Property Information",
                    ownership: "Ownership Type: ",
                    restrictions: "Restrictions: "
                }, lotinfo: {
                    heading: "Lot Information",
                    minimum: "Lot Size Area Minimum Units: ",
                    maximum: "Lot Size Area Maximum Units: ",
                    source: "Lot Size Source: ",
                    zoning: "Zoning: "
                }
            }, disclaimer: "Details provided by MLSListings and may not match the public record"
        }, tourinsights: {
            heading: "Redfin Tour Insights for",
            name: "No tour insights into this home yet",
            description: "We haven't left any insights about this home yet, but as soon as we do, we'll leave our thoughts here."
        }, prophistory: {
            heading: "Property History for ",
            date: "Date",
            event: "Event",
            price: "Price",
            appreciation: "Appreciation",
            source: "Source",
            disclaimer: "For completeness, Redfin often displays two records for one sale: the MLS record and the public record"
        }, publicrecords: {
            heading: "Public Records for ",
            disclaimer: "Public records are from Santa Clara County and may not match the MLS record. Information deemed reliable not guaranteed. Buyer to verify all information",
            basicinfo: "Basic Information",
            beds: "Beds",
            baths: "Baths",
            floors: "Floors",
            yearbuilt: "Year Built",
            yearrenovated: "Year Renovated",
            style: "Townhouse",
            finishedsqft: "Finished Sq. Ft.",
            unfinishedsqft: "Unfinished Sq. Ft.",
            totalsqft: "Total Sq. Ft.",
            lotsize: "Lot Size",
            county: "County",
            apn: "APN",
            datarefresh: "County data refreshed"
        }, schools: {
            heading: "Schools for ",
            disclaimer: "School data provided by GreatSchools. School service boundaries are intended to be used as reference only. To verify enrollment eligibility for a property, contact the school directly.",
            serving: "Serving this home",
            elementary: "Elementary",
            middle: "Middle",
            high: "High",
            serveshome: "Serves Home",
            schoolname: "School Rating and Name",
            type: "Type",
            grades: "Grades",
            parrat: "Parent Rating",
            distance: "Distance"
        }, neighborhood: {
            heading: "Neighborhood for ",
            area: "Area overview for ",
            transportation: "Transportation in ",
            creditmade: "Icons made by ",
            creditfrom: " from ",
            creditlicense: " is licensed by ",
            realestates: " Real Estate Sales (Last 90 days)",
            medianlistprice: "Median List Price",
            mediansqft: "Median $ / Sq. Ft.",
            mediansalelist: "Median Sale / List",
            avgoffers: "Avg # Offers",
            avgdown: "Avg Down Payment",
            soldhomes: "# Sold Homes",
            whatittakes: "What it takes to Win an Offer near ",
            offernotacc: "Offer Not Accepted",
            offeraccept: "Winning Offer",
            offertolist: "Offer-to-List",
            dom: "Days on Market",
            compoffer: "Competing Offers",
            down: "Down Payment",
            medianrev: "Median Real Estate Values",
            location: "Location",
            listprice: "List Price",
            dolsqft: "$ / Sq. Ft.",
            salelist: "Sale / List"
        }, similarhomes: "Similar Homes for ",
        thanks: "Thank You"
    }, spanish : {
        navbar: {
            overview: "Información general",
            propertydetails: "Detalles de la propiedad",
            tourinsights: "turísticos Insights",
            propertyhistory: "Historia de la propiedad",
            publicrecords: "Registros Públicos",
            nearbyschools: "Escuelas Cercanas",
            neighborhood: "Barrio",
            similarhomes: "Casas similares"
        }, hoadues: "HOA Cuota de socio",
        community: "Comunidad",
        propertytype: "tipo de propiedad",
        county: "Condado",
        mlshash: "MLS#",
        listingcourtesy: "Descripción proporcionada Cortesía",
        source: "Fuente",
        propertydetails: {
            heading: "Detalles de la propiedad",
            interiorfeatures: {
                heading: "Las características interiores",
                bedroom: {
                    heading: "Datos de las habitaciones",
                    minimum: "Nº de Habitaciones ( mínimo ) : ",
                    maximum: "# of Bedrooms (Máximo): "
                }, bathroom: {
                    heading: "Baño Información",
                    full: "# De Baños (completa) : ",
                    half: "# of Bathrooms (Mitad): ",
                    description: "Baño descripción: "
                }, room: {
                    heading: "Información de la habitación",
                    diningroomdescription: "Descripción Comedor:",
                    kitchendescription: "Cocina Descripción:"
                }, interiorfeatures: {
                    heading: "Las características interiores",
                    laundry: "Lavandería: ",
                    flooring: "Piso: "
                }, fireplace: {
                    heading: "Información Chimenea",
                    hasfireplace: "tiene Chimenea: ",
                    fireplacedescription: "Chimenea Descripción: ",
                    minimum: "Chimeneas (mínimo): "
                }, heatingandcooling: {
                    heading: "Calefacción y la información de refrigeración",
                    cooling: "Enfriamiento: ",
                    heating: "Calefacción: "
                }
            }, parking: {
                heading: "Aparcamiento / Cochera , Información Multi -Unit, Asociación de Propietarios , Escuela / Barrio",
                parkinginformation: {
                    heading: "Información del estacionamiento",
                    minimum: "Garaje ( mínimo ): ",
                    maximum: "Garage (Máximo): ",
                    description: "Aparcamiento Descripción: ",
                    garagespaces: "Plazas de garaje: ",
                    parkingspaces: "Plazas de aparcamiento: "
                }, multiunitinformation: {
                    heading: "Multi Unidad de Información",
                    stories: "Cantidad de las plantas: ",
                    units: "# De Unidades en el Complejo ( mínimo ): "
                }, hoainformation: {
                    heading: "HOA Información",
                    hashoa: "tiene HOA: ",
                    fees: "El precio incluye: ",
                    fee: "HOA Cuota: ",
                    name: "HOA Nombre: ",
                    phone: "HOA Teléfono Principal: "
                }, schoollinformation: {
                    heading: "Información de escuela",
                    elementary: "Distrito Escolar Primario: ",
                    highschool: "Distrito Escolar de alta:"
                }
            }, exteriorfeatures: {
                heading: "Características del exterior",
                exterior: {
                    heading: "Características del exterior",
                    roof: "Techo: "
                }, building: {
                    heading: "Datos de la construcción",
                    type: "Tipo de Construcción: "
                }
            }, utilities: {
                heading: "Utilidades",
                utilitiesinformation: {
                    heading: "Información Utilidades",
                    sewer: "de aguas negras: ",
                    utilities: "Utilidades: "
                }, water: {
                    heading: "Las características del agua",
                    water: "Agua: "
                }
            }, taxes: {
                heading: "Impuestos / evaluaciones , Detalles de la ubicación , Misc . Información",
                tax: {
                    heading: "Impuestos Más información / evaluación",
                    citytax: "Ciudad de transferencia de impuestos: "
                }, location: {
                    heading: "Información de localización",
                    directions: "Direcciones: "
                }, misc: {
                    heading: "Información Variada",
                    incorporated: "Incorporado: "
                }
            }, propertylot: {
                heading: "Propiedad / Detalles del Lote",
                propfeatures: {
                    heading: "Características de la propiedad",
                    amenities: "Comodidades: ",
                    livingsqft: "Vivir pies cuadrados: "
                }, propertyinfo: {
                    heading: "Información del hotel",
                    ownership: "Tipo de Propiedad: ",
                    restrictions: "Restricciones: "
                }, lotinfo: {
                    heading: "lote de Información",
                    minimum: "Tamaño del lote Área Unidades mínimo: ",
                    maximum: "Tamaño del lote Área Unidades máximo: ",
                    source: "Tamaño de la Parcela Fuente: ",
                    zoning: "Zonificación: "
                }
            }, disclaimer: "Detalles proporcionados por MLSListings y pueden no coincidir con el registro público"
        }, tourinsights: {
            heading: "HomeSearch Turísticos Insights for",
            name: "No hay perspectivas de turismo en esta casa todavía",
            description: "No hemos dejado ningún ideas sobre esta casa todavía , pero tan pronto como lo hacemos , vamos a dejar a nuestros pensamientos aquí ."
        }, prophistory: {
            heading: "Historia Viviendas",
            date: "Fecha",
            event: "Evento",
            price: "Precio",
            appreciation: "Apreciación",
            source: "Fuente",
            disclaimer: "Para completar, HomeSearch menudo muestra dos registros para una venta : el récord de la MLS y el registro público"
        }, publicrecords: {
            heading: "Registros Públicos de ",
            disclaimer: "Los registros públicos son del Condado de Santa Clara y pueden no coincidir con el registro de la MLS. La información se considera no fiable garantizada. Comprador para verificar toda la información",
            basicinfo: "Información básica",
            beds: "Camas",
            baths: "Balneario",
            floors: "Pisos",
            yearbuilt: "Año de construcción",
            yearrenovated: "Año renovación",
            style: "Townhouse",
            finishedsqft: "Terminado Pies Cuadrados",
            unfinishedsqft: "inacabados Pies Cuadrados",
            totalsqft: "el total de pies cuadrados",
            lotsize: "Tamaño de lote",
            county: "Condado",
            apn: "APN",
            datarefresh: "Datos del Condado actualizan"
        }, schools: {
            heading: "escuelas para ",
            disclaimer: "Datos de la escuela proporcionados por GreatSchools . Límites de servicio School están destinados a ser utilizados como única referencia . Para verificar la elegibilidad de inscripción para una propiedad, en contacto con la escuela directamente.",
            serving: "Sirviendo esta casa",
            elementary: "Elemental",
            middle: "Medio",
            high: "Alto",
            serveshome: "sirve Inicio",
            schoolname: "Escuela de Calificación y Nombre",
            type: "escribe",
            grades: "grados",
            parrat: "Valoración de los Padres",
            distance: "Distancia"
        }, neighborhood: {
            heading: "barrio de",
            area: "Visión general de la zona de",
            transportation: "Transportes en ",
            creditmade: "Iconos hecha por ",
            creditfrom: " de ",
            creditlicense: " tiene licencia de ",
            realestates: " Venta de Bienes Raíces ( 90 días )",
            medianlistprice: "La mediana de Precio de lista",
            mediansqft: "mediana $ / pies cuadrados",
            mediansalelist: "mediana Venta / Lista",
            avgoffers: "# Ofertas Promedio",
            avgdown: "Pago promedio abajo",
            soldhomes: "# viviendas vendidas",
            whatittakes: "¿Qué se necesita para ganar una oferta cerca ",
            offernotacc: "La oferta no es aceptada",
            offeraccept: "La oferta aceptada",
            offertolist: "Oferta- a Lista",
            dom: "Días en el mercado",
            compoffer: "ofertas competidoras",
            down: "Depósito",
            medianrev: "La mediana de los valores inmobiliarios",
            location: "Localización",
            listprice: "Precio de lista",
            dolsqft: "$ / pies cuadrados",
            salelist: "Venta / Lista"
        }, similarhomes: "Casas similares para ",
        thanks: "Gracias"
    }
}

var langchange = {
    english: {
        tools: "tools",
        message: "View in Spanish",
        aref: "/home/spanish",
        charts: "Charts"
    }, spanish: {
        tools: "herramientas",
        message: "Ver en Inglés",
        aref: "/home",
        charts: "Gráficas"
    }
}

module.exports = router;
