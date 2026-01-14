const QuoteForm = () => {
  return (
    <>
      {/* QUOTE SECTION */}
      <section id="quote" className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Get Free Quote
              </h2>

              <p className=" mt-3 text-gray-600 leading-relaxed">
                Looking for reliable Packers & Movers? Fill the form and get a free moving
                estimate from our team.
              </p>

              {/* COMPANY DETAILS */}
              <div className="mt-5 space-y-2 text-gray-700">
                <p className=" text-2xl font-semibold text-gray-800">
                  Now & Fast Transportation
                </p>

                <p>
                  📞 <span className="font-medium">+91 7770862216</span>
                </p>

                <p>
                  📧 <span className="font-medium">info@nowandfasttransportation.com</span>
                </p>

                <p className=" font-medium leading-relaxed">
                  📍 Address: Anand Nagar & Kokta Transport Nagar, Bhopal (M.P.), India
                </p>
              </div>

              {/* BUTTONS */}
              <div className="mt-6 space-y-3">
                <a
                  href="tel:+917770862216"
                  className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
                >
                  📞 Call Now
                </a>

                <br />

                <a
                  href="https://wa.me/917770862216"
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
                >
                  💬 WhatsApp Now
                </a>
              </div>
            </div>

            {/* FORM */}
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
                  type="email"
                  placeholder="Email"
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
                  placeholder="Message (Optional)"
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
        </div>
      </section>

      {/* GOOGLE MAP SECTION */}
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

export default QuoteForm;
