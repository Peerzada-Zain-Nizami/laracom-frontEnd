import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";

const TopMenu = () => {
  return (
    <nav className="bg-gray-400 shadow-md flex justify-between items-center p-2">
      <div className="flex items-center space-x-2"></div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-gray-700">
          <div className="flex items-center h-6 px-2 bg-gray-300 rounded-md p-1">
            <Flag
              code="US"
              style={{ width: "20px", height: "15px" }}
              alt="English"
            />
            <span className="ml-1 font-semibold hidden sm:inline">EN</span>
          </div>

          <div className="flex items-center h-6 px-2 bg-white rounded-md p-1">
            <Flag
              code="JP"
              style={{ width: "20px", height: "15px" }}
              alt="Japanese"
            />
            <span className="ml-1 font-semibold hidden sm:inline">JP</span>
          </div>
        </div>

        <div className="text-gray-700 font-semibold flex items-center space-x-1">
          <FaUserCircle className="h-5 w-5" />
          <Link to={"/login"} className="p-2 hidden sm:inline">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
