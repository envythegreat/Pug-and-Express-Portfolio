const express = require('express');
const router = express.Router();
const {projects} = require('../data/projects.json');

router.get('/projects', (req, res) => {
    res.render('projects', {projects});
});

module.exports = router;