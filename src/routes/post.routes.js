const {Router} = require('express');
const { createPostHandler, getAllPostsHandler, deletePostHandler, updatePostHandler } = require('../handlers/post.handlers');
const postRouter = Router();

//Posts
postRouter.get('/', getAllPostsHandler)

postRouter.get('/:name', getAllPostsHandler)

postRouter.post('/', createPostHandler)

postRouter.delete('/:id', deletePostHandler)

postRouter.put('/:id', updatePostHandler)

module.exports = postRouter;