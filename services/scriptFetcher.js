const axios = require('axios');
const cheerio = require('cheerio');
const MovieScript = require('../models/MovieScript');

exports.scrapeIMSDBScript = async (movieTitle) => {
    const url = `https://imsdb.com/scripts/${movieTitle.replace(/\s+/g, "-")}.html`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    let scriptContent = $("td.scrtext pre").text().trim();
    scriptContent = scriptContent.replace(/\s+/g, " ");

    // Store in MongoDB
    const movieScript = new MovieScript({ title: movieTitle, scriptContent });
    await movieScript.save();
    return scriptContent;
};
