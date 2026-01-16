

import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import RightIcon from "./RightIcon";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  return (
    <section className="pb-20 pt-0 lg:py-32 bg-white">
      <div className="container-luxury text-center">
        {/* TOP MICRO LABEL */}
        <div className="flex justify-center mb-2">
          <SectionLabel text="SUBSCRIBE TO THE NEWSLETTER" />
        </div>

        {/* MAIN HEADING */}
        <h2 className="text-3xl md:text-4xl lg:text-[64px] font-bold text-[#1a1a1a] leading-[1.1] mb-6 tracking-tight max-w-[800px] mx-auto">
          Do You Need Help <br/> Anything?
        </h2>

        {/* DESCRIPTION TEXT */}
        <p className="text-stone-gray text-[15px] leading-relaxed max-w-[520px] mx-auto mb-12">
          It's a well-known fact that readers can easily get distracted by the readable
          content on a page when focusing on its layout.
        </p>

        {/* EMAIL INPUT ROW */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center max-w-[520px] mx-auto"
        >
          <div className="relative w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address.."
              className="w-full bg-transparent border-b border-[#8c8c8c] py-4 pr-12 text-[15px] font-light text-charcoal placeholder:text-[#8c8c8c] focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="absolute right-0 bottom-3 w-[30px] h-[30px] bg-[#c5a47e] rounded-[2px] flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <RightIcon className="text-white"/>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
