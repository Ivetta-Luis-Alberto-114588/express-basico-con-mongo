const mongoose = require("mongoose")

//ahora se crea el schema
const userSchema = new mongoose.Schema({ 
    name: { type: String, required:true},
    user: { type: String, required: true},
    email: { type: String, required: true},
    role: { 
        type: String, 
        enum : ["user","admin"],
        default: "user"},
    password: { type: String, required: true}
   })


//esto es el modelo propio, una vez que se tiene el schema   
const User = mongoose.model("User", userSchema)


module.exports = User


