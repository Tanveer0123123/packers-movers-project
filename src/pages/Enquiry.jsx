const Enquiry = () => {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Enquiry
          </h1>
          <p className="mt-2 text-gray-200">
            Home / Enquiry
          </p>
        </div>
      </section>

      {/* ENQUIRY CONTENT */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Request a Free Moving Quote
            </h2>

            <p className="mt-3 text-gray-600">
              Share your moving details with us and our team will get back to
              you with the best possible quotation.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Safe & Secure Transportation</li>
              <li>✔ Affordable Pricing</li>
              <li>✔ All India Services</li>
              <li>✔ Professional Packing Team</li>
            </ul>

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

          {/* FORM */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
              />

              <input
                type="email"
                placeholder="Email Address"
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

              <select className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700">
                <option>Select Service Type</option>
                <option>Home Shifting</option>
                <option>Office Relocation</option>
                <option>Vehicle Transport</option>
                <option>Packing & Unpacking</option>
              </select>

              <textarea
                rows="4"
                placeholder="Additional Details"
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default Enquiry;
