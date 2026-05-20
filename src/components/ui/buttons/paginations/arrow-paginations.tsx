export type CorouselPaginationButton = {
    onClick: () => void;
    variant: "circle-arrow" | "text-arrow"
}

export function PrevNavigation({ onClick, variant }: CorouselPaginationButton) {
    // This returns pagination button having an arrow enclosed in a circle.
    if (variant == "circle-arrow") return (
        <div className="h-auto w-auto transform transition-transform duration-200 
            hover:scale-110 cursor-pointer"
            onClick={onClick}
        >
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0949 29.9161C24.1759 29.9161 29.9161 24.1759 29.9161 17.0949C29.9161 10.0139 24.1759 4.27368 17.0949 4.27368C10.0139 4.27368 4.27368 10.0139 4.27368 17.0949C4.27368 24.1759 10.0139 29.9161 17.0949 29.9161Z" stroke="#5B5B5B" strokeWidth="2.84916" strokeMiterlimit="10" />
                <path d="M19.2318 12.287L13.8896 17.0949L19.2318 21.9029" stroke="#5B5B5B" strokeWidth="2.84916" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );

    // This returns pagination button having text corresponding with arrow.
    if (variant == "text-arrow") return (
        <div className="h-[34px] w-[102px] select-none bg-white rounded-[120px] 
            flex justify-center items-center gap-[10px] transform transition-transform 
            duration-200 hover:scale-110 cursor-pointer"
            onClick={onClick}
        >
            <div>
                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.11 4.23077H0.604368M0.604368 4.23077L4.81156 0.60437M0.604368 4.23077L4.81156 7.85718" stroke="black" strokeWidth="1.2088" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="font-semibold text-[16px] text-text-primary font-poppins leading-0">Prev</div>
        </div>
    )
}

export function NextNavigation({ onClick, variant }: CorouselPaginationButton) {
    // This returns pagination button having an arrow enclosed in a circle.
    if (variant == "circle-arrow") return (
        <div className="h-auto w-auto transform transition-transform duration-200 hover:scale-110 cursor-pointer"
            onClick={onClick}
        >
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0949 29.9161C24.1759 29.9161 29.9161 24.1759 29.9161 17.0949C29.9161 10.0139 24.1759 4.27368 17.0949 4.27368C10.0139 4.27368 4.27368 10.0139 4.27368 17.0949C4.27368 24.1759 10.0139 29.9161 17.0949 29.9161Z" stroke="#5B5B5B" strokeWidth="2.84916" strokeMiterlimit="10" />
                <path d="M15.4923 12.287L20.8345 17.0949L15.4923 21.9029" stroke="#5B5B5B" strokeWidth="2.84916" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );

    // This returns pagination button having text corresponding with arrow.
    if (variant == "text-arrow") return (
        <div className="h-[34px] w-[102px] select-none bg-white rounded-[120px] 
            flex justify-center items-center gap-[10px] transform transition-transform 
            duration-200 hover:scale-110 cursor-pointer"
            onClick={onClick}
        >
            <div className="font-semibold text-[16px] text-text-primary font-poppins leading-0">Next</div>
            <div>
                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.60437 4.23077H15.11M15.11 4.23077L10.9028 0.60437M15.11 4.23077L10.9028 7.85718" stroke="black" strokeWidth="1.2088" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}