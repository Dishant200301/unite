import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import RightIcon from "./RightIcon";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top-button fixed bottom-8 right-8 z-50 w-12 h-12 rounded-md flex items-center justify-center bg-[#ba9a67] text-white hover:bg-black transition-all duration-300 shadow-lg"
                    aria-label="Scroll to top"
                >
                    <RightIcon className="w-6 h-6 -rotate-90" />
                </button>
            )}
        </>
    );
}
