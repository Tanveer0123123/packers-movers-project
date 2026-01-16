import { NavLink } from "react-router-dom";
import aboutImg from "../assets/goods-3.jpeg";
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
              className="w-full h-screen object-cover rounded-lg shadow-md"
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              About Now & Fast Transportation
            </h2>

            <p className="text-start mt-4 text-base text-gray-600 leading-relaxed">
              Now & Fast Transportation is a reliable and customer-focused Packers & Movers
              service provider, known for safe shifting, timely delivery, and affordable
              pricing. We help families and businesses relocate smoothly with complete
              packing, loading, transportation, and unpacking support.
            </p>

            <p className="text-start mt-4 text-base text-gray-600 leading-relaxed">
              Our experienced team uses high-quality packing materials and modern tools to
              ensure your goods remain fully protected during transit. Whether it's home
              shifting, office relocation, vehicle transportation, or warehouse moving —
              we handle every step with professional care and responsibility.
            </p>

            <p className="text-start mt-4 text-base text-gray-600 leading-relaxed">
              We provide local shifting as well as intercity and outstation relocation
              services. With a strong focus on safety, transparency, and customer
              satisfaction, our aim is to deliver stress-free moving experience from start
              to finish.
            </p>
            <p className="text-start mt-4 text-base text-gray-600 leading-relaxed">
                We understand that every move is different. That’s why we offer customized
                relocation solutions depending on your needs, location, and budget. Our team
                guides you at every step and keeps everything transparent — no hidden charges,
                no confusion.
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
