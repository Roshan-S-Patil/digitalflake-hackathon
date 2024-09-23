import City from '../models/cityModel.js'
const getCities=async(req,res)=>{
    try {
        const cities=await City.find()
        res.status(200).send(cities)
    } catch (error) {
        res.status(400).send(error)
    }
}
const addCity=async(req,res)=>{
    const {name,code,state}=req.body;
    try {
        const newCity=await City({
            name,
            code,
            state
        })
        const savedCity = await newCity.save()
        res.status(200).send(savedCity)
    } catch (error) {
        res.status(400).send(error)
    }
}
const editCity=async(req,res)=>{
    const {_id,update}=req.body
    try {
        const upatedCity=await City.findByIdAndUpdate({_id},{$set:update},{new:true})
        res.status(200).send(upatedCity)
    } catch (error) {
     res.status(400).send(error)   
    }
}
const deleteCity=async(req,res)=>{
    const {_id}=req.query
    try {
        const deletedCity=await City.findByIdAndDelete({_id})
        res.status(200).send(deletedCity) 
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}
export {getCities,addCity,editCity,deleteCity}