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
        <div>
            {/* Press Bar */}
            <div
                style={{
                    background: "linear-gradient(90deg, #7c5cbf 0%, #6244a8 100%)",
                    padding: "22px 32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "clamp(24px, 5vw, 60px)",
                    flexWrap: "wrap",
                }}
            >
                {pressItems.map(({ label, style }, i) => (
                    <span
                        key={i}
                        style={{
                            color: "#fff",
                            fontSize: "17px",
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
    );
}