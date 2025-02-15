// const rateLimit = require("express-rate-limit");
// const Redis = require("ioredis");
// const { RedisStore } = require("rate-limit-redis"); // Fix import

// const redisClient = new Redis({
//     host: "127.0.0.1", // Change this if using a cloud Redis provider
//     port: 6379,
// });

// const limiter = rateLimit({
//     store: new RedisStore({
//         sendCommand: (...args) => redisClient.call(...args), // Fix how commands are sent
//     }),
//     windowMs: 60 * 1000, // 1-minute window
//     max: 5, // Limit each IP to 5 requests per windowMs
//     standardHeaders: true, // Return rate limit info in headers
//     legacyHeaders: false, // Disable old X-RateLimit headers
//     message: { error: "Too many requests, please try again later." },
// });

// module.exports = limiter;
