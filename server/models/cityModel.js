import mongoose from "mongoose";
const citySchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    code:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:"active",
        required:true,
    },
    state:{
        type:String,
        required:true,
    }
})
export default mongoose.model('City',citySchema)