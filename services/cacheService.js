// const redis = require("../config/redis");

// async function getCachedDialogue(characterName) {
//     const cachedData = await redis.get(`dialogue:${characterName}`);
//     return cachedData ? JSON.parse(cachedData) : null;
// }

// async function cacheDialogue(characterName, dialogue, ttl = 3600) {
//     await redis.set(`dialogue:${characterName}`, JSON.stringify(dialogue), "EX", ttl);
// }

// module.exports = { getCachedDialogue, cacheDialogue };
