import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import State from "./pages/State";
import City from "./pages/City.js";
import Warehouse from "./pages/Warehouse";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Conditionally render Navbar and Sidebar except on login page
  const isLoginPage = window.location.pathname.startsWith('/login');

  return (
    <>
      {!isLoginPage && (
        
          <Navbar toggleSidebar={toggleSidebar} />
       
      )}
      <div className="flex">
      {!isLoginPage && (
        
          <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
       
      )}
      <main className="w-full h-screen ">{children}</main>
      </div>
    </>
  );
}
function App() {
  return (
    <div className="min-w-screen min-h-screen">
      
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/state" element={<State />} />
          <Route exact path="/city" element={<City/>} />
          <Route exact path="/warehouse" element={<Warehouse/>} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
