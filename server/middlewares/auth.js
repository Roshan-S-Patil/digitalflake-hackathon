import jwt from 'jsonwebtoken'
import { configDotenv } from 'dotenv'
configDotenv()
export const auth=async(req,res,next)=>{
    try {
        if(jwt.verify(req.cookies.uid,process.env.JWT_SECRET)){
            const userId=await jwt.decode(req.cookies.uid,process.env.JWT_SECRET)?._id
            req.body._id=userId
            next()
        }else{
            res.status(400).send("Invalid token")
        }
    } catch (error) {
        res.status(400).send("Bad request")    }
    
}
