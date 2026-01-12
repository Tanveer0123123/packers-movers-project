const routes = [
  "Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune",
  "Kolkata", "Ahmedabad", "Surat", "Indore", "Noida", "Gurgaon",
  "Lucknow", "Kanpur", "Patna", "Ranchi", "Bhopal", "Gwalior",
  "Jaipur", "Udaipur", "Jodhpur", "Kota", "Nagpur", "Raipur",
  "Bilaspur", "Jabalpur", "Varanasi", "Prayagraj", "Agra", "Aligarh",
  "Chandigarh", "Ludhiana", "Amritsar", "Jammu", "Srinagar",
  "Guwahati", "Shillong", "Kochi", "Trivandrum", "Coimbatore",
  "Madurai", "Salem", "Vijayawada", "Visakhapatnam"
];

const ServiceRoutes = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Packers & Movers Services Across India
          </h2>
          <p className="mt-3 text-gray-600">
            We provide reliable and professional packing & moving services
            from <span className="font-semibold text-purple-700">Bhopal</span> to
            all major cities across India.
          </p>
        </div>

        {/* ROUTES GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-sm md:text-base">
          {routes.map((city, index) => (
            <div
              key={index}
              className="bg-white px-4 py-3 rounded-md shadow-sm hover:shadow-md transition"
            >
              <span className="text-gray-700">
                Packers & Movers from{" "}
                <span className="font-semibold text-purple-700">Bhopal</span>{" "}
                to{" "}
                <span className="font-semibold text-orange-500">{city}</span>
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#quote"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition"
          >
            Get Free Quote
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServiceRoutes;
