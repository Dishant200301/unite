import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RightIcon from "@/components/shared/RightIcon";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[550px] md:min-h-[800px] max-h-[1000px] overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-marble.jpg"
          alt="Luxury marble interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Large "Marble" Watermark Text - Behind Stone */}
      <div className="absolute inset-0 hidden lg:flex items-end justify-center pointer-events-none select-none mr-[250px] w-1/2 mx-auto" style={{ zIndex: 5 }}>
        <span
          className="text-[320px] xl:text-[420px] 2xl:text-[350px] font-[600] leading-none tracking-tight"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            whiteSpace: "nowrap",
          }}
        >
          Marble
        </span>
      </div>

      {/* Marble Stone - Centered, Overlapping Both Sections */}
      <img
        src="/assets/images/home/home-hero-stone.jpg"
        alt=""
        className="hidden lg:block absolute -bottom-[140px] lg:-bottom-[200px] xl:-bottom-[160px] left-1/2 -translate-x-1/2 w-[320px] lg:w-[480px] xl:w-[350px] z-40 drop-shadow-2xl"
      />

      {/* Content */}
      <div className="relative h-full container-luxury flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl"
        >
          <h1 className="heading-hero mb-6 mt-16 md:mt-0 font-bold">
            Luxury Of Marble Stone
            For Modern Design
          </h1>
          <p className="text-white text-[18px] md:text-[18px] font-bold leading-[26px] md:leading-[28px] max-w-[320px] md:max-w-[416px] mb-8">
            Transform your environment with our exquisite range of high-quality
            marble, crafted to Perfection
          </p>
          <Link to="/about" className="btn-gold text-[16px] font-bold ">
            READ MORE
            <RightIcon />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
