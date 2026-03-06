const express = require('express');
const app = express();
const alumnoRouter = require('./routes/alumnoRouter');

const PORT = 3000;

// Middleware
app.use(express.json());

// CORS - permitir peticiones del frontend
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Puerto de Vite por defecto
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Rutas principales
app.get('/', (req, res) => {
    res.send('Servidor funcionando 🚀');
});

// Rutas de alumnos
app.use('/alumnos', alumnoRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Frontend debería estar en http://localhost:5173`);
});