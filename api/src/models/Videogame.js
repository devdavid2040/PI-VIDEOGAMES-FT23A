const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
/*
7 atributos:   
ID: *
Description *
Image:
Name *
Platforms *
Rating
Release date
 */
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    rating:{
      type: DataTypes.DOUBLE,
    },
    releaseDate:{
      type: DataTypes.DATEONLY,
    },
  });
};
