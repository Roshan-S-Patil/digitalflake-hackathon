import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { SiOpenstreetmap } from "react-icons/si";
import { TbBuildingEstate } from "react-icons/tb";
import { FaWarehouse } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

const Sidebar = ({isSidebarOpen,toggleSidebar}) => {
  const isActive=(pathname)=>{return window.location.pathname===(pathname)}

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform md:translate-x-0 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out md:w-96 md:h-screen md:relative md:top-0 md:left-0`}>
         <button className="p-4 md:invisible" onClick={toggleSidebar}>
        Close
      </button>
      <ul>
        <Link to={'/'}><li className={`flex items-center gap-4 justify-start my-5 p-5 ${isActive('/')&&'bg-amber-200'}`}><CiHome  className='scale-150' />Home <IoMdArrowDropright  className=''/></li></Link>
        <Link  to={'/state'}> <li className={`flex items-center gap-4 justify-start my-5 p-5 ${isActive('/state')&&'bg-amber-200'}`}><SiOpenstreetmap  className='scale-150' />State <IoMdArrowDropright  className=''/></li></Link>
        <Link  to={'city'}><li className={`flex items-center gap-4 justify-start my-5 p-5 ${isActive('/city')&&'bg-amber-200'}`}><TbBuildingEstate  className='scale-150' />City <IoMdArrowDropright  className=''/></li></Link>
        <Link to={'/warehouse'}><li className={`flex items-center gap-4 justify-start my-5 p-5 ${isActive('/warehouse')&&'bg-amber-200'}`}><FaWarehouse  className='scale-150' />Warehouse <IoMdArrowDropright  className=''/></li></Link>
   
      </ul>
    </div>
  )
}

export default Sidebar
