const express = require('express');
const router = express.Router();
const { getRoommates, addRoommate } = require('../models/roommatesQueries');
const randomUser = require('../utils/randomUser');

router.get('/', async (req, res) => {
    try {
        const roommates = await getRoommates();
        res.json(roommates);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newRoommate = await randomUser();
        await addRoommate(newRoommate);
        res.json(newRoommate);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
