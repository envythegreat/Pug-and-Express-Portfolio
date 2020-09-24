const express = require('express');
const router = express.Router();
const {myinfo} = require('../data/me.json')

router.get('/about', (req, res) => {
    res.render('about', {myinfo})
    // console.log(myinfo.media[1])
})

module.exports = router;