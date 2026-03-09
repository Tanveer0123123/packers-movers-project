import { useState } from "react";
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

  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Services
          </h2>
          <p className="mt-3 text-gray-600">
            We provide complete packing and moving solutions tailored to your needs.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {servicesData.map((service, index) => {

            // mobile pe 3 card limit
            if (!showAll && index > 2) {
              return (
                <div key={index} className="hidden lg:block">
                  <ServiceCard service={service} />
                </div>
              );
            }

            return <ServiceCard key={index} service={service} />;
          })}

        </div>

        {/* MOBILE VIEW MORE BUTTON */}
        {!showAll && (
          <div className="text-center mt-8 lg:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
            >
              View More Services
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      <div className="w-full h-48 overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">
          {service.title}
        </h3>

        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
          {service.desc}
        </p>

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
  );
};

export default Services;