import homeImg from "../assets/services-11.png";
import officeImg from "../assets/services-2.png";
import tourTravels from "../assets/services-6.jfif";
import vehicleImg from "../assets/services-4.png";
import packingImg from "../assets/goods-6.jpeg";
import loadingImg from "../assets/goods-5.jpeg";
import { Link } from "react-router-dom";

const servicesData = [
  {
    img: homeImg,
    title: "Home Shifting",
    desc: "Safe household shifting services with professional packing, loading, transportation and unloading support for a stress-free relocation.",
  },
  {
    img: officeImg,
    title: "Office Relocation",
    desc: "Professional office shifting solutions ensuring safe movement of office furniture, documents and equipment with minimal downtime.",
  },
  {
    img: tourTravels,
    title: "Tour & Travels",
    desc: "Comfortable tour and travel services including local taxi, outstation trips and customized travel packages.",
  },

  {
    img: vehicleImg,
    title: "Daily Loading Vehicle",
    desc: "Loading vehicles available on daily basis for goods delivery, shop material transport and construction material transport.",
  },

  {
    img: vehicleImg,
    title: "Monthly Contract Vehicle",
    desc: "Vehicles available on monthly contract for company transportation, warehouse supply delivery and regular goods movement.",
  },

  {
    img: vehicleImg,
    title: "Part Load Transport",
    desc: "Affordable transport service for small goods shifting where customers share the vehicle space.",
  },

  {
    img: vehicleImg,
    title: "Full Load Transport",
    desc: "Complete truck transport service for bulk goods transportation with safe and reliable delivery.",
  },

  {
    img: packingImg,
    title: "Packing & Unpacking",
    desc: "High quality packing materials and expert packing services to ensure safe transportation of goods.",
  },

  {
    img: loadingImg,
    title: "Loading & Unloading",
    desc: "Experienced staff for safe loading and unloading of goods using proper handling techniques.",
  },
];

const Services = () => {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Our Services
          </h1>
          <p className="mt-2 text-gray-200">
            Home / Services
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* SECTION HEADING */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Packers & Movers Services
            </h2>
            <p className="mt-3 text-gray-600">
              We provide complete packing and moving solutions with safety,
              reliability, and affordability.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                {/* IMAGE  */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* TEXT BOTTOM */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Optional Button */}
                  <Link
                    to={`/services/${service.title
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(/\s+/g, "-")}`}
                    className="mt-5 inline-block px-5 py-2 text-sm font-semibold bg-purple-700 text-white rounded-full hover:bg-purple-800 transition"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* CTA STRIP */}
      <section className="bg-orange-500 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-white text-xl md:text-2xl font-semibold">
            Need Reliable Packers & Movers?
          </h3>
          <a
            href="/contact"
            className="bg-white text-orange-500 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
          >
            Get Free Quote
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
