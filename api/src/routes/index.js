// ---ROUTER

// index de las RUTAS (MIDDLEWARE)
// -----ACA CONECTA CON LOS ENDPOINTS----

const { Router } = require('express');
const genresRouter = require('./genresRouter');
const videogamesRouter = require('./videogamesRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', (req, res) =>{
    res.status(200).send("NIY: EL HOME o LANDING; esto está a verse por eso lo dejo en el index");
});

router.use('/videogames', videogamesRouter);
router.use('/genres', genresRouter);



module.exports = router;
