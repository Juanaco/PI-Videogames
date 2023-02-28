require('dotenv').config();

const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { default: axios } = require('axios');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, API_KEY
} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models =  Object.fromEntries(capsEntries);


// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Videogame, Genre} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Videogame.belongsToMany(Genre, {through: "game_genre"});
Genre.belongsToMany(Videogame, {through: "game_genre"});



//guardar generos en la BDD
const storeGenres = async () => { 
  const apiGenres = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results;
  const genres = apiGenres.map(g => g.name);

  genres.forEach((g) => {
      Genre.findOrCreate({
           where: {name: g}
      });
    });
  
  }     
storeGenres();
module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};
