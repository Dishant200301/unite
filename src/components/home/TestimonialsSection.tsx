import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";

const testimonials = [
  {
    id: 1,
    name: "Alex Martin",
    image: "/assets/images/home/testimonial-1.jpg",
    content:
      "Extremely helpful team. Understood the requirements very well and provided dedicated support in selecting design of tiles. The prices of the Marble & Tiles were better than all the places where I checked.",
  },
  {
    id: 2,
    name: "Ryan Archer",
    image: "/assets/images/home/testimonial-2.jpg",
    content:
      "Outstanding quality and professional service. The installation team was meticulous and the final result exceeded our expectations.",
  },
  {
    id: 3,
    name: "Alina Blake",
    image: "/assets/images/home/testimonial-3.jpg",
    content:
      "The marble selection process was seamless. Their expertise helped us choose the perfect stone for our luxury bathroom renovation.",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const topLeftX = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const bottomRightX = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f9f9f9] py-20 lg:py-32 overflow-hidden"
    >
      {/* WATERMARK – DESKTOP ONLY */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="absolute -top-[120px] left-[-60px]">
          <h2
            className="text-[380px] font-bold text-[#dfdfdf] opacity-40 leading-none select-none"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
            }}
          >
            clients
          </h2>
        </div>
      </div>

      {/* DECORATIVE STONES – DESKTOP ONLY */}
      <motion.img
        style={{ x: topLeftX }}
        src="/assets/images/about/testionial-top-left.jpg"
        alt=""
        className="hidden lg:block absolute left-[40px] -top-[120px] w-[350px] z-10 rotate-[15deg]"
      />

      <motion.img
        style={{ x: bottomRightX }}
        src="/assets/images/home/testimonial-boottom-right.jpg"
        alt=""
        className="hidden lg:block absolute right-[40px] -bottom-[120px] w-[350px] z-10"
      />

      {/* CONTENT */}
      <div className="container-luxury relative z-20">
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center">
            <SectionLabel text="OUR TESTIMONIAL" />
          </div>
          <h2 className="heading-primary font-bold mt-4 max-w-[760px] mx-auto">
            Here's What Warm Words
            <br />
            Our Clients Say
          </h2>
        </div>

        {/* QUOTE */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <p className="text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.6] text-charcoal max-w-[680px] sm:max-w-[760px] mx-auto">
            “{testimonials[0].content}”
          </p>
        </motion.blockquote>

        {/* AVATARS */}
        <div className="flex justify-center gap-6 sm:gap-10 lg:gap-16">
          {testimonials.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-[72px] h-[72px] sm:w-[90px] sm:h-[90px] lg:w-[130px] lg:h-[130px] mb-3 overflow-hidden">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-[#262525] text-[14px] sm:text-[15px] lg:text-[16px] font-bold uppercase tracking-wide">
                {client.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
