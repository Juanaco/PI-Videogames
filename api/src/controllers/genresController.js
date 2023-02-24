
const axios = require("axios");


const cleanGenres = (arr) =>
    arr.map((elem) =>{
        return{
            id: elem.id,
            name: elem.name,
        };
    });

const getAllGenres = async() =>{
    const genresRaw = (await axios.get("https://api.rawg.io/api/genres?key=58f5f3ddba1b442f8d24d98fcfeb532f")).data.results;
    const cleaned = cleanGenres(genresRaw);
    // acá estan ordenados por ID, habría que hacerlo por abecedario
    return cleaned.sort((firstItem, secondItem) => firstItem.id - secondItem.id); 
}


module.exports ={ getAllGenres};