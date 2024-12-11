const mongoose = require("mongoose")
require("dotenv").config();
const mongoUrl =`mongodb+srv://${process.env.USER_MONGO}:${process.env.PASS_MONGO}@cluster0.h835awr.mongodb.net/${process.env.NAME_DB}`

//se inicia la conexion con la bd
mongoose.connect(mongoUrl)

//esta es la representacion de la bd
const db = mongoose.connection

//esto esta escuchando cada evento sobre la bd y hago especificamente para los errores
db.on('error', console.error.bind(console, "Connection error"))

//ahora escucho cuando se conecta a la bd
db.once("open", ()=> {console.log("Connect to mongo")})

//ahora escucho todas las peticiones que se hacen a la bd
db.on("request", ()=> {console.log("request")})

//ahora escucho cuando se desconecta de la bd
db.on("disconnected", ()=> {console.log("disconnected")})

//ahora escucho todas las response que se hace la bd
db.on("response", ()=> {console.log("response")})

module.exports = mongoose


