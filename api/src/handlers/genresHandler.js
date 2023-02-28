
const axios = require("axios");
const {Genre} = require("../db");


const getAlleGenreHandler = async (req, res) =>{

    const gamesGenres = await Genre.findAll({
        attributes: ['name']
    });
    try {
        const genresDB = gamesGenres.map((g)=> g.name) 
        res.status(200).json(genresDB);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
       
};
module.exports= {getAlleGenreHandler};
