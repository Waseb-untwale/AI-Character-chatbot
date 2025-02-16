require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http'); // Required for WebSockets
const mongoose = require('mongoose');
const { Server } = require('socket.io'); // Import WebSocket server
const scriptRoutes = require('./routes/scriptRoutes');
const chatRoutes = require('./routes/chatRoutes');


const app = express();
app.use(cors());
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, {
    cors: { origin: "*" } // Allow all origins for now
});

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://untwalewaseb:l0TgKB90NvJN1tpm@movie-scripts.qyo87.mongodb.net/movie-scripts?retryWrites=true&w=majority&tls=true", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Routes (Keep for any REST fallback)
app.use('/api/scripts', scriptRoutes);
app.use('/api/chat', chatRoutes);

// WebSocket Logic
io.on('connection', (socket) => {
    console.log("A user connected:", socket.id);

    socket.on('chatMessage', async ({ character, user_message }) => {
        const chatbotController = require('./controllers/chatbotController');
        const response = await chatbotController.chatWithCharacterSocket(character, user_message);
        socket.emit('chatResponse', response);
    });

    socket.on('disconnect', () => {
        console.log("User disconnected:", socket.id);
    });
});

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
