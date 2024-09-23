import Warehouse from '../models/WarehouseModel.js'
const getWarehouses=async(req,res)=>{
    try {
        const Warehouses=await Warehouse.find()
        res.status(200).send(Warehouses)
    } catch (error) {
        res.status(400).send(error)
    }
}
const addWarehouse=async(req,res)=>{
    const {name,code,state,city}=req.body;
    try {
        const newWarehouse=await Warehouse({
            name,
            code,
            state,
            city
        })
        const savedWarehouse = await newWarehouse.save()
        res.status(200).send(savedWarehouse)
    } catch (error) {
        res.status(400).send(error)
    }
}
const editWarehouse=async(req,res)=>{
    const {_id,update}=req.body
    try {
        const upatedWarehouse=await Warehouse.findByIdAndUpdate({_id},{$set:update},{new:true})
        res.status(200).send(upatedWarehouse)
    } catch (error) {
     res.status(400).send(error)   
    }
}
const deleteWarehouse=async(req,res)=>{
    const {_id}=req.query
    try {
        const deletedWarehouse=await Warehouse.findByIdAndDelete({_id})
        res.status(200).send(deletedWarehouse) 
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}
export {getWarehouses,addWarehouse,editWarehouse,deleteWarehouse}