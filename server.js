require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const scriptRoutes = require('./routes/scriptRoutes');
const chatRoutes = require('./routes/chatRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://untwalewaseb:l0TgKB90NvJN1tpm@movie-scripts.qyo87.mongodb.net/movie-scripts?retryWrites=true&w=majority&tls=true", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use('/api/scripts', scriptRoutes);  // Routes for fetching scripts
app.use('/api/chat', chatRoutes);      // Routes for chatbot functionality

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
