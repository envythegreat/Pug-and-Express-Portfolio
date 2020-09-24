const express = require('express');
const app = express();
const path = require('path')


app.use("/static",  express.static(path.join(__dirname, "/public")));
app.set('view engine', 'pug');

// importing Router
const defaultRouter = require('./routes');
const aboutsRouter = require('./routes/about');
const projectsRouter = require('./routes/projects');
const routerProject = require('./routes/project');
const contactRouter = require('./routes/contact');
// End Importing Router

// Rendring Router
app.use(defaultRouter);
app.use(aboutsRouter);
app.use(projectsRouter);
app.use(routerProject);
app.use(contactRouter);
// End Rendering Router

//Error handling for non-exist pages
app.use((req, res, next)=>{
    const err = new Error('Not found');
    err.status = 404;
    console.log(err);
    next(err);
})
// Error middleware
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
})

app.listen(3000, ()=>{
    console.log('The app is running at Port : 3000')
})