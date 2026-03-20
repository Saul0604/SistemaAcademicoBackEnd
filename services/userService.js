const User = require("../models/user");
const bcrypt = require("bcryptjs")
class userService {

    async register(name, email, password){
        const exists = await User.findOne({email});
        if(exists) throw new Error("Email ya registrado");

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({name, email, password : hashedPassword});
        return {userId : user._id}
    }

    async login(email, password){
        const user = await User.findOne({email});
        if(!user) throw new Error("Usuario no encontrado");

        const valid = await bcrypt.compare(password, user.password);
        if(!valid) throw new Error("Contraseña incorrecta");

        return {id : user._id, name : user.name, email : user.email};
    }
}

module.exports = userService;   