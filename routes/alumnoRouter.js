const express = require("express");

const alumnoService = require('../services/alumnoService');
const alumnoService = require("../services/alumnoService");
const alumnoService = new alumnoService();

const router = express.router;

router.get('/', (req,res)=>{
    const alumnos = alumnoService.getAll();
    res.json(brands)
});

router.post('/', (req,res)=>{
    var nombre, matricula = req.body;
    const newAlumno = alumnoService.create(nombre, matricula);
    res.status(201).json({
        message: "Alumno creado",
        data: newAlumno
  });
});

router.patch('/:id', (req,res)=>{
    const {id} = req.params;
    var nombre, matricula = req.body;
    const alumnoUpdated = alumnoService.update(id,nombre, matricula);
    res.status(201).json({
        message: "Updated",
        data: alumnoUpdated
    });
});

router.delete('/:id', (req,res)=>{
    const { id } = req.params;
    const deletedAlumno = alumnoService.delete(id);
    res.json({
        message: "Alumno deleted",
        deletedAlumno
  });
});

module.exports = router;