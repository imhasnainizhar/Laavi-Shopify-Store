import { CSSProperties } from "react";

type PressItem = {
    label: string;
    style?: CSSProperties;
};

const pressItems: PressItem[] = [
    { label: "GLAMOUR", style: { letterSpacing: "0.08em" } },
    { label: "marie claire", style: { fontWeight: 300, letterSpacing: "0.02em" } },
    { label: "COSMOPOLITAN", style: { letterSpacing: "0.06em" } },
    { label: "Forbes", style: { fontFamily: "'Playfair Display', serif", fontStyle: "italic" } },
    { label: "THE TIMES\nTHE SUNDAY TIMES", style: { fontSize: "11px", whiteSpace: "pre", textAlign: "center" } },
    { label: "BuzzFeed", style: { fontSize: "20px" } },
];

export default function PressBanner() {
    return (
        <div className="w-full overflow-hidden">
            <style>
                {`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                `}
            </style>
            
            <div
                style={{
                    background: "linear-gradient(90deg, #774CF9 64.42%, #EDE5FF 100%)",
                    marginTop: "75px",
                }}
                className="py-[26px]"
            >
                {/* 
                  To prevent the "lag" or jump, we duplicate the array 
                  so the end of the list leads perfectly into the start.
                */}
                <div className="flex animate-scroll whitespace-nowrap 
                gap-[clamp(20px,5vw,60px)] w-max">
                    {[...pressItems, ...pressItems].map(({ label, style }, i) => (
                        <span
                            key={i}
                            className="inline-block"
                            style={{
                                color: "#fff",
                                fontSize: "27px",
                                fontWeight: 700,
                                fontFamily: "'DM Sans', sans-serif",
                                letterSpacing: "0.04em",
                                opacity: 0.9,
                                ...style,
                            }}
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
