// models/materia.js

const mongoose = require('mongoose');

const materiaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    semestre: { type: Number, required: true }
});

module.exports = mongoose.model('Materia', materiaSchema); // ← debe exportar el MODEL, no el schema