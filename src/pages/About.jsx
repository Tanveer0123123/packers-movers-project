import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import StatsCounter from "../components/StatsCounter";
import aboutImg from "../assets/Hero-img.png";

const About = () => {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            About Us
          </h1>
          <p className="mt-2 text-gray-200">
            Home / About Us
          </p>
        </div>
      </section>

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
              <h2 className=" text-3xl md:text-4xl font-bold text-gray-800">
                About Now & Fast Transportation
              </h2>

              <p className="text-start mt-4 text-base text-gray-600 leading-relaxed">
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

              <p className="text-start mt-4 text-base text-gray-600 leading-relaxed">
                Now & Fast Transportation is a trusted name in Packers and Movers
                services, offering safe, reliable, and affordable relocation
                solutions. With experienced staff and modern transportation
                facilities, we ensure your household and office goods are packed
                and delivered with complete care and professionalism.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-start text-3xl font-bold text-gray-800">
              Why Choose Now & Fast Transportation
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Now & Fast Transportation is known for providing safe, reliable, and affordable
              Packers & Movers services across India. We focus on making your relocation smooth,
              stress-free, and fully managed by professionals.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our trained team uses high-quality packing materials and the right packing methods
              to protect your goods from scratches, damage, and breakage. From pickup to delivery,
              we handle every item with complete care and responsibility.

            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We ensure on-time delivery, transparent pricing (no hidden charges), and complete
              customer support throughout your shifting journey. Whether it’s home shifting,
              office relocation, or vehicle transportation — we provide trusted service with
              100% customer satisfaction as our top priority. Whether it’s home shifting,
              office relocation, or vehicle transportation — we provide trusted service with
              100% customer satisfaction as our top priority.
            </p>

          </div>

          {/* IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
              alt="About Packers and Movers"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              Our Mission
            </h3>
            <p className="mt-3 text-gray-600">
              To provide professional, safe, and affordable packing and moving
              services while ensuring complete customer satisfaction.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              Our Vision
            </h3>
            <p className="mt-3 text-gray-600">
              To become a leading Packers & Movers company in India by delivering
              high-quality services and building long-term customer trust.
            </p>
          </div>

        </div>
      </section>

      {/* REUSED COMPONENTS */}
      <WhyChooseUs />
      <StatsCounter />

    </>
  );
};

export default About;
