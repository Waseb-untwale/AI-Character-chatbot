const mongoose = require('mongoose');

const ChatHistorySchema = new mongoose.Schema({
    character: String,
    user_message: String,
    response: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChatHistory', ChatHistorySchema);
