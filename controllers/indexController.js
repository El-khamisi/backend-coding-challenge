const path = require('path');

/**
 * ------------- Home Page  -------------
 * 
 */
exports.getHome = (req, res, nex) => {
    res.sendFile(path.resolve('view/index.html'));
};