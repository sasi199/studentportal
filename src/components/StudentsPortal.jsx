import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSchool,
  faUser,
  faFileAlt,
  faBook,
  faLifeRing,

} from '@fortawesome/free-solid-svg-icons';
import control from '../assets/control.png';
import logo from '../assets/abhis LOGO.jpeg.jpg';
import logos from '../assets/abhis.png';

const StudentsPortal = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div className={` ${open ? 'w-60' : 'w-20'} bg-dark-purple h-screen p-5 pt-8 relative duration-300`}>
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
          alt="Control Icon"
        />
        <div className="flex gap-x-4 items-center">
          <img
             src={open ? logo : logos}
            className={`${open ? "w-[220px] h-fit" : "w-[40px] h-[40px]"} cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
            alt="Logo"
          />
          <h1 className={`text-black origin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}>
          
          </h1>
        </div>
        <ul className="pt-6 flex flex-col gap-2">
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
          >
            <FontAwesomeIcon icon={faHome} className="h-auto w-6" />
            <span className={`${!open && 'hidden'} origin-left duration-200 text-lg font-bold`} >Home</span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
          >
            <FontAwesomeIcon icon={faSchool} className="h-auto w-6" />
            <span className={`${!open && 'hidden'} origin-left duration-200 text-lg font-bold`}>Institutes</span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
          >
            <FontAwesomeIcon icon={faUser} className="h-auto w-6" />
            <span className={`${!open && 'hidden'} origin-left duration-200 text-lg font-bold`}>Admins</span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
          >
            <FontAwesomeIcon icon={faFileAlt} className="h-auto w-6" />
            <span className={`${!open && 'hidden'} origin-left duration-200 text-lg font-bold`}>Reports</span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
          >
            <FontAwesomeIcon icon={faBook} className="h-auto w-6" />
            <span className={`${!open && 'hidden'} origin-left duration-200 text-lg font-bold`}>E-Library</span>
          </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
          >
            <FontAwesomeIcon icon={faLifeRing} className="h-auto w-6" />
            <span className={`${!open && 'hidden'} origin-left duration-200 text-lg font-bold`}>Support</span>
          </li>
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
        {/* Add your main content here */}
      </div>
    </div>
  );
};

export default StudentsPortal