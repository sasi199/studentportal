import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar ,
  faGraduationCap,
  faFolderOpen,
  faBook ,
  faBullhorn,
  faLifeRing,

} from '@fortawesome/free-solid-svg-icons';
import control from '../assets/control.png';
import logo from '../assets/abhis LOGO.jpeg.jpg';
import logos from '../assets/abhis.png';
import { Link } from 'react-router-dom';

const SideBar = ({open, handleOpen}) => {

  return (
    <div className="flex">
      <div className={` ${open ? 'w-2/12' : 'w-1/12'} bg-dark-purple h-screen  relative duration-300`}>
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && 'rotate-180'}`}
          onClick={handleOpen}
          alt="Control Icon"
        />
        <div className="flex gap-x-4 items-center p-4 border-b">
          <img
             src={open ? logo : logos}
            className={`${open ? "w-[220px] h-fit" : "w-[50px] h-[50px]"} mx-auto cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
            alt="Logo"
          />
          <h1 className={`text-black origin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}>
          
          </h1>
        </div>
        <ul className="py-5 flex flex-col gap-2">
         
          <li
            className={`flex  rounded-md px-4 py-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
          >
            <FontAwesomeIcon icon={faChartBar } className="h-auto w-6" />
            <span className={`${!open && 'hidden'} origin-left duration-200 text-lg font-bold`} >Dashboard</span>
          </li>
        
          <Link to={`/mybatch`}>  
          <li
            className={`flex  rounded-md px-4 py-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
          >
            <FontAwesomeIcon icon={faGraduationCap} className="h-auto w-6" />
            <span className={`${!open && 'hidden'} origin-left duration-200 text-lg font-bold`}>My Batch</span>
          </li>
          </Link>
          <li
            className={`flex  rounded-md px-4 py-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
          >
            <FontAwesomeIcon icon={faFolderOpen} className="h-auto w-6" />
            <span className={`${!open && 'hidden'} origin-left duration-200 text-lg font-bold`}>File Management</span>
          </li>
          <li
            className={`flex  rounded-md px-4 py-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
          >
            <FontAwesomeIcon icon={faBook } className="h-auto w-6" />
            <span className={`${!open && 'hidden'} origin-left duration-200 text-lg font-bold`}>E-Library</span>
          </li>
          <li
            className={`flex  rounded-md px-4 py-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
          >
            <FontAwesomeIcon icon={faBullhorn} className="h-auto w-6" />
            <span className={`${!open && 'hidden'} origin-left duration-200 text-lg font-bold`}>Announcement</span>
          </li>
          <li
            className={`flex  rounded-md px-4 py-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
          >
            <FontAwesomeIcon icon={faLifeRing} className="h-auto w-6" />
            <span className={`${!open && 'hidden'} origin-left duration-200 text-lg font-bold`}>Support</span>
          </li>
        </ul>
      </div>
    
    </div>
  );
};

export default SideBar;