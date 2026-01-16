import { useRef } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import heroImage from "/assets/hero-marble.jpg";

const stones = [
  { name: "Marble Aretusa", image: "/assets/images/home/home-stone-image-1.jpg" },
  { name: "Quartz", image: "/assets/images/home/home-stone-image-2.jpg" },
  { name: "Dione Spider", image: "/assets/images/home/home-stone-image-3.jpg" },
  { name: "Travertine", image: "/assets/images/home/home-stone-image-4.jpg" },
  { name: "Dione Nuvolato", image: "/assets/images/home/home-stone-image-5.jpg" },
  { name: "Granite", image: "/assets/images/home/home-stone-image-6.jpg" },
  { name: "Dione White", image: "/assets/images/home/home-stone-image-7.jpg" },
  { name: "Limestone", image: "/assets/images/home/home-stone-image-8.jpg" },
  { name: "Onyx", image: "/assets/images/home/home-stone-image-9.jpg" },
  { name: "Slate", image: "/assets/images/home/home-stone-image-10.jpg" },
];

export default function StonesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-20 lg:py-32 min-h-[700px] lg:min-h-[748px]">
      {/* Background */}
      <div className="absolute inset-0 ">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative container-luxury">
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-20 mb-12 lg:mb-20">
          {/* Brand Mark */}


          {/* Header */}
          <div>
            <SectionLabel text="CHOOSE YOUR STONE" light />
            <h2 className="text-3xl md:text-5xl lg:text-[70px] text-center md:text-left leading-[1.1] font-[600] tracking-[-1.44px] text-white mt-4 max-w-6xl">
              Beauty from the Earth a collection of timeless elegance and beauty
            </h2>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-12" />

        {/* Stone Slider */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Duplicate items for infinite scroll effect */}
          {[...stones, ...stones].map((stone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
              className="flex-shrink-0 w-[160px] lg:w-[180px]"
            >
              <div className="w-full aspect-square mb-4 overflow-hidden">
                <img
                  src={stone.image}
                  alt={stone.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform "
                />
              </div>
              <h3 className="text-white text-[18px] lg:text-[23px] font-light tracking-[-0.48px]">
                {stone.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
