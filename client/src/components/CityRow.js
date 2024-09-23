import React ,{useState} from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import DeleteWarning from './DeleteWarning';
import { BiArrowBack } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { editCity } from '../redux/citySlice';

const CityRow = ({city}) => {
  const dispatch=useDispatch()
  const [deleting,setDeleting]=useState(false)
  const [editingCity,setEditingCity]=useState(false)
  const [update,setUpdate]=useState({})
  const handleNewDetails=(e)=>{
    e.preventDefault()
    const {name,value}=e.target
    setUpdate({...update,[name]:value})
    }
  return (
    <div>
        <tr className='grid grid-cols-6 p-3'>
                  <td className='text-center'>{city._id}</td>
                  <td className='text-center'>{city.name}</td>
                  <td className='text-center'>{city.code}</td>
                  <td className='text-center'>{city.state}</td>
                  <td className={`text-center ${city.status==='active'?'text-green-600':'text-red-600'} font-semibold`}>{city.status.toUpperCase()}</td>
                  <td className='text-center flex justify-center items-center gap-2 '><RiDeleteBin6Line onClick={()=>{setDeleting(!deleting)}}  className='scale-125'/><FiEdit onClick={()=>{setEditingCity(true)}} className='scale-125'/></td>
                </tr>
                {deleting===true&&<>
                  <DeleteWarning setDeleting={setDeleting} _id={city._id} page={'city'}/>
                </>}
                {editingCity&& <div className='top-0 left-0 z-50 w-full h-full absolute flex items-center justify-center bg-[#4a4d5259]'>
                  <div className='w-full h-full md:max-w-4xl lg:max-w-7xl sm:h-96 bg-white rounded-lg '>
      <p><BiArrowBack onClick={()=>setEditingCity(false)} className=' scale-150 m-2' /></p>
      <h1 className='text-2xl font-bold ml-10'>EDIT STATE</h1>
      <div className='grid grid-flow-col gap-4 md:p-10'>
       <input onChange={(e)=>{handleNewDetails(e)}} value={city.name} type="text" name='name' placeholder='Name' className='border border-gray-500 border-3 pl-3 rounded-lg'/>
       <input onChange={(e)=>{handleNewDetails(e)}} value={city.code} type="text" name='code' placeholder='City Code' className='border border-gray-500 border-3 pl-3 rounded-lg'/>
       <input onChange={(e)=>{handleNewDetails(e)}} value={city.state} type="text" name='state' placeholder='State' className='border border-gray-500 border-3 pl-3 rounded-lg'/>
       <select onChange={(e)=>{handleNewDetails(e)}} name="status" id="status" required >
        <option value={null}>Select</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
       </select>
       <button className='text-white bg-[#662671] w-fit px-3 py-1 rounded-lg' onClick={()=>{dispatch(editCity({_id:city._id,update:update}));setEditingCity(false)}} >Edit</button>
       </div>
    </div>
  </div>}
    </div>
  )
}

export default CityRow
