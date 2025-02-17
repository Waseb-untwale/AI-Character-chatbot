const axios = require('axios');
const Character = require('../models/CharacterScript');
const ChatHistory = require('../models/ChatHistory'); 
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

exports.chatWithCharacter = async (req, res) => {
    const { character, user_message } = req.body;
    if (!character || !user_message) {
        return res.status(400).json({ error: 'Character and message are required' });
    }

    try {
        const characterDialogue = await Character.findOne({
            character: character.toUpperCase(),
            dialogue: { $regex: new RegExp(user_message, "i") }
        });

        let responseMessage;
        if (characterDialogue) {
            responseMessage = characterDialogue.dialogue;
        } else {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: "gpt-4o-mini",
                    messages: [
                        { role: "system", content: `You are ${character}. Respond like this character using their speech style.` },
                        { role: "user", content: user_message }
                    ],
                    max_tokens: 80
                },
                {
                    headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' }
                }
            );
            responseMessage = response.data.choices[0].message.content;
        }

        await ChatHistory.create({ character, user_message, response: responseMessage });

        res.json({ response: responseMessage });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: "Failed to fetch response" });
    }
};
