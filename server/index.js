import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoute from "./routes/userRoute.js"
import stateRoute from './routes/stateRoute.js'
import cityRoute from "./routes/cityRoute.js"
import warehouseRoute from "./routes/warehouseRoute.js"
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
dotenv.config()
const app=express()
const PORT=process.env.PORT
const URI=process.env.URI
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:3000/",
    credentials:true,
    methods:"*",
    allowedHeaders:"*"
}))
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
app.use("/user",userRoute)
app.use("/state",stateRoute)
app.use("/city",cityRoute)
app.use("/city",warehouseRoute)
mongoose.connect(URI).then(()=>{console.log("Connected to databse")})
.catch((error)=>{console.log({error})})