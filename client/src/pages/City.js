import React from 'react'
import { TbBuildingEstate } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import CityRow from '../components/CityRow';

const City = () => {
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
            
            <button className='bg-[#662671] p-2 rounded-lg text-sm sm:text-base text-white'>Add City</button>
         </div>
         <table className='w-full'>
                <thead className='bg-amber-200 '>
                    <tr className='grid grid-cols-5 p-3'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City Code</th>
                        <th>State</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
               <CityRow/>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default City
