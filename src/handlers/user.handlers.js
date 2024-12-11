const { createUserController, getAllUserController, getAllByName, getByIdUserController, deleteByIdUSerControler, updateUserController } = require("../controllers/user.controllers");

const getAllUserHandler = async (req, res) => {
    try {
        const {name} = req.query;

        if(name){
            const response = await getAllByName(name)
            res.status(200).send(response)
        } else {
            const response = await getAllUserController()
            res.status(200).send(response)
        }
        
    } catch (error) {
        res.status(500).send({Error: true, Message: error.message})
    }

}

const getOneUserHandler = async (req, res) => {
    const {id} = req.params;
    const {name} = req.query
    
    if(id){
        try {
            const response = await getByIdUserController(id)
            res.status(200).send(response);
            
        } catch (error) {
            res.status(500).send({Error: true, Message: error.message})
        }  
    }

    if(name){
        try {
            const response = getAllByName(name)
            res.status(200).send(response);

        } catch (err) {
            res.status(500).send({Error: true, Message: error.message})
        }
    }
    
  

}

const createUserHandler = async (req, res) => {
    try {
        const {name, user, email, role, password} = req.body;
        const response = await createUserController(name, user, email, role, password)    
        res.status(201).send(response);

    } catch (error) {
        res.status(500).send({Error: true, Message: error.message})
    }    

}

const deleteUserHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await deleteByIdUSerControler(id)
        res.status(200).send(response);
        
    } catch (error) {
        res.status(500).send({Error: true, Message: error.message})
    }    

}

const updateUserHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, user, email} = req.body;
        const response = await updateUserController (id, name, user, email)
        res.status(200).send(response);
        
    } catch (error) {
        res.status(500).send({Error: true, Message: error.message})
    }
    

}


module.exports = {
    getAllUserHandler,
    getOneUserHandler,
    createUserHandler,
    deleteUserHandler,
    updateUserHandler
}