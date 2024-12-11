const server = require("./src/server.js");
const mongoose = require("./src/db/dataBase.js")
require("dotenv").config();

const PORT = process.env.PORT || 3001;

async function main (){
    try {
        await mongoose.connection
        console.log("conectado a la bd");

        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        })
        
    } catch (error) {
        console.log("error en la conexion de la db", error);
        
    }
}

main()

