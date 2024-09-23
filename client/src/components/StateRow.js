import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import DeleteWarning from './DeleteWarning';
import { BiArrowBack } from "react-icons/bi";
import { useDispatch,useSelector } from 'react-redux';
import { editState } from '../redux/stateSlice';


const StateRow = ({state}) => {
  const dispatch=useDispatch()
  const [deleting,setDeleting]=useState(false)
  const [editingState,setEditingState]=useState(false)
  const [update,setUpdate]=useState({})
  const handleNewDetails=(e)=>{
    e.preventDefault()
    const {name,value}=e.target
    setUpdate({...update,[name]:value})
    }
  return (
    <>
       <tr className='grid grid-cols-5 p-3'>
                  <td className='text-center'>{state._id}</td>
                  <td className='text-center'>{state.name}</td>
                  <td className='text-center'>{state.code}</td>
                  <td className={`text-center ${state.status==='active'?'text-green-600':'text-red-600'} font-semibold`}>{state.status.toUpperCase()}</td>
                  <td className='text-center flex justify-center items-center gap-2 '><RiDeleteBin6Line onClick={()=>{setDeleting(!deleting)}} className='scale-125'/><FiEdit onClick={()=>{setEditingState(true)}} className='scale-125'/></td>
                </tr>
                {deleting===true&&<>
                  <DeleteWarning setDeleting={setDeleting} _id={state._id} page={'state'}/>
                </>}
                {editingState&& <div className='top-0 left-0 z-50 w-full h-full absolute flex items-center justify-center bg-[#4a4d5259]'>
                  <div className='w-full h-full md:max-w-4xl lg:max-w-7xl sm:h-96 bg-white rounded-lg '>
      <p><BiArrowBack onClick={()=>setEditingState(false)} className=' scale-150 m-2' /></p>
      <h1 className='text-2xl font-bold ml-10'>EDIT STATE</h1>
      <div className='grid grid-flow-col gap-4 md:p-10'>
       <input onChange={(e)=>{handleNewDetails(e)}} value={state.name} type="text" name='name' placeholder='Name' className='border border-gray-500 border-3 pl-3 rounded-lg'/>
       <input onChange={(e)=>{handleNewDetails(e)}} value={state.code} type="text" name='code' placeholder='State Code' className='border border-gray-500 border-3 pl-3 rounded-lg'/>
       <select onChange={(e)=>{handleNewDetails(e)}} name="status" id="status" required >
        <option value={null}>Select</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
       </select>
       <button className='text-white bg-[#662671] w-fit px-3 py-1 rounded-lg' onClick={()=>{dispatch(editState({_id:state._id,update:update}));setEditingState(false)}} >Edit</button>
       </div>
    </div>
  </div>}
    </>
  )
}

export default StateRow
