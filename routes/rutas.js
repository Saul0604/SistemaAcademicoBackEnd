const alumnosRouter = require('./alumnoRouter');
const materiaRouter = require('./materiaRouter');

function routerApi(app) {
    app.use('/alumnos', alumnosRouter);
    app.use('/materias', materiaRouter);
}

module.exports = routerApi;