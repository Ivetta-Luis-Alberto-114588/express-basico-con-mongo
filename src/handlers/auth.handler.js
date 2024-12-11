const { registerController, loginController } = require("../controllers/auth.controllers");

const loginHandler = async (req, res)=>{
    try {
        const {email, password} = req.body
        const response = await loginController(email, password)    
        res.send(response)
    } catch (error) {
        res.status(400).send({Error: true,Place: "auth.handler / login", Message: error.message})
    }    

}

const registerHandler = async (req, res)=> {
    try {
        const {name, user, email, role, password} = req.body;
        const response = await registerController(name, user, email, role, password)    
        res.status(201).send(response);

    } catch (error) {
        res.status(400).send({Error: true, Place: "auth.handler / register", Message: error.message})
    }   
}


module.exports = {
    loginHandler, registerHandler
}
