const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: { type: String, required:true},
    body: { type: String, required:true},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require: true
    }
},
    //esto es para que no muestre el versionada cada vez 
    // que se crea un objeto
    {versionKey: false}
)

const Post = mongoose.model("Post", postSchema)

module.exports = Post