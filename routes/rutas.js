const alumnosRouter = require('./alumnoRouter');
const materiaRouter = require('./materiaRouter');
const calificacionRouter = require('./calificacionRouter');

function routerApi(app) {
    app.use('/alumnos', alumnosRouter);
    app.use('/materias', materiaRouter);
    app.use('/calificaciones', calificacionRouter);
}

module.exports = routerApi;