import React,{useState,useEffect} from 'react'
import { FaWarehouse } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import WarehouseRow from '../components/WarehouseRow';
import {useDispatch,useSelector} from "react-redux"
import { addWarehouse, fetchWarehouses } from '../redux/warehouseSlice';
import { BiArrowBack } from "react-icons/bi";

const Warehouse = () => {
  const dispatch=useDispatch()
  const {Warehouses,loadingWarehouse,WarehouseError}=useSelector(state=> state.warehouse)
  const [addingWarehouse,setaddingWarehouse]=useState(false)
  const [newDetails,setNewdetails]=useState({})
  useEffect(()=>{
    dispatch(fetchWarehouses())
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
            <div className='flex gap-4'>
            <FaWarehouse className='scale-150'/>
            <h1 className='font-bold'>City</h1>
            </div>
          <div className='search flex items-center justify-center gap-4 border-gray-400 border-2 px-5 '>
          <input type='text' placeholder='Search city' className='w-min h-5 py-5 '/> 
          <CiSearch className='scale-150'/>
          </div>
            
            <button onClick={()=>{setaddingWarehouse(true)}} className='bg-[#662671] p-2 rounded-lg text-sm sm:text-base text-white'>Add Warehouse</button>
         </div>
         {Warehouses&&Warehouses.length>0?<>
         <table className='w-full'>
                <thead className='bg-amber-200 '>
                    <tr className='grid grid-cols-6 p-3'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City Code</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                {loadingWarehouse&& <p>LOADING STATES</p>}
                  {WarehouseError&& <p>OOPS SOMETHING WENT WRONG</p>}
                  {Warehouses.map((warehouse)=>{return <WarehouseRow warehouse={warehouse} key={warehouse._id}/>})}
                </tbody>
            </table>
            </>:<><h1>NO WAREHOUSES AVAILABLE</h1></>}
        </div>
        {addingWarehouse&& <div className='top-0 left-0 z-50 w-full h-full absolute flex items-center justify-center bg-[#4a4d5259] flex-wrap'>
        <div className='w-full h-full md:max-w-4xl lg:max-w-7xl sm:h-96 bg-white rounded-lg '>
      <p><BiArrowBack onClick={()=>setaddingWarehouse(false)} className=' scale-150 m-2' /></p>
          <h1 className='text-2xl font-bold ml-10'>ADD WAREHOUSE</h1>
      <div className='flex flex-wrap gap-4 py-10 px-2 md:p-10'>
       <input onChange={(e)=>{handleNewDetails(e)}} type="text" name='name' placeholder='Name' className='border border-gray-500 border-3 pl-3 rounded-lg'/>
       <input onChange={(e)=>{handleNewDetails(e)}} type="text" name='code' placeholder='Warehouse Code' className='border border-gray-500 border-3 pl-3 rounded-lg'/>
       <input onChange={(e)=>{handleNewDetails(e)}} type="text" name='state' placeholder='State' className='border border-gray-500 border-3 pl-3 rounded-lg'/>
       <input onChange={(e)=>{handleNewDetails(e)}} type="text" name='city' placeholder='City' className='border border-gray-500 border-3 pl-3 rounded-lg'/>
       <button className='text-white bg-[#662671] w-fit px-3 py-1 rounded-lg' onClick={()=>{dispatch(addWarehouse({name:newDetails.name,code:newDetails.code,state:newDetails.state,city:newDetails.city}));setaddingWarehouse(false)}} >Add</button>
       </div>
    </div>
  </div>}
    </div>
  )
}

export default Warehouse
