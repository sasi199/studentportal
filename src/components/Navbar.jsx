import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faComment,
  faSignOutAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({open}) => {
  return (
    <div className={`${open ? "w-10/12 fixed top-0 left-2/12 right-0" : "w-11/12 fixed top-0 left-1/12  right-0"} flex h-16 items-center gap-4 justify-end bg-gray-100`}>
      <div className="flex items-center gap-4 justify-end px-5">
        <span>
          <FontAwesomeIcon
            icon={faBell}
            className="text-black cursor-pointer hover:text-gray-500 text-xl"
            // Add your click handler or link for Notification here
          />
        </span>
        <span>
          <FontAwesomeIcon
            icon={faComment}
            className="text-black cursor-pointer hover:text-gray-500 text-xl"
            // Add your click handler or link for Chat here
          />
        </span>
        <span>
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className="text-black cursor-pointer hover:text-gray-500 text-xl"
            // Add your click handler or link for Logout here
          />
        </span>
        <span>
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-black cursor-pointer hover:text-gray-500 text-xl"
            // Add your click handler or link for Profile here
          />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
