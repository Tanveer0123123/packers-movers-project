import { NavLink } from "react-router-dom";
import aboutImg from "../assets/Hero-img.png";
// agar image nahi hai, to temporary Unsplash URL use kar sakte ho

const About = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* LEFT: IMAGE */}
          <div>
            <img
              src={aboutImg}
              alt="About Now & Fast Transportation"
              className="w-full h-[300px] lg:h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              About Now & Fast Transportation
            </h2>

            <p className=" text-start mt-4 text-base text-gray-600 leading-relaxed">
              Now & Fast Transportation is a trusted name in Packers and Movers
              services, offering safe, reliable, and affordable relocation
              solutions. With experienced staff and modern transportation
              facilities, we ensure your household and office goods are packed
              and delivered with complete care and professionalism.
            </p>
             <p className=" text-start mt-4 text-base text-gray-600 leading-relaxed">
              Now & Fast Transportation is a trusted name in Packers and Movers
              services, offering safe, reliable, and affordable relocation
              solutions. With experienced staff and modern transportation
              facilities, we ensure your household and office goods are packed
              and delivered with complete care and professionalism.
            </p>

             <p className="text-start mt-4 text-base text-gray-600 leading-relaxed">
              Now & Fast Transportation is a trusted name in Packers and Movers
              services, offering safe, reliable, and affordable relocation
              solutions. With experienced staff and modern transportation
              facilities, we ensure your household and office goods are packed
              and delivered with complete care and professionalism.
            </p>

            <button className="bg-orange-500 text-white px-5 py-2 mt-4 rounded hover:bg-orange-600">
              {/* <NavLink to="/about"> Know More </Navlink>    */}
              <NavLink to="/about">
                Know More
              </NavLink>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
