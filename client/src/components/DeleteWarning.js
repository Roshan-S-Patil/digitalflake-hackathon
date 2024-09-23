import React from 'react'
import { IoIosWarning } from "react-icons/io";     
import { useDispatch } from 'react-redux';
import { deleteState } from '../redux/stateSlice';
import { deleteCity } from '../redux/citySlice';

const DeleteWarning = ({setDeleting,_id,page}) => {
  const dispatch=useDispatch()
  const handleDelete=(e)=>{
    e.preventDefault()
    if(page==='state'){
        dispatch(deleteState({_id}))
    }else if(page==='city'){
      dispatch(deleteCity({_id}))
    }else if(page==='warehouse'){
      // dispatch(deleteState({_id}))
    }
  }
  return (
    <div className='top-0 left-0 z-50 w-full h-full absolute flex items-center justify-center bg-[#4a4d5259]'>
    <div className='w-full sm:w-96 h-60 bg-white rounded-lg grid grid-flow-row'>
        <div className='warning flex items-center justify-center text-center'>
    <IoIosWarning className='fill-red-600 scale-150'/>
    <h1 className='text-lg font-bold p-5'>DELETE</h1>
    </div>
    
      <p className='text-center text-gray-500 sm:text-lg'>Are you sure you want to delete?</p>
      <button onClick={()=>{setDeleting(false)}} className='text-[#662671]'>Back</button> <button onClick={((e)=>handleDelete(e))} className='text-white bg-[#662671]'>Confirm</button>
    </div>
  </div>
  )
}

export default DeleteWarning
