// *********A HACER******
const axios = require("axios");
const { getAllGenres } = require("../controllers/genresController");
const getAlleGenreHandler = async (req, res) =>{
  
    const results = await getAllGenres();

    
    try {
        res.status(200).json(results);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
       
};
module.exports= {getAlleGenreHandler};
