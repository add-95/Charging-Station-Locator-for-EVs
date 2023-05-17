const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const aboutController = require('../controllers/about_controller');
console.log("Router Loaded..");

router.get('/', homeController.home);
router.get('/about', aboutController.about);


module.exports = router;