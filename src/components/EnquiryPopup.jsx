import { useEffect, useState } from "react";

const EnquiryPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // yaha tum API call 
    alert("Enquiry Submitted ✅");
    setShow(false); // submit ke baad popup band
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 px-4 flex items-center justify-center">
      {/* Modal Box */}
      <div
        className="
      relative w-full max-w-lg bg-white rounded-xl shadow-2xl 
      p-6 md:p-8 animate-fadeIn
      max-h-[90vh] overflow-y-auto
    "
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl font-bold"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          Quick Enquiry Form
        </h2>

        {/* Form */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
              required
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
              required
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
              required
            />

            <input
              type="text"
              placeholder="To City"
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
              required
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

  );
};

export default EnquiryPopup;
