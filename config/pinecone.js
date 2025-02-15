const { Pinecone } = require('@pinecone-database/pinecone');
const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const pineconeIndex = pinecone.index('movie-bot');
module.exports = pineconeIndex;
