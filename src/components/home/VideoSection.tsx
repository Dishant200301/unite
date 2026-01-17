import { useState, useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { X } from "lucide-react";
import marbleWarehouse from "/assets/images/home/video-bg-image.png";

const stats = [
  { number: 100, label: "Projects Completed", suffix: "+" },
  { number: 230, label: "Satisfied Clients", suffix: "+" },
  { number: 25, label: "Year Of Experience", suffix: "+" },
];

// Counter Animation

function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;
    let animationFrameId: number;

    const animate = (time: number) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      {/* VIDEO HERO */}
      <section className="relative h-[520px] sm:h-[600px] md:h-[650px] lg:h-[900px] overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={marbleWarehouse}
            alt="Marble warehouse interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 top-[-60px] md:top-0 flex items-center justify-center z-20">
          <motion.button
            onClick={() => setIsVideoOpen(true)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] rounded-full bg-[#a6a6a2] hover:bg-[#ba9a67] transition-colors flex items-center justify-center"
          >
            <span className="text-[16px] md:text-[18px] font-bold text-white">
              Play
            </span>
          </motion.button>
        </div>

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center leading-none font-bold tracking-[-0.02em]"
          >
            <div className="text-white/40 text-[70px] sm:text-[100px] md:text-[120px] lg:text-[260px]">
              Marble &
            </div>
            <div className="text-white/15 text-[70px] sm:text-[100px] md:text-[120px] lg:text-[260px]">
              Tiles
            </div>
          </motion.div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/60 via-black/40 to-transparent pointer-events-none" />

        {/* STATS BAR */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-b border-gray-200">
          <div className="container-luxury">
            <div className="grid grid-cols-1 md:grid-cols-3 ">

              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    flex flex-col items-center justify-center
                    py-6 md:py-6
                    ${index < stats.length - 1 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}
                  `}
                >
                  <div className="text-[32px] sm:text-[64px] md:text-[70px] lg:text-[80px] font-bold text-[#2a2a2a] leading-none">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>

                  <p className="mt-1 md:mt-2 text-[12px] md:text-[15px] lg:text-[16px] font-bold text-[#6b6b6b] text-center max-w-[160px] leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl mx-4 aspect-video bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 md:top-4 md:right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <iframe
              src="https://www.youtube.com/embed/oH2ukrQAXPg?autoplay=1"
              title="Marble & Tiles Showcase Video"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
