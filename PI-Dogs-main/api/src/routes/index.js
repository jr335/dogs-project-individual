const { Router } = require('express');
// Importar todos los routers;
const axios = require('axios');
const sequelize = require('sequelize');
// Ejemplo: const authRouter = require('./auth.js');
const { API_KEY } = process.env;
const { Dogs } = require ('../models/Dog.js');
const {Temperaments} = require ('../models/Temperament.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use('/auth', authRouter);
const getapidog = async () => {

  const apidogsUrl = await axios.get('https://api.thedogapi.com/v1/breeds?api_key=' + API_KEY);
   
  const apidogsInfo = await apidogsUrl.data.map(el =>{

    return {
      name: el.name,
      temperament: el.temperament,
      weight: el.weight,
      height: el.height,
      life_span: el.life_span,
      image: el.image_url
       }
      
  })
     
  return apidogsInfo;
    
};


const getapiDb = async () => {
  
  // return await Dogs.findAll({
  
  //   include: {
  //     model: Temperaments,
  //     attributes: ['name'],
  //     through: {
  //       attributes: [],
  //     },
  //   }
  // });
   
      
};

const getAlldogs = async () => {
   
      const apidogsInfo = await getapidog();
      const DbInfo  = await getapiDb();
      const infoTotal = apidogsInfo.concat(DbInfo);
    
   return infoTotal;
};
  
  
//ruta para buscar por nombre de Dogs de perros - name(por query)

router.get('/dogs', async (req, res)=>{
 
  ///****  codigo alternativo?..... AVERIGUAR PORQUE ROMPE CON ESTE CÓDIGO******* */
       const { name } = req.query
         let dogstotal = await getAlldogs();
        if (name) {
          const dogsfiltered = await dogstotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
           dogsfiltered.length ?
           res.status(200).send(dogsfiltered) :
           res.status(404).send({msg: 'No hay perros con ese nombre'})
        } else {
          res.status(200).send(dogstotal);      
   
};

});


 router.get('/Dogs/:id'), (req, res) => {
  const { id } = req.params;
  Dogs.findByPk(id)
  .then(dog => {
    res.status(200).send(Dogs);
  })
  .catch(err => {
    res.status(500).send(err);
  });
}

 

module.exports = router;
