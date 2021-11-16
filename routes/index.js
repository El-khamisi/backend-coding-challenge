const router = require('express').Router();



// Require controller modules.
const indexController = require('../controllers/indexController');


/**
 * Mock Controller 
 * 
 */
const mockApi = require('../testing/mockAPI.test');

/**
 * remove comments to try fake routes out
 */
// router.get('/list', mockApi.getList);


/**
 * ----------- GET Routes  -----------
 */
router.get('/', indexController.getHome);
router.get('/list', indexController.getList);

module.exports = router;