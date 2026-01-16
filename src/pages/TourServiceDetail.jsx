import { useParams, Link } from "react-router-dom";
import { tourServicesDetails } from "../data/tourServicesDetails";

const TourServiceDetail = () => {
  const { slug } = useParams();

  const service = tourServicesDetails.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Tour Service Not Found
        </h2>
        <Link to="/tour-services" className="text-orange-500 underline">
          Back to Tour Services
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            {service.title}
          </h1>
          <p className="mt-2 text-gray-200">
            Home / Tour & Travels / {service.title}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {service.title}
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {service.description}
            </p>

            <ul className="mt-6 space-y-2">
              {service.points.map((point, index) => (
                <li key={index} className="text-gray-700">
                  ✔ {point}
                </li>
              ))}
            </ul>

            <Link
              to="/contactus"
              className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
            >
              Book Now
            </Link>
          </div>

          {/* IMAGE */}
          <div>
            <img
              src={service.image}
              alt={service.title}
              className="rounded-lg shadow-md w-full"
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default TourServiceDetail;
