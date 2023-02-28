const { Videogame } = require("../db");
const axios = require("axios");
const { API_KEY} = process.env;


const createVideogame = async (name, description, platforms, image, releaseDate, rating) =>
    await Videogame.create({ name, description, platforms, image, releaseDate, rating});

const getVideogameById = async (id, source) =>{
    
if (source==="api"){ 
    const result= (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data

       
        const filteredPlatforms = (arr)=>{
            arr.map((elem) =>{
                return{
                    platform: elem.platform,
                }
                })
        }
        let plataform = filteredPlatforms(result)
        const searchedApi = {
            name: result.name,
            platforms: plataform,
            released: result.released,
            image: result.background_image,
            description: result.description,
            rating: result.rating,
            genres: result.genres
        };
    return searchedApi;
};
if(source==="bdd"){
    return await Videogame.findByPk(id);
}
    
};    

const cleanArray = (arr) =>
    arr.map((elem) =>{
        return{
            id: elem.id,
            name: elem.name,
            description: elem.description, 
            platforms: elem.platforms.map((plat) =>{
                return {
                    id: plat.platform.id,
                    name: plat.platform.name};
                }), 
            image: elem.background_image,
            releaseDate: elem.released,
            rating: elem.rating,
            created: false,
        };
    });

const getAllVideogames = async () =>{
    // buscar en BDD
    const databaseGames = await Videogame.findAll();
    // buscar en API
    const apiGamesRaw= (await axios.get("https://api.rawg.io/api/games?key=58f5f3ddba1b442f8d24d98fcfeb532f")).data.results;
   
       
    const apiGames = cleanArray(apiGamesRaw);
   
    return [apiGames];
    // return databaseGames;
};

const searchGamesByName = async (name) =>{
    const databaseGames = await Videogame.findAll({where: {name: name } });//operador like o inclu
    
    const apiGamesRaw = (await axios.get("https://api.rawg.io/api/games?key=58f5f3ddba1b442f8d24d98fcfeb532f")).data.results;

    const apiGames = cleanArray(apiGamesRaw);
//                                                  en vez de el igual va un includes            
    const filteredApi = apiGames.filter((game) => game.name === name);

    return [...databaseGames, ...filteredApi]
};

module.exports = {createVideogame, getVideogameById, getAllVideogames, searchGamesByName};