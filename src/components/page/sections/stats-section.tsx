import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      percentage: "91%",
      description: "Think It's Convenient To Use 10 Mins A Day!"
    },
    {
      percentage: "87%",
      description: "Notice Hair And Scalp Improvements Within 90 Days!"
    },
    {
      percentage: "100%",
      description: "Love The TheraBrush™ Or Get Their Money Back In 90 Days!"
    },
    {
      percentage: "93%",
      description: "Lorem Ipsum Sit Dolor Amet"
    }
  ];

  return (
    <section className="bg-ghost-white py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-rich-purple text-fluid-2xl font-extrabold text-center mb-12">
          Backed By Real Numbers
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-5">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-9 rounded-[12px] shadow-sm flex flex-col items-center text-center min-h-[250px] justify-center"
            >
              <span className="text-[#7C3AED] text-5xl font-bold mb-6">
                {stat.percentage}
              </span>
              <p className="text-[#7C3AED] text-sm font-semibold leading-relaxed uppercase tracking-wide">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
