const mongoose = require('mongoose');

const scriptSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },  // Movie title (unique)
    scriptContent: { type: String, required: true },       // Full movie script
    embeddings: { type: [Number], default: [] }            // Vector embeddings for search
});

const MovieScript = mongoose.model("MovieScript", scriptSchema);

module.exports = MovieScript;
