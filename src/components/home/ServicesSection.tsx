import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Box,
  Grid3x3,
  Scissors,
  Building2,
  Layers,
  Hammer,
  Paintbrush,
  Settings,
} from "lucide-react";
import { useState, useRef } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import { services } from "@/data/services";
import RightIcon from "../shared/RightIcon";

/* Icon mapping */
const getServiceIcon = (iconName: string) => {
  const icons: { [key: string]: any } = {
    boxes: Box,
    grid: Grid3x3,
    scissors: Scissors,
    building: Building2,
    layers: Layers,
    hammer: Hammer,
    brush: Paintbrush,
    settings: Settings,
  };
  return icons[iconName] || Box;
};

export default function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  /* Drag scroll handlers */
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollContainerRef.current.scrollLeft = scrollLeft - (x - startX) * 2;
  };

  const stopDragging = () => setIsDragging(false);

  const infiniteServices = [...services, ...services, ...services];

  return (
    <section className="bg-light-gray py-20 lg:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%221%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      <div className="relative z-10">
        {/* HEADER */}
        <div className="container-luxury mb-10">
          {/* Desktop: Button next to heading */}
          <div className="flex flex-col items-center lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col items-center lg:items-start w-full">
              <div className="flex justify-center lg:justify-start w-full">
                <SectionLabel text="WHAT WE OFFER" />
              </div>
              <h2 className="heading-primary font-bold mt-4 text-2xl text-center lg:text-left md:text-3xl lg:text-6xl max-w-xl">
                Providing The Best
                <br />
                Marble Services
              </h2>
            </div>

            <Link
              to="/services"
              className="btn-primary mt-6 lg:mt-0 inline-flex items-center gap-2 font-bold mb-2 whitespace-nowrap"
            >
              SEE MORE SERVICES
              <RightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>



        {/* SERVICES SCROLLER */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="
              flex gap-6 overflow-x-auto scrollbar-hide
              pl-6 sm:pl-6 lg:pl-[4.5rem]
              pr-4 sm:pr-6 lg:pr-[5rem]
              py-4 md:py-0 overflow-hidden
              cursor-grab active:cursor-grabbing
            "
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            style={{
              scrollBehavior: isDragging ? "auto" : "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {infiniteServices.map((service, index) => {
              const IconComponent = getServiceIcon(service.icon);

              return (
                <motion.div
                  key={`${service.id}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: (index % 5) * 0.1 }}
                  className="
                    flex-shrink-0
                    w-[280px] sm:w-[320px] lg:w-[380px]
                    card-service group select-none overflow-hidden
                  "
                >
                  <Link
                    to={`/services/${service.slug}`}
                    draggable="false"
                    onClick={(e) => isDragging && e.preventDefault()}
                    className="flex flex-col h-full"
                  >
                    {/* Image */}
                    <div className="relative h-[200px] lg:h-[260px] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        draggable="false"
                      />
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-charcoal" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6 bg-white flex-1 overflow-hidden">
                      <span className="absolute top-4 right-4 text-[70px] font-light text-light-gray leading-none select-none">
                        {service.number}
                      </span>

                      <h3 className="text-[26px] lg:text-[30px] font-bold mb-3 line-clamp-2">
                        {service.title}
                      </h3>

                      <p className="text-[15px] lg:text-[16px] mb-4 line-clamp-2">
                        {service.description}
                      </p>

                      <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md text-[12.5px] font-bold uppercase transition-all duration-300 border border-transparent group-hover:bg-[#ba9a67] group-hover:text-white text-[#1a1a1a]">
                        READ MORE
                        <span className="flex items-center justify-center w-6 h-6 bg-[#ba9a67] text-white rounded-[4px] transition-colors">
                          <RightIcon className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scrollbar hide */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; }
      `}</style>
    </section>
  );
}
