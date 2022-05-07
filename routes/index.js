const router = require('express').Router();

// Require controller modules.
const { getHome, getList } = require('../controllers/indexController');

/**
 * ----------- GET Routes  -----------
 */
router.get('/', getHome);
router.get('/list', getList);

module.exports = router;
