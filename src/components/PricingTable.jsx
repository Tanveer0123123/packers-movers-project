const pricingData = [
  {
    type: "1 BHK Home",
    km50: "₹7,000 – 11,000",
    km500: "₹12,000 – 16,000",
    km1000: "₹20,000 – 25,000",
    km1500: "₹26,000 – 32,000",
    km2500: "₹30,000 – 35,000",
  },
  {
    type: "2 BHK Home",
    km50: "₹12,000 – 15,000",
    km500: "₹20,000 – 23,000",
    km1000: "₹25,000 – 30,000",
    km1500: "₹32,000 – 40,000",
    km2500: "₹40,000 – 45,000",
  },
  {
    type: "3 BHK Home",
    km50: "₹15,000 – 18,000",
    km500: "₹25,000 – 30,000",
    km1000: "₹35,000 – 40,000",
    km1500: "₹45,000 – 50,000",
    km2500: "₹50,000 – 65,000",
  },
  {
    type: "4 BHK / Villa",
    km50: "₹25,000 – 30,000",
    km500: "₹35,000 – 40,000",
    km1000: "₹50,000 – 60,000",
    km1500: "₹55,000 – 65,000",
    km2500: "₹70,000 – 90,000",
  },
  {
    type: "Car Transportation",
    km50: "₹9,000 – 11,500",
    km500: "₹12,000 – 14,500",
    km1000: "₹17,000 – 20,000",
    km1500: "₹21,000 – 25,000",
    km2500: "—",
  },
  {
    type: "Bike Transportation",
    km50: "₹3,000 – 7,000",
    km500: "₹7,000 – 10,500",
    km1000: "₹10,000 – 15,000",
    km1500: "₹15,000 – 18,000",
    km2500: "—",
  },
];

const PricingTable = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Rates & Charges for Packers and Movers in Bhopal
          </h2>
          <p className=" mt-3 text-gray-600">
            Below are the approximate moving charges based on distance and type
            of shifting. Actual cost may vary depending on goods volume and
            services required.
          </p>
        </div>

        {/* TABLE */}
        <div className="mt-10 overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm md:text-base">
            <thead className="bg-purple-800 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Shifting Type</th>
                <th className="px-4 py-3">Up to 50 KM</th>
                <th className="px-4 py-3">Up to 500 KM</th>
                <th className="px-4 py-3">Up to 1000 KM</th>
                <th className="px-4 py-3">Up to 1500 KM</th>
                <th className="px-4 py-3">Within 2500 KM</th>
              </tr>
            </thead>

            <tbody>
              {pricingData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {row.type}
                  </td>
                  <td className="px-4 py-3 text-orange-600 font-semibold text-center">
                    {row.km50}
                  </td>
                  <td className="px-4 py-3 text-center">{row.km500}</td>
                  <td className="px-4 py-3 text-center">{row.km1000}</td>
                  <td className="px-4 py-3 text-center">{row.km1500}</td>
                  <td className="px-4 py-3 text-center">{row.km2500}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* DISCLAIMER */}
        <p className="mt-4 text-sm text-gray-500 text-center">
          *Prices are indicative and may vary based on packing material,
          manpower, floor level, distance, and insurance requirements.
        </p>

      </div>
    </section>
  );
};

export default PricingTable;
