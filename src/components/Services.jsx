import {
  FaHome,
  FaBuilding,
  FaTruck,
  FaBoxOpen,
  FaPeopleCarry,
  FaWarehouse,
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaHome />,
    title: "Home Shifting",
    desc: "Safe and secure household shifting services with professional packing and transportation.",
  },
  {
    icon: <FaBuilding />,
    title: "Office Relocation",
    desc: "Efficient office shifting solutions ensuring minimal downtime and maximum safety.",
  },
  {
    icon: <FaTruck />,
    title: "Vehicle Transportation",
    desc: "Two-wheeler and car transportation services with complete safety and insurance.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Packing & Unpacking",
    desc: "High-quality packing materials and expert packing for damage-free movement.",
  },
  {
    icon: <FaPeopleCarry />,
    title: "Loading & Unloading",
    desc: "Trained staff for safe loading and unloading of your valuable goods.",
  },
  {
    icon: <FaWarehouse />,
    title: "Warehousing",
    desc: "Secure and spacious warehousing solutions for short and long-term storage.",
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
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center"
            >
              <div className="text-purple-700 text-4xl mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
