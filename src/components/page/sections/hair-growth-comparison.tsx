

export default function HairGrowthComparison() {
    const rowCount = 8;

    const alternatives = [
        { name: 'Minoxidil', cost: '$500+/year' },
        { name: 'PRP Treatment', cost: '$2000+' },
        { name: 'Hair Transplant', cost: '$10,000+' },
    ];

    return (
        <div className={
            `bg-[#fdfaff] font-sans px-4 py-8 md:p-12 mb-10 text-[#1a1a1a]`
        }>
            <div className={
                `w-full`
            }>

                {/* Section Heading */}
                <h1 className={
                    `text-fluid-2xl font-extrabold text-center text-rich-purple mb-8
                     md:mb-14`
                }>
                    4 Steps For Hair Growth
                </h1>

                {/* Content Container */}
                <div className={
                    `w-full flex flex-col items-center justify-center gap-10 xl:flex-row
                     xl:items-start lg:gap-16`
                }>

                    {/* Comparison Table Section */}
                    <div className={
                        `w-full max-w-150 xl:max-w-[unset] xl:w-3/5 overflow-x-auto`
                    }>
                        <div className={
                            `min-w-[320px] relative`
                        }>
                            <div
                                aria-hidden="true"
                                className="absolute inset-y-0 left-1/3 w-1/3 z-10!
               bg-[linear-gradient(180deg,#7700FF_0%,#EDE5FF_100%)]
               rounded-t-xl"
                            />
                            {/* Header Row */}
                            <div className={
                                `grid grid-cols-3 text-center border-b border-rich-purple items-`
                            }>
                                <div className={
                                    `visible xl:invisible text-[18px] font-sfpro font-bold
                                     text-rich-purple py-4 leading-tight text-left`
                                }>Benefits</div>
                                <div className={
                                    `text-white font-bold py-4 text-fluid-xl z-20!`
                                }>
                                    Lavvi
                                </div>
                                <div className={
                                    `py-4 font-bold text-black text-fluid-lg`
                                }>
                                    Pills
                                </div>
                            </div>

                            {/* Dynamic Table Rows */}
                            <div className={
                                `divide-y divide-rich-purple z-20`
                            }>
                                {Array.from({ length: rowCount }).map((_, index) => {
                                    const isFifthRow = index === 4;
                                    return (
                                        <div key={index} className={
                                            `grid grid-cols-3 text-center items-center`
                                        }>
                                            {/* Criteria Label */}
                                            <div className={
                                                `py-3.5 text-left text-[15px] md:text-xl text-black font-medium
                                                 font-sfpro leading-0`
                                            }>
                                                Lorem Ipsum
                                            </div>

                                            {/* Lavvi Feature Column */}
                                            <div className={
                                                `py-3.5 border-x border-white/10 flex justify-center z-20!`
                                            }>
                                                <span className={
                                                    `flex items-center justify-center bg-white text-black font-bold text-xs
                                                     leading-0 rounded-full w-5 h-5`
                                                }>
                                                    ✓
                                                </span>
                                            </div>

                                            {/* Pills Feature Column */}
                                            <div className={
                                                `py-3.5 flex justify-center`
                                            }>
                                                {isFifthRow ? (
                                                    <span className={
                                                        `flex items-center justify-center bg-black text-white rounded-full w-5
                                                         h-5 text-xs leading-0`
                                                    }>
                                                        ✓
                                                    </span>
                                                ) : (
                                                    <span className={
                                                        `flex items-center justify-center text-black font-extrabold
                                                         text-fluid-lg`
                                                    }>
                                                        ✕
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>

                    {/* Pricing Stack Section */}
                    <div className={
                        `w-full max-w-150 xl:max-w-[unset] xl:w-2/5 space-y-6 md:pt-4`
                    }>
                        <div>
                            <h2 className={
                                `text-3xl md:text-4xl font-extrabold text-rich-purple font-sfpro
                                 leading-tight tracking-tight`
                            }>
                                More Hair.<br />More savings.
                            </h2>
                        </div>

                        <div className={
                            `space-y-3.5 w-full`
                        }>
                            {/* Featured Brand (Lavvi) */}
                            <div className={
                                `w-full xl:max-w-100 flex justify-between items-center gap-20`
                            }>
                                <span className={
                                    `font-bold tracking-wide bg-[#9333ea] text-white rounded-full px-6 py-3
                                     shadow-md transform hover:scale-[1.01] transition-transform
                                     cursor-pointer flex-1`
                                }>Lavvi</span>
                                <span className={
                                    `font-bold text-fluid-base text-rich-purple`
                                }>just $129</span>
                            </div>

                            {/* Competitive Alternatives */}
                            {alternatives.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={
                                        `w-full flex justify-between items-center gap-20`
                                    }
                                >
                                    <span className={
                                        `font-medium px-6 py-3 text-gray-700 transition-colors border
                                         border-purple-200 hover:border-purple-400 flex-1 rounded-full
                                         cursor-pointer`
                                    }>{item.name}</span>
                                    <span className={
                                        `font-bold text-fluid-base text-rich-purple`
                                    }>{item.cost}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
