import { useState, useEffect } from "react";

export function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);
  
    useEffect(() => {
      const checkWidth = () => {
        setIsDesktop(window.innerWidth >= 1024);
      };
  
      checkWidth(); // initial check
  
      window.addEventListener("resize", checkWidth);
  
      return () => {
        window.removeEventListener("resize", checkWidth);
      };
    }, []);
  
    return isDesktop;
  }