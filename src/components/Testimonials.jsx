import { useEffect, useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Rohit Sharma",
    city: "Bhopal",
    message:
      "Excellent service! My household goods were packed and delivered safely on time.",
  },
  {
    name: "Anita Verma",
    city: "Indore",
    message:
      "Very professional team and affordable pricing. Highly satisfied with the service.",
  },
  {
    name: "Amit Singh",
    city: "Delhi",
    message:
      "Reliable packers and movers. Smooth shifting experience without any damage.",
  },
  {
    name: "Neha Jain",
    city: "Mumbai",
    message:
      "On-time delivery and polite staff. I would definitely recommend them.",
  },
  {
    name: "Suresh Patel",
    city: "Ahmedabad",
    message:
      "Packing quality was excellent and transport was very safe.",
  },
  {
    name: "Pooja Mishra",
    city: "Lucknow",
    message:
      "Stress-free relocation experience. Thank you for the great service.",
  },
];

const Testimonials = () => {
  const itemsPerSlide = 3;
  const [startIndex, setStartIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [startIndex]);

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + itemsPerSlide >= testimonials.length ? 0 : prev + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev - itemsPerSlide < 0
        ? testimonials.length - itemsPerSlide
        : prev - itemsPerSlide
    );
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerSlide
  );

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-gray-600">
            Trusted by hundreds of satisfied customers across India.
          </p>
        </div>

        {/* SLIDER AREA */}
        <div className="relative mt-10">

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full text-purple-700 hover:bg-purple-700 hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full text-purple-700 hover:bg-purple-700 hover:text-white transition"
          >
            <FaChevronRight />
          </button>

          {/* TESTIMONIAL GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="text-purple-700 text-2xl mb-3">
                  <FaQuoteLeft />
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  “{item.message}”
                </p>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {item.city}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
