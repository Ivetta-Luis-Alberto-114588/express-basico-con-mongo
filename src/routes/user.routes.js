const {Router} = require('express');
const { getAllUserHandler, getOneUserHandler, createUserHandler, deleteUserHandler, updateUserHandler } = require('../handlers/user.handlers');
const {verifyToken} = require("../middlewares/verifyToken.middleware.js");
const { authAdmin } = require('../middlewares/auth.middleware.js');
const userRouter = Router();


//Users
userRouter.get('/',  getAllUserHandler )

userRouter.get('/:id', verifyToken, authAdmin, getOneUserHandler )

userRouter.post('/', createUserHandler )

userRouter.delete('/:id',verifyToken, authAdmin, deleteUserHandler)

userRouter.put('/:id',verifyToken, authAdmin, updateUserHandler)

module.exports = userRouter;