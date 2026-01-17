import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import aboutMain from "/assets/about-main.jpg";

const awards = [
  { category: "LUXURY STONE EXPO", title: "Best New Building In Germany", year: "2024" },
  { category: "ARCHITECTURAL DESIGN", title: "Best Architectural Firm", year: "2023" },
  { category: "SUSTAINABLE STONE", title: "Excellence In Sustainability", year: "2022" },
  { category: "INNOVATION AWARD", title: "Community Impact Award", year: "2021" },
  { category: "HERITAGE DESIGN", title: "Lifetime Achievement Award", year: "2020" },
  { category: "CRAFTSMANSHIP", title: "Grand Award Winner", year: "2019" },
];

export default function AwardsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:hidden lg:block lg:col-span-4"
          >
            <img
              src="/assets/images/home/Awards.jpg"
              alt="Showroom"
              className="w-full h-[310px] object-cover mb-6"
            />
            <h3 className="heading-secondary mb-4 font-bold">
              Enhance Your Space With Timeless Elegance!
            </h3>
            <p className="text-body">
              Marble & Tiles has been recognized for the quality and craftsmanship
              that defines our natural stone collections for luxury interiors.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="flex justify-center md:justify-start">
              <SectionLabel text="AWARDS AND RECOGNITION" />
            </div>
            <h2 className="heading-primary text-2xl md:text-4xl mt-4 mb-8 font-bold max-w-[580px] text-center md:text-left mx-auto md:mx-0">
              Design That Speaks Our Industry Awards
            </h2>

            {/* Awards List */}
            <div className="space-y-0">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative border-t border-border py-6 cursor-pointer transition-colors ${hoveredIndex === index ? "bg-cream" : ""
                    }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 text-center md:text-left">
                    <span className="text-stone-gray text-[12px] uppercase tracking-wide w-full md:w-[180px] font-bold flex-shrink-0">
                      {award.category}
                    </span>
                    <span className="text-charcoal font-inter text-[18px] lg:text-[22px] font-bold flex-1">
                      {award.title}
                    </span>
                    <span className="text-stone-gray text-[15px] font-bold">
                      {award.year}
                    </span>
                  </div>

                  {/* Hover Card */}
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute right-32 top-1/2 -translate-y-1/2 translate-x-full w-[150px] h-[200px] hidden xl:block z-10"
                    >
                      <img
                        src="/assets/images/home/hober-Awards.jpg"
                        alt="Award Winner"
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
