import taxiImg from "../assets/t-s-texi.png";
import familyImg from "../assets/t-s-family.jpg";
import corporateImg from "../assets/t-s-corporate.jpg";
import religiousImg from "../assets/t-s-religious.jfif";
import airportImg from "../assets/t-s-airpote.jpg";
import customImg from "../assets/t-s-coustomized.jfif"
import { Link } from "react-router-dom";

const tourServices = [
  {
    slug: "local-outstation-taxi",
    img: taxiImg,
    title: "Local & Outstation Taxi Service",
    desc: "Comfortable taxi services for local city travel and outstation trips with experienced drivers.",
  },
  {
    slug: "family-tour-packages",
    img: familyImg,
    title: "Family Tour Packages",
    desc: "Customized family tour packages designed for comfort, fun, and memorable experiences.",
  },
  {
    slug: "corporate-travel",
    img: corporateImg,
    title: "Corporate Travel Services",
    desc: "Professional travel solutions for corporate meetings, events, and business trips.",
  },
  {
    slug: "religious-pilgrimage-tours",
    img: religiousImg,
    title: "Religious & Pilgrimage Tours",
    desc: "Special travel arrangements for religious destinations across India.",
  },
  {
    slug: "airport-pickup-drop",
    img: airportImg,
    title: "Airport Pickup & Drop",
    desc: "On-time airport transfer services ensuring hassle-free travel.",
  },
  {
    slug: "customized-tour-packages",
    img: customImg,
    title: "Customized Tour Packages",
    desc: "Tailor-made travel plans according to customer needs, budget, and destination.",
  },
];


const TourServices = () => {
  return (
    <>
      {/* SERVICES GRID */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Tour & Travel Services
            </h2>
            <p className="mt-3 text-gray-600">
              We offer a wide range of travel services designed to meet different
              travel needs with comfort and safety.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                {/*  IMAGE TOP */}
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
                    to={`/tour-services/${service.slug}`}
                    className="inline-block mt-5 px-5 py-2 text-sm font-semibold bg-purple-700 text-white rounded-full hover:bg-purple-800 transition"
                  >
                    Know More
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TourServices;
