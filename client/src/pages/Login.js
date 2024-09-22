import React, { useState } from "react";
import DigiflakeLogo from "../assets/image 1.png"
import {useDispatch,useSelector} from "react-redux"
import { IoMdClose } from "react-icons/io";
import { login } from "../redux/userSlice";
const Login = () => {
  const dispatch=useDispatch()
  const {currentUser,userError}=useSelector(state=>state.user)
    const [signedup,setSignedup]=useState(true)
    const [forgotPasword,setForgotPassword]=useState(false)
    const [details,setDetails]=useState({})
    const handleChange=(e)=>{
        const {name,value}=e.target
        setDetails({...details,[name]:value})
    }
    const handleLogin=async(e)=>{
      e.preventDefault()
        dispatch(login({email:details.email,password:details.password}))
    }
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      {currentUser&&<>{currentUser.name}</>}
      <div className="login-containeh 2-full f-full sm:w-72 sm:h-96 bg-[#fdfdfd] m-auto p-2 ">
      <div className="my-5">
        <img src={DigiflakeLogo} alt="Logo" className="w-40 m-auto p-3"></img>
        <p className="text-gray-400 text-sm text-center">Welcome to Digitalflake admin</p>
        </div>
      {userError&&<p  className="text-red-600">Try again</p>}
        {signedup?<form className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            id="name"placeholder="Email"
            className="w-full p-2 rounded-lg"onChange={(e)=>{handleChange(e)}}
          ></input>
          <input
            type="password"
            name="password"
            id="password"placeholder="Password"
            className="w-full p-2 rounded-lg" onChange={(e)=>{handleChange(e)}}
          ></input>
          <button type="submit" className="text-white bg-[#662671] rounded-lg p-2" onClick={(e)=>{handleLogin(e)}}>Login</button>
          <p>Don't have an account? <span onClick={()=>{setSignedup(false)}} className="hover:cursor-pointer text-sky-700">Sign Up</span></p>
          <p className="hover:cursor-pointer text-sky-700" onClick={()=>setForgotPassword(true)}>Forgot Password</p>
        </form>:<form className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            id="name"placeholder="Name"
            className="w-full p-2 rounded-lg" onChange={(e)=>{handleChange(e)}}
          ></input>
          <input
            type="email"
            name="email"
            id="email"placeholder="Email"
            className="w-full p-2 rounded-lg" onChange={(e)=>{handleChange(e)}}
          ></input>
          <input
            type="password"
            name="password"
            id="password"placeholder="Password"
            className="w-full p-2 rounded-lg" onChange={(e)=>{handleChange(e)}}
          ></input>
          <button type="submit" className="text-white bg-[#662671] rounded-lg p-2">Sign Up</button>
          <p>Already have an account? <span className="hover:cursor-pointer text-sky-700" onClick={()=>{setSignedup(true)}}>Log In</span></p>
        </form>}
        
      </div>
     
      {forgotPasword&&
       <div className="overlay w-screen h-screen bg-[#8b878b63] absolute flex items-center justify-center">
      <div className="bg-white p-10">
        <div className="my-5">
        <h1 className="text-[#662671] text-xl text-center font-semibold">Did you forget password?</h1>
        <p className="text-gray-400 text-sm text-center">Enter your email address and we’ll send you a link to restore password</p>
        </div>
        <form className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            id="email"placeholder="Email"
            className="w-full p-2 rounded-lg" onChange={(e)=>{handleChange(e)}}
          ></input>
         
          <button type="submit" className="text-white bg-[#662671] rounded-lg p-2">Request reset link</button>
          <p className="hover:cursor-pointer" onClick={()=>{setForgotPassword(false)}}>Back to login</p>
        </form>
      </div>
      </div>}
      
    </div>
  );
};

export default Login;
