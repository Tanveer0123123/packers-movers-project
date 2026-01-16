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
import img13 from "../assets/goods-13.jpeg";
import img14 from "../assets/goods-14.jpeg";
import img15 from "../assets/goods-15.jpeg";
import img16 from "../assets/goods-16.jpeg";
import img17 from "../assets/goods-17.jpeg";


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
  img13,
  img14,
  img15,
  img16,
  img17,
];

const Gallery = () => {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Our Gallery</h1>
          <p className="mt-2 text-gray-200">Home / Gallery</p>
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
