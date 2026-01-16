import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo-img2.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);


  const navLinkClass = ({ isActive }) =>
    `cursor-pointer hover:text-purple-700 transition ${isActive ? "text-purple-700 font-semibold" : "text-gray-700"
    }`;

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
            <span className="font-semibold">GST:</span> 23EFGPR6923L1ZZ
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-white shadow-md px-4 py-4 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Company Logo" className="w-12 h-12" />
            <span className="text-lg md:text-xl font-bold text-gray-800">
              Now And Fast Transportation Packers And Movers
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/tour-travels" className={navLinkClass}>
                Tour & Travels
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={navLinkClass}>
                Gallery
              </NavLink>
            </li>

            {/* Better CTA button */}
            <li>
              <Link
                to="/contactus"
                className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 z-50 transition-all duration-300 ${menuOpen ? "visible" : "invisible"
            }`}
        >
          {/* background overlay */}
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"
              }`}
            onClick={closeMenu}
          />

          {/* Drawer */}
          <div
            className={`absolute left-0 top-0 h-full w-[75%] max-w-[320px] bg-white shadow-xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-10 h-10" />
                <span className="font-bold text-gray-800">Now And Fast Transportation Packers And Movers </span>
              </div>

              <button onClick={closeMenu} className="text-2xl text-gray-700">
                <FaTimes />
              </button>
            </div>

            {/* Drawer Links */}
            <ul className="flex flex-col gap-4 p-5 font-medium">
              <li>
                <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/tour-travels"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Tour & Travels
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/gallery"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Gallery
                </NavLink>
              </li>

              {/* CTA Buttons */}
              <li className="pt-2">
                <Link
                  to="/contactus"
                  onClick={closeMenu}
                  className="block w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition text-center"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <a
                  href="tel:+917770862216"
                  onClick={closeMenu}
                  className="block w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition text-center"
                >
                  Call Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
