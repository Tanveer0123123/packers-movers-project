import {
  FaCheckCircle,
  FaUserShield,
  FaClock,
  FaMoneyBillWave,
  FaTruckMoving,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaUserShield />,
    title: "GST Registered & Trusted",
    desc: "We are a legally registered company ensuring transparency and reliability.",
  },
  {
    icon: <FaTruckMoving />,
    title: "Safe & Secure Transport",
    desc: "Your goods are packed professionally and transported with complete safety.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    desc: "We value your time and ensure timely pickup and delivery of your belongings.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Affordable Pricing",
    desc: "Best quality services at competitive and transparent prices.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Experienced Team",
    desc: "Our trained staff handles your goods with care and professionalism.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* SECTION HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Us
          </h2>
          <p className="mt-3 text-gray-600">
            We make your moving experience simple, safe, and stress-free.
          </p>
        </div>

        {/* REASONS GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center"
            >
              <div className="text-purple-700 text-3xl mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
