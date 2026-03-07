 const mongoose = require("mongoose");

const alumnoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  matricula: {
    type: String,
    required: true,
    unique: true
  }
});

alumnoSchema.method('toJSON', function () {
  const obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  return obj;
});

module.exports = mongoose.model("Alumno", alumnoSchema);