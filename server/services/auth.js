import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()
export const setUser=({userExists})=>{
    return jwt.sign({_id:userExists?._id},process.env.JWT_SECRET)
}
