import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAngleRight
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
              services with safe packing, fast delivery and affordable pricing
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
                <a
                  href="tel:+917770862216"
                  className="text-white font-semibold hover:text-orange-400"
                >
                  +91 7770862216
                </a>
              </div>
            </div>
          </div>

          {/* OUR SERVICES */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Our Services
            </h3>

            <ul className="space-y-2 text-md">
              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500 text-sm" />
                Home Shifting
              </li>

              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500 text-sm" />
                Tour & Travels
              </li>

              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500 text-sm" />
                Office Relocation
              </li>

              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500 text-sm" />
                Vehicle Transportation
              </li>

              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500 text-sm" />
                Packing & Unpacking
              </li>

              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500 text-sm" />
                Warehousing Services
              </li>
            </ul>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Useful Links
            </h3>

            <ul className="space-y-2 text-md">
              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500 text-sm" />
                <NavLink to="/about" className="hover:text-orange-400 transition">
                  About Us
                </NavLink>
              </li>

              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500 text-sm" />
                <NavLink to="/services" className="hover:text-orange-400 transition">
                  Our Services
                </NavLink>
              </li>

              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500 text-sm" />
                <NavLink to="/tour-travels" className="hover:text-orange-400 transition">
                  Tour & Travels
                </NavLink>
              </li>

              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500 text-sm" />
                <NavLink to="/gallery" className="hover:text-orange-400 transition">
                  Gallery
                </NavLink>
              </li>

              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500 text-sm" />
                <NavLink to="/contactus" className="hover:text-orange-400 transition">
                  Contact Us
                </NavLink>
              </li>

              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500 text-sm" />
                <NavLink to="/privacy-policy" className="hover:text-orange-400 transition">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>

            {/* Branch 1 */}
            <div className="flex gap-3 text-md mb-3">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <p>
                Anand Nagar & Kokta Transport Nagar, Bhopal (M.P.), India
              </p>
            </div>

            {/* Branch 2 */}
            <div className="flex gap-3 text-md mb-3">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <p>
                Shop No.2, House No.29, Balaji Lake City, Lamhakheda Karond,
                Bhopal - 462038 (Near Harsh Transport), India
              </p>
            </div>

            {/* Phone */}
            <div className="flex gap-3 text-md mb-3">
              <FaPhoneAlt className="text-orange-500" />
              <a
                href="tel:+917770862216"
                className="hover:text-orange-400"
              >
                +91 7770862216
              </a>
            </div>

            {/* Email */}
            <div className="flex gap-3 text-md">
              <FaEnvelope className="text-orange-500" />
              <a
                href="mailto:nandfttransportationpandm@gmail.com"
                className="hover:text-orange-400"
              >
                nandfttransportationpandm
                @gmail.com
              </a>
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