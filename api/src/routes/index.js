// ---ROUTER

// index de las RUTAS (MIDDLEWARE)
// -----ACA CONECTA CON LOS ENDPOINTS----

const { Router } = require('express');
const genresRouter = require('./genresRouter');
const videogamesRouter = require('./videogamesRouter');
const platformRouter = require ('./platformsRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/videogames', videogamesRouter);
router.use('/genres', genresRouter);
router.use('/platforms', platformRouter);



module.exports = router;
