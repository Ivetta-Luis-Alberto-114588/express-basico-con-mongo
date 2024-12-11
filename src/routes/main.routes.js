const Router = require('express');
const mainRouter = Router();

const userRouter = require('./user.routes.js');
const postRouter = require('./post.routes.js');
const authRouter = require("./auth.routes.js")


mainRouter.use('/users',userRouter);
mainRouter.use('/posts',postRouter);
mainRouter.use("/auth", authRouter)

module.exports = mainRouter;