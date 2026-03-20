const alumnosRouter = require('./alumnoRouter');
const materiaRouter = require('./materiaRouter');
const calificacionRouter = require('./calificacionRouter');
const userRouter = require('./userRouter')

function routerApi(app) {
    app.use('/alumnos', alumnosRouter);
    app.use('/materias', materiaRouter);
    app.use('/calificaciones', calificacionRouter);
    app.use('/users', userRouter);
}

module.exports = routerApi;