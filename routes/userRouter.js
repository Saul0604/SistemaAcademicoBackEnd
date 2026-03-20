const express = require("express");
const userService = require("../services/userService");

const router = express.Router();
const service = new userService();

router.post("/register", async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = await service.register(name, email, password);
        res.status(201).json(user);
    }catch(e){
        res.status(500).json({message: "Error al registrar usuario", error: e.message});
    }
})

router.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await service.login(email, password);
        res.status(200).json(user);
    }catch(e){
        res.status(500).json({message: "Error al iniciar sesión", error: e.message});
    }
})

module.exports = router;
