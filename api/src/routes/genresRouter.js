const { Router } = require("express");
const { getAlleGenreHandler } = require("../handlers/genresHandler")

const genresRouter = Router();

genresRouter.get('/', getAlleGenreHandler);

module.exports = genresRouter;