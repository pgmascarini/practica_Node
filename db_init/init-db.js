const Anuncio = require("../model/anuncio");
const anuncios = require("./anuncios.json");
const Tags = require("../model/tag");
const list = require("./tags.json");


async function initAd() {
    const deleteTable = await Anuncio.deleteMany({});
    if (deleteTable) {
        const insertTable = await Anuncio.insertMany(anuncios);
        if (insertTable) {
            console.log('anuncios cargados')
        } else {
            console.log('error: no fue posible cargar nuevos anuncios')
        }
    } else {
        console.log('error: no se ha podido borrar la tabla')
    }
}

async function initTags() {
    const deleteTable = await Tags.deleteMany({});
    if (deleteTable) {
        const insertTable = await Tags.insertMany(list);
        if (insertTable) {
            console.log('tags cargadas')
        } else {
            console.log('error: no fue posible cargar nuevas tags')
        }
    } else {
        console.log('error: no se ha podido borrar la tabla')
    }
}

function initDB() {
    initTags();
    initAd();
}

initDB();