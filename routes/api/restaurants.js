const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../../controllers/restaurants');

/*---------- Public Routes ----------*/
router.get('/', restaurantsCtrl.index);
router.get('/search', restaurantsCtrl.search);



/*---------- Protected Routes ----------*/




module.exports = router;