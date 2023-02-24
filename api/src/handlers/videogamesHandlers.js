const { createVideogame, getVideogameById, getAllVideogames, searchGamesByName} = require("../controllers/videogamesController");

// ---- function handler----
const getVideogamesHandler = async (req, res) =>{
    const { name } = req.query;

    const results = name ? await searchGamesByName(name) : await getAllVideogames();
    try {
        res.status(200).json(results);
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }

    // ********************************************************
    // if(name) res.status(200).send(`NIY: Ruta a los videojuegos con nombre ${name}`);
    // else res.status(200).json(`NIY: Ruta a TODOS los videojuegos`);
    // ****************************************************************
    
    //NIY: Not Implemented Yet
    // llamar a la funcion que obtiene los datos de la BDD
    // llamar a una función que obtenga los datos de la API externa
    // unir los datos, unificando el formato
    // cuando tenga los datos, responder con estos
};


// **********************no sirve la ruta si lo llamo desde VideogamesHandler*************************
const getVideogameByNameHandler = (req, res) =>{
    res.status(200).json("NIY: -  Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query. \
    -  Debe poder buscarlo independientemente de mayúsculas o minúsculas.\
    -  Si no existe el videojuego, debe mostrar un mensaje adecuado.\
    -  Debe buscar tanto los de la API como los de la base de datos.")
};

// ***************GET BY ID***************************

//GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7

// poder darme cuenta de que tipo de ID se trata
// puede que llegue un ID de algo que no existe 

const getVideogameIdHandler = async (req, res) =>{
    const { id } =req.params;
    
    const source = isNaN(id) ? "bdd": "api";
    
    try {
        const game = await getVideogameById(id, source); 
        res.status(200).json(game);
        
        // res.status(200).send(`NIY: Envía el detalle del videogame de ID ${id}`);
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

};

const postVideogamesHandler = async (req, res) => {
    try {
        const {name, description, platforms, image, releaseDate, rating} = req.body;
        const newVideogame = await createVideogame(name, description, platforms, image, releaseDate, rating);
        res.status(201).send(newVideogame);
// buenoanda
        // res.status(201).send(`NIY: Crea un VideoGame con:
        // ${newVideogame}
        // `);//¡¡¡¡¡status 201 es creado!!!!
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};


module.exports = {
    getVideogamesHandler, 
    getVideogameByNameHandler, 
    getVideogameIdHandler, 
    postVideogamesHandler,
}