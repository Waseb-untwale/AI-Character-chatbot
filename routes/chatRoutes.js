const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotController');

if (!chatbotController.chatWithCharacter) {
    console.error("chatWithCharacter function is not defined in chatbotController.js");
}

router.post('/', chatbotController.chatWithCharacter);

module.exports = router;
