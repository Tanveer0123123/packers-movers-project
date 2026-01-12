const images = [
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7",
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
];

const Gallery = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Work Gallery
          </h2>
          <p className="mt-3 text-gray-600">
            A glimpse of our packing, moving, and transportation services.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={img}
                alt="Packers and Movers Work"
                className="w-full h-48 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
