const alumnosRouter = require('./alumnoRouter');

function routerApi(app) {
    app.use('/alumnos', alumnosRouter);
}

module.exports = routerApi;