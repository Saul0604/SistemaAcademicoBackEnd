const mongoose = require('mongoose');

const calificacionSchema = new mongoose.Schema({
  alumnoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alumno',
    required: true
  },
  materiaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Materia',
    required: true
  },
  calificacion: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

calificacionSchema.method('toJSON', function () {
  const obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  return obj;
});

module.exports = mongoose.model('Calificacion', calificacionSchema);