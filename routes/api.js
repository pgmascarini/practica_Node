const express = require('express');
const anunciosController = require('../controller/anuncios');
const tagsController = require('../controller/tags');
const router = express.Router();

/* guarda anuncios */
router.post('/anuncios', anunciosController.add);

/* recupera lista de anuncios */
router.get('/anuncios', anunciosController.list);

/* recupera lista de tags */
router.get('/tags', tagsController.list);

module.exports = router;
