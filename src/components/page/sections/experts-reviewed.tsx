const DermatologistSection = () => {
  return (
    <section className="w-full px-6 py-12 md:py-20 max-w-[1920px] mx-auto font-sans">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-20">

        {/* Left Content Column */}
        <div className="flex-1 max-w-[560px]">
          <h2 className="text-[#000000] font-bold 
            text-[28px] leading-[38px] 
            md:text-[40px] md:leading-[50px] mb-6">
            Formulated By Experts, <br />
            <span className="text-[#7F00FF]">Dermatologist Reviewed</span>
          </h2>

          <p className="text-[#333333] 
            text-[16px] leading-[24px] 
            md:text-[20px] md:leading-[28px] mb-8">
            The Lavvi Micro Infusion System stands in a league of its own. By
            combining advanced delivery technology with powerful cosmetic
            ingredients, it bridges the gap between your daily routine and
            professional treatments. It is the gold standard for anyone
            serious about achieving a visibly radiant, youthful complexion from home.
          </p>

          <h3 className="font-bold text-[18px] md:text-[22px] text-black">
            Dr. Elizabeth Gren
          </h3>
        </div>

        {/* Right Image Column */}
        <div className="relative flex-1 flex justify-center md:justify-end">
          <div className="relative 
            w-[280px] h-[340px] 
            md:w-[450px] md:h-[500px]">

            {/* Primary Doctor (Elizabeth) */}
            <div className="absolute top-0 left-0 z-10 
              w-[174px] h-[264px] 
              md:w-[266px] md:h-[404px] 
              bg-gray-400 overflow-hidden rounded-sm shadow-lg">
              {/* <Image src="/path-to-elizabeth.jpg" alt="Dr. Elizabeth Gren" fill className="object-cover" /> */}
              <div className="absolute bottom-4 left-0 bg-[#7F00FF] text-white px-3 py-1 text-sm md:text-base font-medium">
                Dr. Elizabeth Gren
              </div>
            </div>

            {/* Secondary Doctor (Katlyn) */}
            <div className="absolute 
              top-[40px] left-[100px] 
              md:top-[60px] md:left-[160px] 
              w-[174px] h-[264px] 
              md:w-[266px] md:h-[404px] 
              bg-gray-500 overflow-hidden rounded-sm shadow-md">
              {/* <Image src="/path-to-katlyn.jpg" alt="Dr. Katlyn Scott" fill className="object-cover" /> */}
              <div className="absolute bottom-4 left-0 bg-[#7F00FF] text-white px-3 py-1 text-sm md:text-base font-medium">
                Dr. Katlyn Scott
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DermatologistSection;