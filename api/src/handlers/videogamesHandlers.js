const { createVideogame, getVideogameById, getAllVideogames, searchGamesByName} = require("../controllers/videogamesController");
const { API_KEY} = process.env;
const axios = require("axios");
const { Videogame, Genre } = require("../db");



const getVideogamesHandler = async (req, res) =>{
    const {name} = req.query;
    
    try { 
        if (name) {
           let sname = name.split(' ').join('-').toLowerCase()
           var apiresult = await axios.get(`https://api.rawg.io/api/games?search=${sname}&key=${API_KEY}&page_size=100`)
           apiresult = apiresult.data.results
        } else {
            async function SearchApi () {
              try { 
                 const promise1 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=50`);
                 const promise2 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=50`);
                 const promise3 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3&page_size=50`);
  
                 await Promise.all([promise1, promise2, promise3])
                    .then(function(values) {
                       apiresult = values[0].data.results.concat(values[1].data.results).concat(values[2].data.results)
                    })
              } catch (err) {
                   console.log('Error searchin the API: ', err)
              }
            }
            await SearchApi()
          }    
          if (apiresult) {  
            var apivgames = apiresult.map(p => {
              let b=[]
              for (i=0;i<p.genres.length;i++) {
                  b.push(p.genres[i].name)
             }
             return {
                id:p.id,
                name: p.name,
                image: p.background_image,
                genres: b.toString(),
                rating: p.rating,
                origin: 'API'
              }
           })  
           if (name) {
            apivgames = apivgames.filter(p => p.name.toLowerCase().includes(name.toLowerCase()))     
         }      
        } else var apivgames = []

      
        var dbvgames = []
        dbvgames = await Videogame.findAll({
          include: {
             model: Genre,
             attributes: ['name'],
             through: {attributes: [] }
          }  
        })  
        if (name) {
           dbvgames = dbvgames.filter(p => p.name.toLowerCase().includes(name.toLowerCase()))     
        }
        var dbvgames = dbvgames.map(p => {
            
            return {
               id: p.id,
               name: p.name,
               image: "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
               genres: p.genres,
               rating: p.rating,
               origin: 'DB'
            }
        })           
      //Join and return resultss
      const allvgames = dbvgames.concat(apivgames)
      res.status(200).json(allvgames)
      
    } catch (error) {
      res.send(`Error in route /videogames ${error}`);
    }
};



const getVideogameIdHandler = async (req, res) =>{
    const { id } =req.params;
    
    
    try {
        if (!isNaN(id)){
           
                 var idkey = parseInt(id)
                 const result = await axios.get(`https://api.rawg.io/api/games/${idkey}?key=${API_KEY}`)
                 if (result.data.id) {
                    let genrestr=[]
                    for (i=0;i<result.data.genres.length;i++) {
                        genrestr.push(result.data.genres[i].name)
                    } 
                    let platformstr=[]
                    for (i=0;i<result.data.platforms.length;i++) {
                      platformstr.push(result.data.platforms[i].platform.name)
                    } 
                    const searchapivg = {
                      name: result.data.name,
                      platforms: platformstr.toString(),
                      released: result.data.released, 
                      image: result.data.background_image,
                      description: result.data.description.replace(/<[^>]+>/g, ''),
                      rating: result.data.rating,
                      genres: genrestr.toString()
                    }
                    return res.status(200).json(searchapivg)
                 }
              }

     if(isNaN(id)){
     return await Videogame.findByPk(id);}
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

};

const postVideogamesHandler = async (req, res) => {
    try {
        const {name, description, releaseDate, rating, platforms} = req.body;
        
        const newVideogame = await Videogame.create({
            name, 
            description, 
            releaseDate, 
            rating, 
            platforms
        }); 
 
        const gameGenre= await Genre.findAll({
            where:{name: genre}
        });

        newVideogame.addGenre(gameGenre);

        res.status(201).send(`The Game ${newVideogame} has been created.`);//status201 es creado

        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const deleteVideogames = async (req, res)=>{
    const {name} = req.params;
    try {
        const del = await Videogame.destroy({
            where:{name: `${name}`}
        });
        res.send(`Videogame ${name} has been deleted`);
    } catch (error) {
        res.status(400).send(`Error: ${error}`)        
    }
}

module.exports = {
    getVideogamesHandler,  
    deleteVideogames,
    getVideogameIdHandler, 
    postVideogamesHandler,
}