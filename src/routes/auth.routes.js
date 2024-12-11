const Router = require("express")
const { registerHandler, loginHandler } = require("../handlers/auth.handler")
const authRouter = Router()

authRouter.post("/register", registerHandler)
authRouter.post("/login", loginHandler)


module.exports = authRouter

