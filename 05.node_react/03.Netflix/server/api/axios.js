const axios = require("axios");

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: process.env.TMDB_API,
        language: "ko-KR",
    },
});

module.exports = instance;