import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo-img2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-purple-800 text-white text-sm px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <span>info@nowandfasttransportation.com</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+91 7770862216</span>
          </div>
          <div>
            <span className="font-semibold">GST:</span> 27XXXXXXXXX
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-white shadow-md px-4 py-4 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Company Logo" className="w-12 h-12" />
            <span className="text-lg md:text-xl font-bold text-gray-800">
              Now & Fast Transportation
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <li className="hover:text-purple-700 cursor-pointer">Home</li>
            <li className="hover:text-purple-700 cursor-pointer">About</li>
            <li className="hover:text-purple-700 cursor-pointer">Services</li>
            <li className="hover:text-purple-700 cursor-pointer">Gallery</li>
            <li className="hover:text-purple-700 cursor-pointer">Contact Us</li>
            <li>
              <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600">
                Enquiry
              </button>
            </li>
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg">
            <ul className="flex flex-col gap-4 p-4 font-medium text-gray-700">
              <li className="hover:text-purple-700 cursor-pointer">Home</li>
              <li className="hover:text-purple-700 cursor-pointer">About</li>
              <li className="hover:text-purple-700 cursor-pointer">Services</li>
              <li className="hover:text-purple-700 cursor-pointer">Gallery</li>
              <li className="hover:text-purple-700 cursor-pointer">Contact Us</li>
              <li>
                <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                  Enquiry
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
