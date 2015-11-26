db.propdetails.insert(
    headline: "Increíble cerca condominio recientemente remodelado para casi todo. La cocina reformada con electrodomésticos de acero inoxidable y un contador actualizado . Abrir piso de planta es ideal para el entretenimiento . Acabados ligeros y brillantes que le hará enamorarse de esta propiedad cuando entras en ! 1 coche adjunta garaje. La casa también cuenta con una sala de tamaño completo lavadero independiente con electrodomésticos incluidos. Relájese en la piscina comunitaria y spa. Esta casa es una visita obligada",
    hoadues: "$938/mes",
    community: "Santa Clara",
    propertytype: "Casa De Pueblo",
    county: "Santa Clara",
    mlshash: "ML8151999",
    agent: "Greg Wang, Realty World-Alliance",
    bre: "#00960934",
    source: "MLS Listados"
);


db.proppdetails.update(
   { _id: ObjectId("5656cf4f1afe329b3da9c48d") },
   { $push: { schools.ids: ["serving", "elementary", "middle", "high"] } }
)