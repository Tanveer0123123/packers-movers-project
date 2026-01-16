import img1 from "../assets/goods-1.jpeg";
import img2 from "../assets/goods-2.jpeg";
import img3 from "../assets/goods-3.jpeg";
import img4 from "../assets/goods-4.jpeg";
import img5 from "../assets/goods-5.jpeg";
import img6 from "../assets/goods-6.jpeg";
import img7 from "../assets/goods-7.jpeg";
import img8 from "../assets/goods-8.jpeg";
import img9 from "../assets/goods-9.jpeg";
import img10 from "../assets/goods-10.jpeg";
import img11 from "../assets/goods-11.jpeg";
import img12 from "../assets/goods-12.jpeg";


const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
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

         {/* Images */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
              >
                <img
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

      </div>
    </section>
  );
};

export default Gallery;
