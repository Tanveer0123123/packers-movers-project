import { useEffect, useState } from "react";
import hero1 from "../assets/Hero-img2.jpeg";
import hero2 from "../assets/Hero-img.png";

const slides = [
  {
    image: hero1,
    title: "Now & Fast Transportation",
    subtitle: "Packers & Movers | Safe • Fast • Affordable Moving Solutions",
  },
  {
    image: hero2,
    title: "Reliable Packing & Moving Services",
    subtitle: "House Shifting • Office Relocation • Vehicle Transport",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Manual Controls
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Images (best quality) */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={`Hero ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/*  Overlay for better look */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Gradient (makes it more premium) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight transition-all duration-700">
            {slides[currentSlide].title}
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-200 transition-all duration-700">
            {slides[currentSlide].subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="tel:9999999999"
              className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition text-center"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919999999999"
              className="bg-green-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-600 transition text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/*  Left / Right Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition"
      >
        ❯
      </button>

      {/*  Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
