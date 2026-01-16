import { motion } from "framer-motion";
import { ChevronsUp } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Stone Block Processing",
    description:
      "Once mined and transported to the processing plant, the blocks are cut into slabs creating parallel cuts, revealing the hidden beauty within each block.",
  },
  {
    number: "02",
    title: "Resin Treatment",
    description:
      "A resin treatment fills any natural pores or cracks in the marble, strengthening the slab and providing a flawless finish.",
  },
  {
    number: "03",
    title: "Stone Slab Finishing",
    description:
      "The slabs are then polished to create a smooth, glossy finish. This process may involve grinding, sanding, and buffing the surface of the marble.",
  },
  {
    number: "04",
    title: "Cut Slab To Size",
    description:
      "The polished slabs are cut into specific dimensions based on customer requirements. This can include tiles, countertops, or custom architectural elements.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-10 lg:py-32 bg-white relative overflow-hidden">
      <div className="container-luxury relative z-10">

        {/* Top Section: Unit Watermark + Tiles + Heading */}
        <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-20 items-start mb-12 lg:mb-24">

          {/* LEFT: Unit watermark + floating tiles - Hidden on mobile as per reference flow */}
          <div className="hidden lg:block relative min-h-[360px]">

            {/* Unit Watermark with bottom gradient fade */}
            <div className="hidden lg:block absolute -top-[0px] -left-[40px] pointer-events-none select-none z-0">
              <span
                className="text-[200px] lg:text-[450px] font-bold leading-none"
                style={{
                  color: "#EDEDED",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)",
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)",
                }}
              >
                Unit
              </span>
            </div>

            {/* Floating stack of tiles (top-right of Unit) */}
            <motion.img
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              src="/assets/images/home/what-we-do-left-side -image.jpg"
              alt="Marble Tiles Stack"
              className="
        absolute
        top-[40px]
        left-[300px]
        lg:left-[360px]
        w-[180px]
        lg:w-[260px]
        object-contain
        z-10
      "
            />
          </div>

          {/* RIGHT: Content (60%) */}
          <div className="relative z-10 pt-10">
            <div className="flex justify-center lg:justify-start">
              <SectionLabel text="WHAT WE DO" />
            </div>

            <h2 className="text-[32px] sm:text-[40px] lg:text-[65px] leading-[1.1] tracking-[-0.06em] font-[700] text-[#1a1a1a] mt-6 mb-8 text-center lg:text-left">
              The Value Is In The Process
              <br />
              For Exceptional.
            </h2>

            <p className="text-[#666] text-[15px] lg:text-[18px] leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              From the moment marble emerges from the earth's embrace, it begins a journey
              of transformation guided by our innovative techniques and the skilled hands
              of our artisans who carefully transform the raw stone into exquisite pieces.
            </p>
          </div>
        </div>


        {/* Bottom Section: Steps List & Large Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-start">

          {/* Left: Process Steps List */}
          <div className="space-y-0 ">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-0 lg:gap-6 pb-8 border-t border-[#E5E5E5] last:border-b last:border-[#E5E5E5] cursor-pointer hover:bg-gray-50/50 transition-colors px-2 pt-4 lg:pt-0"
              >
                {/* Number Box */}
                <div className="w-[60px] h-[60px] bg-black text-white group-hover:bg-[#ba9a67] transition-colors duration-300 flex items-center justify-center text-[24px] font-bold flex-shrink-0 mb-6 lg:mb-0 lg:mt-0">
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-0 lg:mt-4">
                  <h3 className="text-[28px] font-bold text-[#1a1a1a] group-hover:text-[#ba9a67] transition-colors duration-300 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#666] text-[18px] leading-relaxed line-clamp-3 max-w-md mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Large Image & Floating Slab */}
          <div className="relative mt-0 lg:mt-0 px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/assets/images/home/what-we-do-right-side -image-1.jpg"
                alt="Factory Processing"
                className="w-full h-[300px] lg:h-[650px] object-cover"
              />
            </motion.div>

            {/* Floating Slab at Bottom Right - With Arrow Button */}
            <div className="hidden lg:block absolute -bottom-24 -right-36 z-20">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <img
                  src="/assets/images/home/what-we-do-right-side -image-2.jpg"
                  alt="Raw Stone Slab"
                  className="w-[280px] lg:w-[500px] object-contain drop-shadow-2xl"
                />

              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
