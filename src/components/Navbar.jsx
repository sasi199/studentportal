import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faComment,
    faSignOutAlt,
    faUserCircle,
  } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    
  return (
    <ul className="flex items-center gap-4 justify-end">
    <li>
      <FontAwesomeIcon
        icon={faBell}
        className="text-black cursor-pointer hover:text-gray-500 text-xl"
        // Add your click handler or link for Notification here
      />
    </li>
    <li>
      <FontAwesomeIcon
        icon={faComment}
        className="text-black cursor-pointer hover:text-gray-500 text-xl"
        // Add your click handler or link for Chat here
      />
    </li>
    <li>
      <FontAwesomeIcon
        icon={faSignOutAlt}
        className="text-black cursor-pointer hover:text-gray-500 text-xl"
        // Add your click handler or link for Logout here
      />
    </li>
    <li>
      <FontAwesomeIcon
        icon={faUserCircle}
        className="text-black cursor-pointer hover:text-gray-500 text-xl"
        // Add your click handler or link for Profile here
      />
    </li>
  </ul>
  )
}

export default Navbar