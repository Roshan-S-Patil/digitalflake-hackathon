import State from '../models/stateModel.js'
const getStates=async(req,res)=>{
    try {
        const states=await State.find()
        res.status(200).send(states)
    } catch (error) {
        res.status(400).send(error)
    }
}
const addstate=async(req,res)=>{
    const {name,code}=req.body;
    try {
        const newState=await State({
            name,
            code
        })
        const savedState = await newState.save()
        res.status(200).send(savedState)
    } catch (error) {
        res.status(400).send(error)
    }
}
const editState=async(req,res)=>{
    const {_id,update}=req.body
    try {
        const upatedState=await State.findByIdAndUpdate({_id},{$set:update},{new:true})
        res.status(200).send(upatedState)
    } catch (error) {
     res.status(400).send(error)   
    }
}
const deleteState=async(req,res)=>{
    const {_id}=req.query
    try {
        const deletedState=await State.findByIdAndDelete({_id})
        res.status(200).send(deletedState) 
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}
export {getStates,addstate,editState,deleteState}