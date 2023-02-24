const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Videogame", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    platforms:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    releaseDate:{
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    // *************HAY QUE CREAR UN ATRIBUTO "CREATED", BOOLEANO PARA SABER SI EL JUEGO SE CREA O SE TRAE DE LA API
    created:{
      type: DataTypes.BOOLEAN,
      defaultValue:true,
    },
  },
  {timestamps: false});
};
