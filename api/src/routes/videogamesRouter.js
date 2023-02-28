// ****ENRUTADO******
// RUTA A ENDPOINT "VIDEOGAMES"
const { Router } = require("express");
const {
    getVideogamesHandler,  
    getVideogameIdHandler,
    postVideogamesHandler,
    deleteVideogames,
} = require ("../handlers/videogamesHandlers");

const videogamesRouter = Router();

//  middleware validador 
const validate = (req, res, next) =>{
    const {name, description, platforms, image, releaseDate, rating} = req.body;
    if(!name) return res.status(400).json({error: "Missing Name"})
    if(!description) return res.status(400).json({error: "Missing Description"})
    if(!platforms) return res.status(400).json({error: "Missing Platforms"})
    if(!image) return res.status(400).json({error: "Missing Image"})
    if(!releaseDate) return res.status(400).json({error: "Missing release date"})
    if(!rating) return res.status(400).json({error: "Missing Rating"})
    
    next();
};

videogamesRouter.get("/", getVideogamesHandler);

// videogamesRouter.get('/name?="..."', getVideogameByNameHandler);

videogamesRouter.get('/:id', getVideogameIdHandler);

videogamesRouter.post('/',validate, postVideogamesHandler);

videogamesRouter.delete('/delete/:name', deleteVideogames)



module.exports = videogamesRouter;