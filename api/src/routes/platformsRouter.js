// *********faltaría HANDLER y CONTROLLER***
// endpoint funcionando
const { API_KEY} = process.env;
const axios = require('axios');
const { Router } = require('express');

const platformsRouter = Router();

platformsRouter.get('/', async (req, res) => {  
    
    const platformsApi = await axios.get(`https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`)
    try {
        var platformName = platformsApi.data.results.map(p => p.name)
        
        res.status(200).json(platformName);
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})    
module.exports = platformsRouter;