import React, { useEffect, useState } from 'react'
import { SiOpenstreetmap } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import StateRow from '../components/StateRow';
import {useDispatch,useSelector} from "react-redux"
import { addState, fetchStates } from '../redux/stateSlice';
import { BiArrowBack } from "react-icons/bi";



const State = () => {
  const dispatch=useDispatch()
  const {states,stateLoading,stateError}=useSelector(state=> state.state)
  const [addingState,setAddingState]=useState(false)
  const [newDetails,setNewdetails]=useState({})
  console.log(states)
  useEffect(()=>{
    dispatch(fetchStates())
  },[])
  const handleNewDetails=(e)=>{
    e.preventDefault()
    const {name,value}=e.target
    setNewdetails({...newDetails,[name]:value})
  }
  return (
    <div>
       <div className="home w-full">
         <div className='header  h-10 p-6 flex items-center justify-between' >
            <div className='flex gap-4 justify-center items-center'>
            <SiOpenstreetmap className='scale-150'/>
            <h1 className='font-bold text-2xl'>State</h1>
            </div>
          <div className='search flex items-center justify-center gap-4 border-gray-400 border-2 px-5 '>
          <input type='text' placeholder='Search state' className='w-min h-5 py-5 focus:border-none active:border-none '/> 
          <CiSearch className='scale-150'/>
          </div>
            
            <button onClick={()=>{setAddingState(true)}} className='bg-[#662671] p-2 rounded-lg text-sm sm:text-base text-white'>Add State</button>
         </div>
      {states&&states.length>0?<>
         <table className='w-full'>
                <thead className='bg-amber-200 '>
                    <tr className='grid grid-cols-5 p-3'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>State Code</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                  {stateLoading&& <h1>LOADING STATES</h1>}
                  {stateError&& <h1>OOPS SOMETHING WENT WRONG</h1>}
                  {states.map((state)=>{return <StateRow state={state}/>})}
                </tbody>
            </table>
       </>:<><h1>NO STATES AVAILABLE</h1></>}
       </div>
       {addingState&& <div className='top-0 left-0 z-50 w-full h-full absolute flex items-center justify-center bg-[#4a4d5259]'>
        <div className='w-full h-full md:max-w-4xl lg:max-w-7xl sm:h-96 bg-white rounded-lg '>
      <p><BiArrowBack onClick={()=>setAddingState(false)} className=' scale-150 m-2' /></p>
          <h1 className='text-2xl font-bold ml-10'>ADD STATE</h1>
      <div className='grid grid-flow-col gap-4 md:p-10'>
       <input onChange={(e)=>{handleNewDetails(e)}} type="text" name='name' placeholder='Name' className='border border-gray-500 border-3 pl-3 rounded-lg'/>
       <input onChange={(e)=>{handleNewDetails(e)}} type="text" name='code' placeholder='State Code' className='border border-gray-500 border-3 pl-3 rounded-lg'/>
       <button className='text-white bg-[#662671] w-fit px-3 py-1 rounded-lg' onClick={()=>{dispatch(addState({name:newDetails.name,code:newDetails.code}));setAddingState(false)}} >Add</button>
       </div>
    </div>
  </div>}
      </div>
  )
}

export default State
