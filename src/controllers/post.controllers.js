const Post = require("../models/post.model.js")

const createPostController = async (title, body, userId)=> {
    const newPost = await Post.create({title, body, userId})
    return newPost    
}

const getAllPostController = async ()=> {
    const all = await Post.find().populate(
        {
            path: 'userId',
            select: '-_id email name',

        }
    )
    return all
}

const getByTitleController = async (title) => {
    const all = await Post.find({title})
    return all
}

const getByIdController = async (id) => {
    const one = Post.findById({id})
    return one
}

const deleteController = async (id) => {
    const deleted = await Post.findByIdAndDelete(id)
    return deleted
}

const updateController = async (id, title, body) => {
    const toUpdate = await Post.findByIdAndUpdate(id, {title, body}, {new: true})
    return toUpdate
}

module.exports = {
    createPostController,
    getByTitleController,
    getAllPostController,
    getByIdController,
    deleteController,
    updateController
}
