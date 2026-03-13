// models/materia.js

const mongoose = require('mongoose');

const materiaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    semestre: { type: Number, required: true }
});

materiaSchema.method('toJSON', function () {
  const obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  return obj;
});

module.exports = mongoose.model('Materia', materiaSchema); // ← debe exportar el MODEL, no el schema