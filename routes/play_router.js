const express = require('express');
const path = require('path');

const router = express.Router();

router.get("/play", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "game.html"))
})

router.get("/win", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "win.html"))
})

module.exports = router;