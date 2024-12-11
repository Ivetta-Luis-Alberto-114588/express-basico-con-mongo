// const users = require("../db/dataBase.js")
const User = require("../models/users.models.js")
const Post = require("../models/post.model.js")
const bcrypt = require("bcryptjs")

const createUserController = async (name, user, email, role, password) => {
    if(!name || !user || !email || !role || !password){
        throw new Error("faltan datos")
    } else {
        // const id = users.length + 1;
        // const newUser = { id, name, user, email, role, password : hashPassword }    
        // users.push(newUser);
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ name, user, email, role, password : hashPassword } )   
        newUser.save()
        return newUser;
    }    

}

const getAllUserController = async ()=>{
    // if(users.length <= 0) throw await new Error ("no hay datos")
    if(!User) throw await new Error ("no hay datos")
    const users = await User.find();    
    return users
}

const getAllByName = async (name)=> {
    // if(users.length <= 0) throw new Error ("no hay datos")
    // const allUsers = await users.filter( x => x.name === name)
    if(!User) throw new Error ("no hay datos")
    const allUsers = await User.find( {name: name})
    return allUsers
}

const getByIdUserController = async (id) => {    
    // const index = await users.findIndex(x => x.id === +id)
    // const user =users[index]
    const user = await User.findById(id)
    const posts = await Post.find({userId: id})
    return {user: user, posts: posts}
}

const deleteByIdUSerControler = async (id) => {
    const userDeleted = await User.findByIdAndDelete(id, {new: true})
    return userDeleted
}

const updateUserController = async (id, name, user, email) => {
    const newUser ={name, user, email}
    const userById = await User.findOne({id:id})
    const userUpdated = await User.findByIdAndUpdate(id, newUser, {new: true})
    return userUpdated
}


module.exports = {
    createUserController,
    getAllUserController,
    getByIdUserController,
    getAllByName,
    deleteByIdUSerControler,
    updateUserController

}