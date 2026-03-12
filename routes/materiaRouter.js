const express = require('express');
const materiaService = require('../services/materiaService');

const router = express.Router();
const service = new materiaService();

router.get('/', async (req, res) => {
    try{
        const materias = await service.getAll();
        res.json(materias);
    }catch(e){
        res.status(500).json({message: "Error al traer materias", error: e.message});
    }
})

router.post('/', async (req,res) => {
    try{
        const {nombre, semestre} = req.body;

         if (!nombre || !semestre) {
            return res.status(400).json({ message: "Nombre y semestre son requeridos" });
        }
        
        const newMateria = await service.create(nombre, semestre);
        res.status(201).json({
            message: "Materia creada",
            data: newMateria
        });
    }catch(e){
                res.status(500).json({message: "Error al crear materiazzz", error: e.message});

    }
})

module.exports = router;