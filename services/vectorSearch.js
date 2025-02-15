const pineconeIndex = require('../config/pinecone');

exports.searchInPinecone = async (queryEmbedding) => {
    const result = await pineconeIndex.query({
        vector: queryEmbedding,
        topK: 3,
        includeMetadata: true
    });
    return result.matches;
};
