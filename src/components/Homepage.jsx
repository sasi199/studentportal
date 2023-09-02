import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SideBar from "../components/SideBar";

const Homepage = () => {

  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
    <Navbar open={open} />
    <SideBar  open={open} handleOpen={handleOpen}/>
    <div className={`${open ? "w-10/12 fixed top-16 left-2/12 right-0" : "w-11/12 fixed top-16 left-1/12  right-0"} flex h-screen items-center gap-4 justify-center bg-white`}>
    <Outlet/>
    </div>
   
    </>
  )
}

export default Homepage