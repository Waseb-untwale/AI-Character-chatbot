const axios = require('axios');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const mongoose= require('mongoose')
const Character=require('../models/CharacterScript')


exports.chatWithCharacter = async (req, res) => {
    const { character, user_message } = req.body;

    if (!character || !user_message) {
        return res.status(400).json({ error: 'Character and message are required' });
    }

    try {
        // Step 1: Search for a matching dialogue in the Character collection
        const characterDialogue = await Character.findOne({
            character: character.toUpperCase(),  // Ensure case consistency
            dialogue: { $regex: new RegExp(user_message, "i") } // Case-insensitive fuzzy search for dialogue
        });

        if (characterDialogue) {
            return res.json({ response: characterDialogue.dialogue });
        }

        // Step 2: If no match, fallback to AI-generated response
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: `You are ${character}. Respond like this character using their speech style.` },
                    { role: "user", content: user_message }
                ],
                max_tokens: 100
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        res.json({ response: response.data.choices[0].message.content });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: "Failed to fetch response" });
    }
};
