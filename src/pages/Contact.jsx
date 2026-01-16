import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  //  Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    fromCity: "",
    toCity: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  //  Change Handler
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit Handler (Email + WhatsApp)
  const handleSubmit = async (e) => {
    e.preventDefault();

    //  Basic validation
    if (!formData.name || !formData.phone) {
      alert("Please enter your Name and Mobile Number.");
      return;
    }

    setLoading(true);

    try {
      //  1) Send Email via Web3Forms (No backend)
      const payload = {
        access_key: "44b1597a-8e56-4730-82aa-34eaee3b0f0f", //  yaha apna key paste karo
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
        setLoading(false);
        return;
      }

      //  2) WhatsApp open with enquiry details
      const whatsappNumber = "8084410021"; // without +91
      const text = `*New Website Enquiry*%0A
      Name: ${formData.name}%0A
      Phone: ${formData.phone}%0A
      Email: ${formData.email}%0A 
      From City: ${formData.fromCity}%0A
      To City: ${formData.toCity}%0A
      Message: ${formData.message}`;

      window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");

      // Clear form
      alert("Enquiry submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        fromCity: "",
        toCity: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-gray-200">Home / Contact Us</p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
              <FaPhoneAlt className="text-3xl text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 text-lg">Phone</h3>
              <p className="text-gray-600 mt-1">+91 99999 99999</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
              <FaEnvelope className="text-3xl text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 text-lg">Email</h3>
              <p className="text-gray-600 mt-1">
                info@nowandfasttransportation.com
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
              <FaMapMarkerAlt className="text-3xl text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 text-lg">Address</h3>
              <p className="text-gray-600 mt-1">
                Anand Nagar & Kokta Transport Nagar, Bhopal (M.P.), India
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Get Free Quote
              </h2>
              <p className="mt-3 text-gray-600">
                Looking for reliable Packers & Movers? Fill the form and get a
                free moving estimate from our team.
              </p>

              <div className="mt-5 space-y-2 text-gray-700">
                <p className=" text-2xl font-semibold text-gray-800">
                  Now & Fast Transportation
                </p>

                <p>
                  📞 <span className="font-medium">+91 7770862216</span>
                </p>

                <p>
                  📧{" "}
                  <span className="font-medium">
                    info@nowandfasttransportation.com
                  </span>
                </p>

                <p className=" font-medium leading-relaxed">
                  📍 Address: Anand Nagar & Kokta Transport Nagar, Bhopal (M.P.),
                  India
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href="tel:7770862216"
                  className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
                >
                  📞 Call Now
                </a>
                <br />
                <a
                  href="https://wa.me/7770862216"
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
                >
                  💬 WhatsApp Now
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              {/*  onSubmit added */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
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
                />

                <input
                  type="text"
                  name="toCity"
                  placeholder="To City"
                  value={formData.toCity}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-purple-700"
                />

                <textarea
                  rows="4"
                  name="message"
                  placeholder="Message"
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
