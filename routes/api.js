const router = require('express').Router();

const apiPhone = require('./api/phone');
const apiPhones = require('./api/phones');


router.use('/phone', apiPhone);
router.use('/phones', apiPhones);


module.exports = router;