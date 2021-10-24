const router = require('express').Router();

const {
  getAll
} = require('./../models/phones.model');

router.get('/', async (req, res) => {
  try {
    const rows = await getAll();
    res.json(rows)
  } catch {
    res.json({
      error: 'error phones'
    })
  }

});
module.exports = router;