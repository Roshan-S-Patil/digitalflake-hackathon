import React, { useState } from 'react'
import logo from "../assets/Group 2609047 (1) 9.png"
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({toggleSidebar}) => {
    // const handleHamburger=(e)=>{
    //     e.preventDefault()
    //     document.querySelector(".sidebar").classList.toggle("invisible")
    // }
    const [loggingout,setLoggingout]=useState(false)

  return (
    <div className='bg-[#662671] p-3 flex justify-between items-center'>
        <RxHamburgerMenu className='sm:invisible' onClick={(e)=>{toggleSidebar()}}/>
      <img src={logo} alt="Logo" className='scale-50 sm:scale-75'/>
      <VscAccount className='fill-white scale-150 w-fit'onClick={()=>{setLoggingout(true)}}/>
      {loggingout&&
       <div className='top-0 left-0 z-50 w-full h-full absolute flex items-center justify-center bg-[#4a4d5259]'>
       <div className='w-full sm:w-96 h-60 bg-white rounded-lg grid grid-flow-row'>
           <div className='warning flex items-center justify-center text-center'>
       <h1 className='text-lg font-bold p-5'>LOGOUT</h1>
       </div>
       
         <p className='text-center text-gray-500 sm:text-lg'>Are you sure you want to logout?</p>
         <button onClick={()=>{setLoggingout(false)}} className='text-[#662671]'>Back</button> <button className='text-white bg-[#662671]'>Logout</button>
       </div>
     </div>
      }
    </div>
  )
}

export default Navbar
