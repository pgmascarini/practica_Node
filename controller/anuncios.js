const Anuncio = require("../model/anuncio");

const anunciosController = {
    add: async (req, res, next) => {
        const anuncio = new Anuncio({
            nombre: req.body.nombre,
            venta: req.body.venta,
            precio: req.body.precio,
            foto: req.body.foto,
            tags: req.body.tags
        });
        const anuncios = await anuncio.save();
        res.send(anuncios);
    },
    list: async (req, res, next) => {
        const parameters = {};
        if (req.query) {
            //venta:  True or False
            if (req.query.venta != null) {
                parameters.venta = req.query.venta;
            }
            // tags
            if (req.query.tags != null) {
                parameters.tags = { $in: [req.query.tags] };
            }
            // nombre
            if (req.query.nombre != null) {
                parameters.nombre = { $regex: '^' + req.query.nombre, $options: "i" };
            }
            // precio
            if (req.query.precio != null) {
                let precios = req.query.precio;
                if (precios.indexOf("-") >= 0) {
                    if (precios.startsWith("-")) {
                        parameters.precio = { '$lte': Number(precios.replaceAll("-", "")) };
                    } else {
                        precios = precios.split("-");
                        if (precios.length === 2 && precios[1]) {
                            parameters.precio = { '$gte': precios[0], '$lte': precios[1] };
                        } else {
                            parameters.precio = { '$gte': precios[0] };
                        }
                    }
                } else {
                    parameters.precio = precios;
                }
            }
        }
        // paginacion
        const perPage = req.query.limit;
        const page = Math.max(0, req.query.start);
        const sort = {};
        if (req.query.sort) {
            sort[req.query.sort] = "asc";
        }

        const anuncios = await Anuncio.find(parameters)
            .limit(perPage)
            .skip(perPage * page)
            .sort(sort);

        res.send(anuncios);
    }
}
module.exports = anunciosController;