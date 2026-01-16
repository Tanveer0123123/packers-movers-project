import { useEffect, useState } from "react";

const EnquiryPopup = () => {
  const [show, setShow] = useState(false);

  // ✅ Form State (Always top)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    fromCity: "",
    toCity: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Popup Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setShow(false);

  // ✅ Change Handler
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ Submit Handler (Email + WhatsApp)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!formData.name || !formData.phone) {
      alert("Please enter your Name and Mobile Number.");
      return;
    }

    setLoading(true);

    try {
      // ✅ 1) Send Email via Web3Forms
      const payload = {
        access_key: "44b1597a-8e56-4730-82aa-34eaee3b0f0f",
        subject: "New Enquiry - Now & Fast Transportation",
        from_name: "Website Contact Form",
        ...formData,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!data.success) {
        alert("Email sending failed. Please try again!");
        return;
      }

      // ✅ 2) WhatsApp open with enquiry details
      const whatsappNumber = "8084410021"; // without +91

      const text = `*New Website Enquiry*%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Email: ${formData.email}%0A
From City: ${formData.fromCity}%0A
To City: ${formData.toCity}%0A
Message: ${formData.message}`;

      window.open(`https://wa.me/91${whatsappNumber}?text=${text}`, "_blank");

      alert("Enquiry submitted successfully!");

      // ✅ Clear form
      setFormData({
        name: "",
        phone: "",
        email: "",
        fromCity: "",
        toCity: "",
        message: "",
      });

      // ✅ Close popup after submit
      setShow(false);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Return null after all hooks
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
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
            />

            <input
              type="text"
              name="fromCity"
              placeholder="From City"
              value={formData.fromCity}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
              required
            />

            <input
              type="text"
              name="toCity"
              placeholder="To City"
              value={formData.toCity}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
              required
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Message (Optional)"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPopup;
