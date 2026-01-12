import { useEffect, useState } from "react";

const stats = [
  { value: 1200, label: "Completed Moves" },
  { value: 400, label: "Global Agents" },
  { value: 100, label: "Experienced Workers" },
  { value: 1195, label: "Happy Clients" },
];

const StatsCounter = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervalTime = 20;
    const steps = duration / intervalTime;

    const timers = stats.map((stat, index) => {
      const increment = stat.value / steps;

      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] = Math.min(
              Math.ceil(newCounts[index] + increment),
              stat.value
            );
          }
          return newCounts;
        });
      }, intervalTime);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div key={index} className="border-r last:border-r-0 md:border-r border-gray-200">
              <h3 className="text-4xl md:text-5xl font-bold text-orange-500">
                {counts[index]}+
              </h3>
              <p className="mt-2 text-gray-700 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
