import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import StatsCounter from "../components/StatsCounter";
import aboutImg from "../assets/goods-3.jpeg";
import aboutImg2 from "../assets/goods-4.jpeg";

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
                Our goal is simple — to make shifting easy and worry-free for every customer.
                From careful packing to safe loading and secure delivery, we follow a planned
                process to ensure your goods reach on time and in perfect condition.
              </p>

              <p className="text-start mt-4 text-base text-gray-600 leading-relaxed">
                We understand that every move is different. That’s why we offer customized
                relocation solutions depending on your needs, location, and budget. Our team
                guides you at every step and keeps everything transparent — no hidden charges,
                no confusion.
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
              src={aboutImg2}
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
