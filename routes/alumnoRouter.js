const express = require("express");
const alumnoService = require('../services/alumnoService');

const router = express.Router();
const service = new alumnoService();

router.get('/', (req, res) => {
    try {
        const alumnos = service.getAll();
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener alumnos", error: error.message });
    }
});

router.post('/', (req, res) => {
    try {
        const { nombre, matricula } = req.body;
        
        if (!nombre || !matricula) {
            return res.status(400).json({ message: "Nombre y matrícula son requeridos" });
        }
        
        const newAlumno = service.create(nombre, matricula);
        res.status(201).json({
            message: "Alumno creado",
            data: newAlumno
        });
    } catch (error) {
        res.status(500).json({ message: "Error al crear alumno", error: error.message });
    }
});

router.patch('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, matricula } = req.body;
        
        const alumnoUpdated = service.update(id, nombre, matricula);
        res.status(200).json({
            message: "Alumno actualizado",
            data: alumnoUpdated
        });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar alumno", error: error.message });
    }
});

router.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const deletedAlumno = service.delete(id);
        res.json({
            message: "Alumno eliminado",
            data: deletedAlumno
        });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar alumno", error: error.message });
    }
});

module.exports = router;