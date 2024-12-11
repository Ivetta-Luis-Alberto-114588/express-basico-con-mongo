const Users = require("../models/users.models.js")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const User = require("../models/users.models.js");
require("dotenv").config();

const registerController = async (name, user, email, role = "user", password)=>{
    // const userExists = users.some(x=> x.email === email)
    // if(!userExists) {
    //     const id = users.length + 1;
    //     const hashPassword = await bcrypt.hash(password, 10)
    //     const newUser = { id, name, user, email, role, password : hashPassword }    
    //     users.push(newUser);
    //     return newUser;
    // } else {
    //     throw new Error("el usuario ya esta registrado") 
    // }

    //creo el hash
    const hashPassword = await bcrypt.hash(password, 10)

    //creo el nuevo usuario en funcion del modelo
    const newUser = new User ({ name, user, email, role, password : hashPassword })    
    
    //guardo el usuario en la bd
    newUser.save()
    return newUser;

}

const loginController = async (email, password)=>{
    // const user = users.find(x=> x.email === email)
    const user = await Users.findOne({email})
    if(!user){
        throw new Error("el usuario o clave incorrectas (usuario)")
    } else {
        const isPasswordMatch =await bcrypt.compare(password, user.password)
        if(!isPasswordMatch) {
            throw new Error ("el usuario o clave incorrectas (password)")
        } else {
            const token = jwt.sign(
                {id: user.id, email: user.email, role: user.role},
                process.env.JWT,
                {expiresIn: "1h"})

            const {password: _, ...userWithOutPassword} = user
            return {
                error: false, 
                message: "usuario y clave correctos", 
                token: token,
                email: user.email,
                role: user.role,
                user: userWithOutPassword,

            }
        }
    }

}

module.exports = {
    registerController, loginController
}