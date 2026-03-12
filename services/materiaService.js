const Materia = require("../models/materia");

class materiaService {
  async create(nombre, semestre) {
    const materia = await Materia.create({ nombre, semestre });
    return materia.toJSON();
  }

  async getAll() {
    const materias = await Materia.find();
    return materias.map((a) => a.toJSON());
  }

  async update(id, nombre, semestre) {
    const updated = await Materia.findByIdAndUpdate(
      id,
      { nombre, semestre },
      { new: true, runValidators: true },
    );
    if (!updated) throw new Error("Id no encontrado");
    return updated.toJSON();
  }

  async delete(id){
    const deleted = await Materia.findByIdAndUpdate(id);
    if (!deleted) throw new Error("Id no encontrado");
    return deleted.toJSON();
  }
}

module.exports = materiaService;