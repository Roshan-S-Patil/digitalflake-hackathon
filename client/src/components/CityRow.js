import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const CityRow = () => {
  return (
    <div>
        <tr className='grid grid-cols-5 p-3'>
                  <td className='text-center'>Id</td>
                  <td className='text-center'>Name</td>
                  <td className='text-center'>City Code</td>
                  <td className='text-center'>State</td>
                  <td className='text-center flex justify-center items-center gap-2 '><RiDeleteBin6Line className='scale-125'/><FiEdit className='scale-125'/></td>
                </tr>
    </div>
  )
}

export default CityRow
