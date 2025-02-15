const express = require('express');
const router = express.Router();
const scriptController = require('../controllers/scriptController');

router.get('/:title', scriptController.fetchAndStoreScript);

module.exports = router;
