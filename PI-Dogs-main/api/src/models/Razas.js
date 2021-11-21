const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dogs', {
   
    idDB: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
     
    },
      
    minHeight: {
      type: DataTypes.STRING,
      //allowNull: false,      
    },
    maxHeight: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    

    height: {
      type: DataTypes.STRING,
       //allowNull: false,
    },

    
    minWeight: {
      type: DataTypes.STRING,
    // allowNull: false,
    },
    maxWeight: {
      type: DataTypes.STRING,
     allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
         allowNull: false,
      },
    life_span: {
      type: DataTypes.STRING,
     allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
     // allowNull: true,
    },
   
    temperament: {
      type: DataTypes.STRING,
     // allowNull: false
    },

   createdinDb: {

    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,

   },
  
  });

};
//  aqui le injectamos la conexion a sequelize.


