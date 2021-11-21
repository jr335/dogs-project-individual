const { Router } = require('express');
// Importar todos los routers;
const axios = require('axios');
const sequelize = require('sequelize');
// Ejemplo: const authRouter = require('./auth.js');
const { API_KEY } = process.env;

const router = Router();
const { Dogs, Temperamentos} = require ('../db.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use('/auth', authRouter);
// aca pido la info d la api con mi clave de accseso
const getapidog = async () => {

  const apidogsUrl = await axios.get('https://api.thedogapi.com/v1/breeds?api_key=' + API_KEY);
   
  const apidogsInfo = await apidogsUrl.data.map(el => {

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


const getdbInfo = async () => {
  
  return await dogs.findAll({
  
     include: {
       model: Temperamentos,
       attributes: ['name'],
       through: {
        attributes: [],
       },
     }
   });
   
      
};

const getAlldogs = async () => {
   
      const apidogsInfo = await getapidog();
      const DbInfo  = await getapiDb();
      const infoTotal = apidogsInfo.concat(DbInfo);
    
   return infoTotal;
};
  
  
//ruta para buscar por nombre de razas de perros - name(por query)

router.get('/dogs?name=', async (req, res)=>{
 
  ///****  codigo alternativo?..... AVERIGUAR PORQUE ROMPE CON ESTE CÓDIGO******* */
       const  name  = req.query.name;
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


 router.get('/dogs/{id}'), (req, res) => {
  const { id } = req.params;
  dogs.findByPk(id)
  .then(dogs => {
    res.status(200).send(dogs);
  })
  .catch(err => {
    res.status(500).send(err);
  });
}

// router.get('/Temperamentos', async (req, res) => {
//   const Temperamentapi = await axios.get('https://api.thedogapi.com/v1/Temperamentos?api_key=' + API_KEY);
//   const TemperamentInfo = await Temperamentapi.data.map(el => Temperamentos)
//   const TemperamentEach = Temperamentos.map(el => {
//    for (let i=0; i<el.length; i++); 
   
//    return (el[i]);{
//     const Temperamentos= forEach(el =>{
//       Temperamentos.findOrCreate({
//        where : {name: el}
//       })
    
//    }
   
//   ),
//  })
  
//    const allTemperamentos = await Temperamentos.findAll();
//    res.send(allTemperamentos); 
  
  
// });
//}  








 module.export = router;

