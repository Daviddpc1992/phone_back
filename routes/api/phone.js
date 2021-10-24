const router = require('express').Router();

const {
    getByIdPhone,
    createPhone,
    updatePhone
} = require('../../models/phone.model');

// router.get("/:id", (req, res) => {
//     getByIdPhone(req.params.id)
//         .then(result => {
//             res.json(result)
//         })
//         .catch(error => {
//             res.json({
//                 error: error.massage
//             })
//         });
// });

router.get('/:id', async (req, res) => {
    try {
      const producto = await getByIdPhone(req.params.id);
      if (producto) {
        res.json(producto)
   
      } else {
        ('este ID es mentira')
      }
    }
    catch(error) {
      res.json('Error mu chungo')
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

module.exports = router;