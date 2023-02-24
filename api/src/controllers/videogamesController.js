const { Videogame } = require("../db");
const axios = require("axios");


const createVideogame = async (name, description, platforms, image, releaseDate, rating) =>
    await Videogame.create({ name, description, platforms, image, releaseDate, rating});

const getVideogameById = async (id, source) =>{
    const videogame = 
        source === "api" 
            ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=58f5f3ddba1b442f8d24d98fcfeb532f`)).data
            // (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
            : await Videogame.findByPk(id);

    return videogame;
};    

const cleanArray = (arr) =>
    arr.map((elem) =>{
        return{
            id: elem.id,
            name: elem.name,
            description: elem.description, //¡¡¡¡¡¡¡¡¡¡¡¡¡esta ruta no tiene description!!!! POR ID SI
            platforms: elem.platforms.map((plat) =>{
                return {
                    id: plat.platform.id,
                    name: plat.platform.name};
                }), //*****tengo que filtrar las plataformas****
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
    //este tendría que ser apiGamesRaw
       
    const apiGames = cleanArray(apiGamesRaw);
    console.log(cleanArray(apiGamesRaw))
    return [...databaseGames, ...apiGames];
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