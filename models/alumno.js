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


module.exports = mongoose.model("Alumno", alumnoSchema);