import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import SectionLabel from "@/components/shared/SectionLabel";
import RightIcon from "../shared/RightIcon";

const features = [
  "High Gloss Finish for Added Shine",
  "Durability Against Wear and Tear",
  "Slip-Resistant When Honed",
];

export default function AboutSection() {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const counterRefMobile = useRef(null);
  const isInView = useInView(counterRef, { once: true });
  const isInViewMobile = useInView(counterRefMobile, { once: true });

  useEffect(() => {
    if (!isInView && !isInViewMobile) return;

    let start: number | null = null;
    const duration = 2000;
    const end = 25;

    const animate = (time: number) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(end * (1 - Math.pow(1 - progress, 4))));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, isInViewMobile]);

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-12 lg:gap-0 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-6">

            <SectionLabel text="OUR ABOUT US" />

            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1] mt-6 mb-8 max-w-[640px]">
              Marble Supplier & Natural Stone Project
            </h2>

            {/* Mobile image (reference shows image BEFORE text) */}
            <img
              src="/assets/images/home/home-about-us-left-side-image.jpg"
              alt=""
              className="w-full h-[240px] object-cover mb-6 sm:hidden"
            />

            <p className="text-[#666] text-[15px] md:text-[18px] leading-relaxed max-w-xl mb-6">
              Unita tiles, founded in 1998, is a professional and leading manufacturer
              and Provider for natural stone products, including granites, marbles,
              slates, sandstones and lime stones from and abroad.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-black mt-2" />
                  <span className="font-bold text-[15px] md:text-[18px]">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#222] text-white px-8 py-4 font-bold text-sm hover:bg-black"
            >
              MORE ABOUT US
              <RightIcon />
            </Link>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-5 relative">

            {/* EXPERIENCE COUNTER — mobile FIRST */}
            <div ref={counterRefMobile} className="block lg:hidden text-center mt-16">
              <div className="text-[#BD9E65] text-[96px] font-bold leading-none">
                {count}+
              </div>
              <p className="font-bold text-lg">Years Of Experience</p>
            </div>

            {/* TILE GRID — mobile */}
            <img
              src="/assets/images/home/home-about-us-right-side-image-1.jpg"
              alt=""
              className="w-full mt-10 lg:hidden"
            />

            {/* MAIN IMAGE — mobile */}
            <img
              src="/assets/images/home/home-about-us-right-side-image-2.jpg"
              alt=""
              className="w-full mt-10 lg:hidden"
            />

            {/* DESKTOP ONLY */}
            <div className="hidden lg:flex items-start gap-10">

              {/* COUNTER */}
              <motion.div
                ref={counterRef}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <div className="text-[#BD9E65] text-[140px] font-bold leading-none">
                  {count}+
                </div>
                <p className="font-bold text-xl">Years Of Experience</p>
              </motion.div>

              {/* MAIN IMAGE */}
              <img
                src="/assets/images/home/home-about-us-right-side-image-2.jpg"
                alt=""
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            {/* TILE GRID — desktop overlap */}
            <img
              src="/assets/images/home/home-about-us-right-side-image-1.jpg"
              alt=""
              className="hidden lg:block absolute -bottom-16 left-0 max-w-[420px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}