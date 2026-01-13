const servicesList = [
  {
    title: "Home Shifting",
    desc: "Safe and secure household shifting with professional packing and timely delivery across India.",
  },
  {
    title: "Office Relocation",
    desc: "Efficient office moving services ensuring minimal downtime and maximum safety of equipment.",
  },
  {
    title: "Vehicle Transportation",
    desc: "Reliable car and two-wheeler transportation with proper loading and safety measures.",
  },
  {
    title: "Packing & Unpacking",
    desc: "High-quality packing materials and expert handling to prevent damage during transit.",
  },
  {
    title: "Loading & Unloading",
    desc: "Trained staff to safely load and unload goods with modern equipment.",
  },
  {
    title: "Warehousing Services",
    desc: "Secure and spacious warehousing solutions for short-term and long-term storage.",
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

      {/* SERVICES CONTENT */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Packers & Movers Services
            </h2>
            <p className="mt-3 text-gray-600">
              We provide complete packing and moving solutions with safety,
              reliability, and affordability.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
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
