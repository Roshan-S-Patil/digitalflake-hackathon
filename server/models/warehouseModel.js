import mongoose from "mongoose";
const warehouseSchema=mongoose.Schema({
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
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true,
    }
})
export default mongoose.model('Warehouse',warehouseSchema)