import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import logo from "../assets/image 1.png";

const Home = () => {
  return (
    <div className="">
     
        <div className="hom w-full h-screen flex justify-center items-center">
          <div className="h-fit w-fit m-auto">
            <img src={logo} alt="LOGO"/>
            <p className="text-center">Welcome to Digitalflake admin</p>
          </div>
        </div>
      </div>
  );
};

export default Home;
