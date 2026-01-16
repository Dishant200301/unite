import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

const testimonials = [
  {
    id: 1,
    name: "Alex Martin",
    image: "/assets/images/home/testimonial-1.jpg",
    content:
      "Extremely helpful team. Understood the requirements very well and provided dedicated support in selecting design of tiles. The prices of the Marble & Tiles were better than all the places where I checked.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ryan Archer",
    image: "/assets/images/home/testimonial-2.jpg",
    content:
      "Outstanding quality and professional service. The installation team was meticulous and the final result exceeded our expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Alina Blake",
    image: "/assets/images/home/testimonial-3.jpg",
    content:
      "The marble selection process was seamless. Their expertise helped us choose the perfect stone for our luxury bathroom renovation.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const topLeftX = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const bottomRightX = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-[#f9f9f9]">
      {/* Watermark Container - Clipped to section bounds */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 -top-[100px] flex items-center justify-start">
          <h2
            className="text-[180px] lg:text-[380px] font-bold text-[#dfdfdf] leading-none select-none opacity-40 ml-[-50px]"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
            }}
          >
            clients
          </h2>
        </div>
      </div>

      {/* Top-left decorative stone image with parallax - ALLOWED TO OVERFLOW */}
      <motion.img
        style={{ x: topLeftX }}
        src="/assets/images/about/testionial-top-left.jpg"
        alt=""
        className="absolute left-[50px] -top-[120px] w-[200px] lg:w-[350px] opacity-100 hidden lg:block z-10 rotate-[15deg]"
      />

      {/* Bottom-right decorative stone image with parallax - ALLOWED TO OVERFLOW */}
      <motion.img
        style={{ x: bottomRightX }}
        src="/assets/images/home/testimonial-boottom-right.jpg"
        alt=""
        className="absolute right-[50px] -bottom-[120px] w-[200px] lg:w-[350px] opacity-100 hidden lg:block z-10"
      />

      <div className="container-luxury relative z-20">
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel text="OUR TESTIMONIAL" />
            <h2 className="heading-primary font-bold mt-4 max-w-3xl mx-auto">
              Here's What Warm Words<br />Our Clients Say
            </h2>
          </motion.div>
        </div>

        {/* Main Quote - Centered Full Width */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xl md:text-2xl lg:text-[22px] font-normal leading-[1.6] text-charcoal max-w-[900px] mx-auto">
            “{testimonials[0].content}”
          </p>
        </motion.blockquote>

        {/* Client Avatars - Centered Full Width */}
        <div className="flex justify-center gap-8 lg:gap-16 flex-wrap">
          {testimonials.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 lg:w-[130px] lg:h-[130px] mb-4 overflow-hidden shadow-sm">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-[#262525] text-[16px] font-bold uppercase tracking-wider">
                {client.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
