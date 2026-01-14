import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/Logo-img2.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COMPANY INFO */}
          <div>

            <img src={logo} alt="Company Logo" className="w-24 mb-4" />
            <p className="text-md leading-relaxed">
              Now & Fast Transportation provides reliable Packers & Movers
              services with safe packing, fast delivery, and affordable pricing
              across India.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-4">
              <a className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:bg-orange-500 hover:border-orange-500 transition">
                <FaFacebookF />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:bg-orange-500 hover:border-orange-500 transition">
                <FaInstagram />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:bg-orange-500 hover:border-orange-500 transition">
                <FaLinkedinIn />
              </a>
            </div>

            {/* HELP */}
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 flex items-center justify-center rounded-full text-white">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm">Need Help?</p>
                <p className="text-white font-semibold">+91 7770862216</p>
              </div>
            </div>
          </div>

          {/* OUR SERVICES */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-md">
              <li>› Home Shifting</li>
              <li>› Office Relocation</li>
              <li>› Vehicle Transportation</li>
              <li>› Packing & Unpacking</li>
              <li>› Warehousing Services</li>
            </ul>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2 text-md">
              <li>
                <NavLink to="/about" className="hover:text-orange-400 transition">
                  › About Us
                </NavLink>
              </li>

              <li>
                <NavLink to="/services" className="hover:text-orange-400 transition">
                  › Our Services
                </NavLink>
              </li>

              <li>
                <NavLink to="/gallery" className="hover:text-orange-400 transition">
                  › Gallery
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className="hover:text-orange-400 transition">
                  › Contact Us
                </NavLink>
              </li>

              <li>
                <NavLink to="/privacy-policy" className="hover:text-orange-400 transition">
                  › Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <div className="flex gap-3 text-md mb-3">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <p>
               Anand Nagar & Kokta Transport Nagar, Bhopal (M.P.), India
              </p>
            </div>

            <div className="flex gap-3 text-md mb-3">
              <FaPhoneAlt className="text-orange-500" />
              <p>+91 7770862216</p>
            </div>

            <div className="flex gap-3 text-md">
              <FaEnvelope className="text-orange-500" />
              <p>info@nowandtransportation.com</p>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 py-4 text-center text-md">
        © {new Date().getFullYear()} Now & Fast Transportation. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
