const express = require('express');
const router = express.Router();
const {projects} = require('../data/projects.json');

function findId(id) {
    return projects.filter( projects => { return projects.id == id ? true : false } );
}

router.get('/project/:id', (req, res, next) => {
    const {id} = req.params;
    const newID = findId(id);
    if(newID == "") {
        const err = new Error('Page Not Found');
        err.status = 404;
        next(err)
    } else {
        res.render('project', {
            project: projects[id],
            projects
        });
    }
});

module.exports = router;