const Alumno = require("../models/alumno"); // ajusta la ruta si es necesario

class alumnoService {
  async create(nombre, matricula) {
    const alumno = await Alumno.create({ nombre, matricula });
    return alumno.toJSON();
  }

  async getAll() {
    const alumnos = await Alumno.find();
    return alumnos.map(a => a.toJSON());
  }

  async update(id, nombre, matricula) {
    const updated = await Alumno.findByIdAndUpdate(
      id,
      { nombre, matricula },
      { new: true, runValidators: true }
    );
    if (!updated) throw new Error("ID No encontrado");
    return updated.toJSON();
  }

  async delete(id) {
    const deleted = await Alumno.findByIdAndDelete(id);
    if (!deleted) throw new Error("ID No encontrado");
    return deleted.toJSON();
  }
}

module.exports = alumnoService;