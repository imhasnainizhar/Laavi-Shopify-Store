import React from 'react';
import { Plus, X } from 'lucide-react';

const LavviGrowthProtocol = () => {
  const [openSection, setOpenSection] = React.useState(0);

  const steps = [
    {
      week: '1 Week',
      title: 'Scalp Reset Begins',
      content: 'Micro-infusion supports natural scalp renewal. Actives begin working at the follicle level. Scalp feels cleaner, refreshed, and balanced.'
    },
    {
      week: '4 Weeks',
      title: 'Reduced Shedding & Stronger Roots',
      content: 'Formula strengthens the hair anchor and significantly reduces daily hair fall.'
    },
    {
      week: '8 Weeks',
      title: 'Early Visible ReGRWth',
      content: 'New baby hairs begin to emerge and existing strands appear thicker.'
    },
    {
      week: '12 Weeks',
      title: 'Density & Long-Term Scalp Health',
      content: 'Maximum visible density achieved with a optimized scalp environment.'
    }
  ];

  return (
    <section className="relative w-full min-h-[500px] p-8 md:p-12 font-sfpro">
      {/* Decorative Frost/Pine Border (Simplified with CSS) */}
      <div className="absolute top-0 left-0 w-24 h-full opacity-40 bg-[url('/placeholder-frost-left.png')] bg-repeat-y" />
      <div className="absolute top-0 right-0 w-24 h-full opacity-40 bg-[url('/placeholder-frost-right.png')] bg-repeat-y" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Accordion */}
        <div className="space-y-3 z-10">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`rounded-2xl transition-all duration-300 ${
                openSection === index ? 'bg-white/95 shadow-lg' : 'bg-white/90'
              }`}
            >
              <button
                onClick={() => setOpenSection(openSection === index ? -1 : index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-semibold text-gray-800 tracking-tight">
                  {step.week} — {step.title}
                </span>
                {openSection === index ? (
                  <X className="w-5 h-5 text-gray-400" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {openSection === index && (
                <div className="px-4 pb-6 animate-in fade-in slide-in-from-top-2">
                  <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                    {step.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side: Product & Heading */}
        <div className="text-center lg:text-left z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Designed To Support Visible <br />
            Growth Across A 12-Week Protocol
          </h2>
          
          <div className="relative flex justify-center lg:justify-start items-end space-x-4 mb-10">
            {/* Vials Placeholder */}
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-20 bg-white/20 rounded-md border border-white/30 backdrop-blur-sm" />
              ))}
            </div>
            {/* Main Infuser Placeholder */}
            <div className="w-20 h-32 bg-white/30 rounded-2xl border border-white/50 backdrop-blur-md shadow-xl" />
            {/* Small Caps Placeholder */}
            <div className="flex space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-full border border-white/30" />
              <div className="w-10 h-10 bg-white/20 rounded-full border border-white/30" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center">
        <button className="bg-[#7e22ce] hover:bg-[#6b21a8] text-white font-bold py-4 px-12 rounded-lg border border-white/20 shadow-xl transition-all transform hover:scale-105">
          Add To Cart — $178.95
        </button>
      </div>
    </section>
  );
};

export default LavviGrowthProtocol;
