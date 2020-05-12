const express = require('express');
const router = express.Router();
const base_url = require('../baseURLs/baseURL')

router.get(base_url, (req, res) => {
    res.status(200).json({
        msg: 'Chatbot'
    })
})
module.exports = router;