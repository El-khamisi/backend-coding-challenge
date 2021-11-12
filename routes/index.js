const router = require('express').Router();



// Require controller modules.
const indexController = require('../controllers/indexController');

router.get('/', indexController.getHome);



module.exports = router;