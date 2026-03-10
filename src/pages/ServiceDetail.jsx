import { useParams, Link } from "react-router-dom";
import { servicesDetails } from "../data/servicesDetails";
import { Helmet } from "react-helmet-async";

const ServiceDetail = () => {

  const { slug } = useParams();

  const service = servicesDetails.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Service Not Found
        </h2>
        <Link to="/services" className="text-orange-500 underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>
          {service.title} in Bhopal | Now And Fast Transportation Packers And Movers
        </title>

        <meta
          name="description"
          content={`${service.title} in Bhopal by Now And Fast Transportation Packers And Movers. Safe packing, loading and transport services with professional team.`}
        />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "${service.title}",
            "provider": {
              "@type": "MovingCompany",
              "name": "Now And Fast Transportation Packers And Movers"
            },
            "areaServed": {
              "@type": "City",
              "name": "Bhopal"
            }
          }
          `}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="bg-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            {service.title}
          </h1>
          <p className="mt-2 text-gray-200">
            Home / Services / {service.title}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

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
              Get Free Quote
            </Link>
          </div>

          <div>
            <img
              src={service.image}
              alt={service.title}
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>

        {/* EXTRA SEO CONTENT */}
        <div className="max-w-4xl mx-auto mt-16 px-4">

          <h2 className="text-2xl font-bold text-gray-800">
            {service.title} in Bhopal
          </h2>

          <p className="mt-4 text-gray-600">
            Now And Fast Transportation Packers And Movers provides professional
            {service.title.toLowerCase()} in Bhopal with safe packing, careful
            loading and secure transportation services. Our experienced team
            ensures that your goods are transported safely and delivered on time.
          </p>

          <p className="mt-4 text-gray-600">
            We use high-quality packing materials and modern transport vehicles
            to ensure safe relocation services across Bhopal and nearby areas.
            Customer satisfaction and safety of goods are our top priorities.
          </p>

          {/* FAQ */}
          <h3 className="text-xl font-bold mt-8">
            Frequently Asked Questions
          </h3>

          <p className="mt-4 font-semibold">
            What is the cost of {service.title.toLowerCase()} in Bhopal?
          </p>

          <p className="text-gray-600">
            The cost depends on distance, goods quantity and transportation
            requirements. Contact us for a free quote.
          </p>

          <p className="mt-4 font-semibold">
            Do you provide packing materials?
          </p>

          <p className="text-gray-600">
            Yes, we provide high quality packing materials to ensure safe
            transportation of goods.
          </p>

        </div>
      </section>
    </>
  );
};

export default ServiceDetail;