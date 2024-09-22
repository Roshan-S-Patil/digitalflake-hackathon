import mongoose from "mongoose";
const stateSchema=mongoose.Schema({
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
})
export default mongoose.model('State',stateSchema)