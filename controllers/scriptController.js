const MovieScript = require('../models/MovieScript');
const scriptFetcher = require('../services/scriptFetcher');

exports.fetchAndStoreScript = async (req, res) => {
    const { title } = req.params;
    try {
        const scriptContent = await scriptFetcher.scrapeIMSDBScript(title);
        res.json({ title, script: scriptContent });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch or store script" });
    }
};
