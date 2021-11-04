const axios = require("axios")

module.exports = axios.create({
    baseURL: "http://www.omdbapi.com/?apikey=faf7e5bb&s",
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    },
})