import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="py-8 shadow-md bg-gray-400">
      <div className="w-screen  px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center">
          <div className="flex-grow ">
            <ul
              className={`${
                isOpen ? "block " : "hidden"
              } flex flex-col items-center gap-y-4 justify-center sm:flex sm:flex-row sm:space-x-8 py-8 sm:py-0 text-center bg-gray-400 w-full absolute right-0`}
            >
              <li className="font-semibold hover:text-blue-500 text-white">
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="font-semibold hover:text-blue-500 text-white">
                <Link to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className="font-semibold text-white hover:text-blue-500">
                <Link to="/community" onClick={closeMenu}>
                  Community
                </Link>
              </li>
              <li className="font-semibold text-white hover:text-blue-500">
                <Link to="/courses" onClick={closeMenu}>
                  Courses
                </Link>
              </li>
              <li className="font-semibold text-white hover:text-blue-500">
                <Link to="/news" onClick={closeMenu}>
                  Blog
                </Link>
              </li>
              <li className="font-semibold text-white hover:text-blue-500">
                <Link to="/CodeEditor" onClick={closeMenu}>
                  CodeEditor
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6 transition-colors duration-200 hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
