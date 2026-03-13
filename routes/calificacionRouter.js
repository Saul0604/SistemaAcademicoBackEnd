const express = require('express');
const calificacionService = require('../services/calificacionService');

const router = express.Router();
const service = new calificacionService();

router.get('/', async (req, res) => {
  try {
    const calificaciones = await service.getAll();
    res.json(calificaciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener calificaciones', error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const calificacion = await service.getById(id);
    res.json(calificacion);
  } catch (error) {
    res.status(404).json({ message: 'Calificación no encontrada', error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { alumnoId, materiaId, calificacion } = req.body;

    if (!alumnoId || !materiaId || calificacion === undefined || calificacion === null) {
      return res.status(400).json({ message: 'alumnoId, materiaId y calificación son requeridos' });
    }

    const newCalificacion = await service.create(alumnoId, materiaId, calificacion);
    res.status(201).json({ message: 'Calificación creada', data: newCalificacion });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear calificación', error: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { alumnoId, materiaId, calificacion } = req.body;

    const updatedCalificacion = await service.update(id, alumnoId, materiaId, calificacion);
    res.json({ message: 'Calificación actualizada', data: updatedCalificacion });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar calificación', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCalificacion = await service.delete(id);
    res.json({ message: 'Calificación eliminada', data: deletedCalificacion });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar calificación', error: error.message });
  }
});

module.exports = router;
