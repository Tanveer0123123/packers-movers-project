import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import StatsCounter from "../components/StatsCounter";

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

      {/* ABOUT CONTENT */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Now & Fast Transportation
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Now & Fast Transportation is a trusted Packers & Movers company
              providing safe, reliable, and affordable relocation services
              across India. With years of experience and a skilled team,
              we ensure a smooth and stress-free moving experience.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We specialize in home shifting, office relocation, vehicle
              transportation, packing & unpacking, and warehousing solutions.
              Customer satisfaction and safety of goods are our top priorities.
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
