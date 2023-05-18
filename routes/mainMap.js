const express = require('express');

const router = express.Router();
const mainMapController = require('../controllers/maps_main_controller');

router.get('/', mainMapController.basic);
router.get('/demo', mainMapController.demo);
router.get('/my-map', mainMapController.myMap);


module.exports = router;