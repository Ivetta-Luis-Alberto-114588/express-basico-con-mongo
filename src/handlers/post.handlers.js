const { createPostController, getByTitleController, getAllPostController, getByIdController, deleteController, updateController } = require("../controllers/post.controllers")

const getAllPostsHandler = async (req, res)=> {
    try {
        const {title} = req.body
        if(title){
            const response = await getByTitleController(title)
            res.status(200).send(response)
        } else {
            const response = await getAllPostController()
            res.status(200).send(response)
        }
        
    } catch (err) {
        res.status(400).send({hasError: true, message: "error en el handler getAllPostHandler", error: err})
    }    

}

const getOnePostHandler = async (req, res)=>{
    try {
        const id = req.params
        const response = await getByIdController(id)
        res.status(200).send(response)
        
    } catch (error) {
        res.status(400).send({hasError: true, message: "error en el handler getOnePostHandler", error: error})
    }  
}

const createPostHandler = async (req, res)=>{
    try {
        const {title, body, userId} = req.body
        const response = await createPostController(title, body, userId)
        res.status(200).send(response)
        
    } catch (error) {
        res.status(400).send({hasError: true, message: "error en el handler createPost", error: error})
    }
    
   
}

const updatePostHandler = async (req, res)=>{
    try {
        const {id} = req.params
        const {title, body} = req.body
        response = await updateController(id, title, body)
        res.status(200).send(response)
        
    } catch (error) {
        res.status(500).send({hasError: true, message: "error en el handler updatePostHandler", error: error})
    }

}

const deletePostHandler = async (req, res)=>{
    try {
        const {id} = req.params
        const response = await deleteController(id)
        res.status(200).send(response)
        
    } catch (error) {
        res.status(400).send({error: true, message: "error en el handler deletePostHandler", error: error})
    }
}

module.exports = {
    getAllPostsHandler,
    getOnePostHandler, 
    createPostHandler,
    updatePostHandler,
    deletePostHandler
}