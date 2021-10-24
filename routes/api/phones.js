const router = require('express').Router();
const {
    getAll
} = require('../../models/phones.model')

router.get("/", async (req, res) => {
    try{
      const productos = await getAll();
      res.json(productos)
    } 
    catch (error) {
      (console.error('Sigue buscando'))
    }
  });
  

module.exports = router;