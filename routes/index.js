const router = require('express').Router();



// Require controller modules.
const indexController = require('../controllers/indexController');


/**
 * ----------- GET Routes  -----------
 */
router.get('/', indexController.getHome);
router.get('/list', indexController.getList);

module.exports = router;