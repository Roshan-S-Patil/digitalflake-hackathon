import express from "express"
import {login, signup,getUser, logout} from "../controllers/userController.js"
import {auth} from "../middlewares/auth.js"
const router=express.Router()
router.get("/",auth,getUser)
router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
export default router