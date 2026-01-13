const galleryImages = [
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7",
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1581091870627-3b1a1b1f0c1a",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498c",
  "https://images.unsplash.com/photo-1600585154154-1e30b38b33c9",
];

const Gallery = () => {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Our Gallery
          </h1>
          <p className="mt-2 text-gray-200">
            Home / Gallery
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Recent Work
            </h2>
            <p className="mt-3 text-gray-600">
              Take a look at our packing, moving, and transportation projects
              completed across India.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={img}
                  alt="Packers and Movers Gallery"
                  className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h3 className="text-white text-xl md:text-2xl font-semibold">
            Planning to Move? Get a Free Quote Today!
          </h3>
          <a
            href="/contact"
            className="inline-block mt-4 bg-white text-orange-500 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
          >
            Get Free Quote
          </a>
        </div>
      </section>
    </>
  );
};

export default Gallery;
