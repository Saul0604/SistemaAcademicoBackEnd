const Calificacion = require('../models/calificacion');

class calificacionService {
  async create(alumnoId, materiaId, calificacion) {
    const item = await Calificacion.create({ alumnoId, materiaId, calificacion });
    return item.toJSON();
  }

  async getAll() {
    const items = await Calificacion.find().populate('alumnoId materiaId', 'nombre matricula semestre');
    return items.map((x) => x.toJSON());
  }

  async getById(id) {
    const item = await Calificacion.findById(id).populate('alumnoId materiaId', 'nombre matricula semestre');
    if (!item) throw new Error('ID No encontrado');
    return item.toJSON();
  }

  async update(id, alumnoId, materiaId, calificacion) {
    const updated = await Calificacion.findByIdAndUpdate(
      id,
      { alumnoId, materiaId, calificacion },
      { new: true, runValidators: true }
    ).populate('alumnoId materiaId', 'nombre matricula semestre');

    if (!updated) throw new Error('ID No encontrado');
    return updated.toJSON();
  }

  async delete(id) {
    const deleted = await Calificacion.findByIdAndDelete(id);
    if (!deleted) throw new Error('ID No encontrado');
    return deleted.toJSON();
  }
}

module.exports = calificacionService;