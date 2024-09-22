import bcrypt from 'bcrypt'
import User from "../models/userModel.js"
import { setUser } from '../services/auth.js'
const getUser=async(req,res)=>{
    const {_id}=req.body
    try {
        const user=await User.findById({_id})
        console.log(user)
        if (user){
            res.status(200).send(user)
        }else{
            res.status(404).send("user not found")
        }
    } catch (error) {
        res.status(400).send("Bad request")
    }
}
const signup=async(req,res)=>{
    console.log(req)
    const {name,email,password}=req.body;
    console.log(name,email,password)
    try {
        const userExists=await User.findOne({email})
        console.log(!userExists)
        if(!userExists){
            const encryptedPassword=bcrypt.hashSync(password,10,null,null,(err,hash)=>{
                if(err){throw err;}
                return hash    
            })
            console.log(encryptedPassword)
                const newUser=await User({
                    name,
                    email,
                    password:encryptedPassword
                })
                const savedUser=await newUser.save()
                res.status(200).send(savedUser)
        }else{
            res.status(409).send("User with this email already exists")
        }
        
    } catch (error) {
        res.status(400).send({error})
    }
}
const login=async(req,res)=>{
    const {email,password}=req.body;
    console.log(email,password)
    try {
        const userExists=await User.findOne({email})
        if(userExists){
            if(bcrypt.compareSync(password,userExists.password,(err,result)=>{
                if(err){throw err;}
                return result;
            })){
                const token= setUser({userExists})
            res.cookie('uid',token,{expires: new Date(Date.now() + 360 * 24 * 3600000),httpOnly:true})
                res.status(200).send(userExists)
            }else{
                res.status(401).send(error)
            }
        }else{
            console.log("user doesnot exist")
            res.status(400).send(error)
        }
    } catch (error) {
        res.status(400).send(error)
    }
}
const logout=async(req,res)=>{

}
export {getUser,signup,login,logout}