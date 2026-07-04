const express = require("express");
const axiosInstance = require("../api/axios");
const requests = require("../api/requests");

const router = express.Router();

router.get("/movies/:requestKey", async (req, res) => {
    try {
        const { requestKey } = req.params;

        const requestUrl = requests[requestKey];

        if (!requestUrl) {
            return res.status(404).json({
                message: "Invalid request key",
            });
        }

        const response = await axiosInstance.get(requestUrl);

        res.status(200).json(response.data);
    } catch (error) {
        console.error("TMDB movie list fetch error:", error.message);

        res.status(500).json({
            message: "Failed to fetch movie list",
        });
    }
});

router.get("/movie/:movieId", async (req, res) => {
    try {
        const { movieId } = req.params;

        const response = await axiosInstance.get(`movie/${movieId}`, {
            params: {
                append_to_response: "videos",
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error("TMDB movie detail fetch error:", error.message);

        res.status(500).json({
            message: "Failed to fetch movie detail",
        });
    }
});

router.get("/search/:searchQuery", async (req, res) => {
    try {
        const { searchQuery } = req.params;

        const response = await axiosInstance.get("search/movie", {
            params: {
                query: searchQuery,
                include_adult: true,
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error("TMDB search fetch error:", error.message);

        res.status(500).json({
            message: "Failed to fetch search results",
        });
    }
});

module.exports = router;