const { Router } = require('express');
const { Dogs } = require('../db.js');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', (req, res)=>{
    
     Dogs.findAll({}).then(data => res.json(data))
     res.status(200).json({message: 'ok'});
    
  }),


module.exports = router;