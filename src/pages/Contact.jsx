import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Contact Us
          </h1>
          <p className="mt-2 text-gray-200">
            Home / Contact Us
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
              <FaPhoneAlt className="text-3xl text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 text-lg">
                Phone
              </h3>
              <p className="text-gray-600 mt-1">
                +91 99999 99999
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
              <FaEnvelope className="text-3xl text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 text-lg">
                Email
              </h3>
              <p className="text-gray-600 mt-1">
                info@nowandfasttransportation.com
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
              <FaMapMarkerAlt className="text-3xl text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 text-lg">
                Address
              </h3>
              <p className="text-gray-600 mt-1">
                C-Sector, Indrapuri, Bhopal, MP – 462021
              </p>
            </div>

          </div>

          {/* CONTACT FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Get In Touch
              </h2>
              <p className="mt-3 text-gray-600">
                Have questions or need a moving quote? Fill the form and our
                team will contact you shortly.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="tel:9999999999"
                  className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
                >
                  📞 Call Now
                </a>
                <br />
                <a
                  href="https://wa.me/919999999999"
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
                >
                  💬 WhatsApp Now
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
                />

                <input
                  type="text"
                  placeholder="From City"
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
                />

                <input
                  type="text"
                  placeholder="To City"
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
                />

                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition"
                >
                  Submit Message
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="w-full">
        <iframe
          title="Now and Fast Transportation Location"
          src="https://www.google.com/maps?q=Now%20and%20Fast%20Transportation%20Packers%20and%20Movers&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
