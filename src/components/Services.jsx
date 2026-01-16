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
    desc: "Safe and secure household shifting services with professional packing and transportation.",
  },
  {
    img: officeImg,
    title: "Office Relocation",
    desc: "Efficient office shifting solutions ensuring minimal downtime and maximum safety.",
  },
  {
    img: tourTravels,
    title: "Tour & Travels",
    desc: "Reliable tour and travel services for comfortable, safe, and hassle-free journeys.",
  },
  {
    img: vehicleImg,
    title: "Vehicle Transportation",
    desc: "Two-wheeler and car transportation services with complete safety and insurance.",
  },
  {
    img: packingImg,
    title: "Packing & Unpacking",
    desc: "High-quality packing materials and expert packing for damage-free movement.",
  },
  {
    img: loadingImg,
    title: "Loading & Unloading",
    desc: "Trained staff for safe loading and unloading of your valuable goods.",
  },


];

const Services = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* SECTION HEADING */}
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
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* IMAGE */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/*  TEXT BOTTOM */}
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
  );
};

export default Services;
