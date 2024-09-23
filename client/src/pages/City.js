import React,{useState,useEffect} from 'react'
import { TbBuildingEstate } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import CityRow from '../components/CityRow';
import {useDispatch,useSelector} from "react-redux"
import { addCity, fetchCities } from '../redux/citySlice';
import { BiArrowBack } from "react-icons/bi";

const City = () => {
  const dispatch=useDispatch()
  const {cities,loadingCity,cityError}=useSelector(state=> state.city)
  const [addingCity,setaddingCity]=useState(false)
  const [newDetails,setNewdetails]=useState({})
  useEffect(()=>{
    dispatch(fetchCities())
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
            <TbBuildingEstate className='scale-150'/>
            <h1 className='font-bold'>City</h1>
            </div>
          <div className='search flex items-center justify-center gap-4 border-gray-400 border-2 px-5 '>
          <input type='text' placeholder='Search city' className='w-min h-5 py-5 '/> 
          <CiSearch className='scale-150'/>
          </div>
            
            <button onClick={()=>{setaddingCity(true)}} className='bg-[#662671] p-2 rounded-lg text-sm sm:text-base text-white'>Add City</button>
         </div>
         {cities&&cities.length>0?<>
         <table className='w-full'>
                <thead className='bg-amber-200 '>
                    <tr className='grid grid-cols-6 p-3'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City Code</th>
                        <th>State</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                {loadingCity&& <p>LOADING STATES</p>}
                  {cityError&& <p>OOPS SOMETHING WENT WRONG</p>}
                  {cities.map((city)=>{return <CityRow city={city} key={city._id}/>})}
                </tbody>
            </table>
            </>:<><h1>NO CITIES AVAILABLE</h1></>}
        </div>
        {addingCity&& <div className='top-0 left-0 z-50 w-full h-full absolute flex items-center justify-center bg-[#4a4d5259]'>
        <div className='w-full h-full md:max-w-4xl lg:max-w-7xl sm:h-96 bg-white rounded-lg '>
      <p><BiArrowBack onClick={()=>setaddingCity(false)} className=' scale-150 m-2' /></p>
          <h1 className='text-2xl font-bold ml-10'>ADD STATE</h1>
      <div className='grid grid-flow-col gap-4 md:p-10'>
       <input onChange={(e)=>{handleNewDetails(e)}} type="text" name='name' placeholder='Name' className='border border-gray-500 border-3 pl-3 rounded-lg'/>
       <input onChange={(e)=>{handleNewDetails(e)}} type="text" name='code' placeholder='City Code' className='border border-gray-500 border-3 pl-3 rounded-lg'/>
       <input onChange={(e)=>{handleNewDetails(e)}} type="text" name='state' placeholder='State' className='border border-gray-500 border-3 pl-3 rounded-lg'/>
       <button className='text-white bg-[#662671] w-fit px-3 py-1 rounded-lg' onClick={()=>{dispatch(addCity({name:newDetails.name,code:newDetails.code,state:newDetails.state}));setaddingCity(false)}} >Add</button>
       </div>
    </div>
  </div>}
    </div>
  )
}

export default City
