const router = require('express').Router();

const {
    getByIdPhone,
    createPhone,
    updatePhone,
    deleteById,
} = require('../../models/phone.model');

router.get('/:id', async (req, res) => {
    try {
      const producto = await getByIdPhone(req.params.id);
      if (producto) {
        res.json(producto)
   
      } else {
        ('este ID no encontrado')
      }
    }
    catch(error) {
      res.json('error')
    }
  })


router.post('/', async (req, res) => {
    try {
        const create = await createPhone(req.body);
        res.json(create);
    } catch (err) {
        res.json({
            error: err.massage
        });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const update = await updatePhone(req.body);
        res.json(update);
    } catch (err) {
        res.json({
            error: err.massage
        });
    }
});

router.delete("/delete/:Id", async (req, res) => {
  const result = await deleteById(req.params.Id);
  res.json(result);
});

module.exports = router;