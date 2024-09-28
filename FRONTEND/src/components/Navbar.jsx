import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#E6EAE7]">
      <nav className="bg-[#E6EAE7] md:mx-[110px] py-3 px-4 md:px-1 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="E-waste Logo" className="h-14 " />
        </div>

        <ul className="hidden lg:flex gap-10 space-x-10 text-[#28735A] font-semibold">
          <li>
            <Link
              to="/features"
              className="hover:text-green-700 transition duration-300"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-green-700 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-green-700 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex space-x-4">
          <Link to="/auth">
            <button className="border-2 border-[#1B5844] text-[#1B5844] px-4 py-2 rounded-lg font-semibold hover:bg-[#1B5844] hover:text-white transition duration-300">
              Login
            </button>
          </Link>
          <Link to="/start-selling">
            <button className="bg-[#1B5844] text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
              Start Selling
            </button>
          </Link>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
