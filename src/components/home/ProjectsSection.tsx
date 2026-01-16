import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import RightIcon from "@/components/shared/RightIcon";
import projectStaircase from "/assets/project-staircase.jpg";
import projectKitchen from "/assets/project-kitchen.jpg";
import projectDining from "/assets/project-dining.jpg";
import projectBathroom from "/assets/project-bathroom.jpg";

const projects = [
  {
    id: 1,
    title: "Spiral Marble Staircase",
    image: "/assets/images/home/home-project-1.jpg",
    slug: "modern-spiral-staircase",
  },
  {
    id: 2,
    title: "Modern Kitchen Island",
    image: "/assets/images/home/home-project-2.jpg",
    slug: "contemporary-kitchen-island",
  },
  {
    id: 3,
    title: "Luxury Marble Dining",
    image: "/assets/images/home/home-project-3.jpg",
    slug: "elegant-dining-space",
  },
  {
    id: 4,
    title: "Modern Bathroom Vanity",
    image: "/assets/images/home/home-project-4.jpg",
    slug: "classic-marble-bathroom",
  },
  {
    id: 5,
    title: "Stone Wall Cladding",
    image: "/assets/images/home/home-project-5.jpg",
    slug: "boutique-hotel-park-lane",
  },
  {
    id: 6,
    title: "Marble Flooring",
    image: "/assets/images/home/home-project-6.jpg",
    slug: "minimalist-kitchen-design",
  },
  {
    id: 7,
    title: "Outdoor Patio",
    image: "/assets/images/home/home-project-7.jpg",
    slug: "luxury-living-room",
  },
  {
    id: 8,
    title: "Luxury Spa Design",
    image: "/assets/images/home/home-project-8.jpg",
    slug: "spa-bathroom-retreat",
  },
];

export default function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Triple the projects for infinite scroll effect
  const infiniteProjects = [...projects, ...projects, ...projects];

  // Track scroll position to update active dot
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.querySelector('.project-card')?.clientWidth || 555;
      const gap = 24; // 6 * 4px (gap-6)
      const slideIndex = Math.round(scrollLeft / (cardWidth + gap)) % projects.length;
      setActiveSlide(slideIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to specific slide when dot is clicked
  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.querySelector('.project-card')?.clientWidth || 555;
    const gap = 24;
    // Scroll to the middle set of projects (index + projects.length)
    const scrollPosition = (index + projects.length) * (cardWidth + gap);

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section className="pt-20 pb-10 lg:py-32 bg-background overflow-hidden">
      <div className="">
        {/* Header */}
        <div className="mb-12 container-luxury flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <SectionLabel text="OUR BEST PROJECTS" />
            <h2 className="heading-primary text-3xl md:text-5xl lg:text-[55px] font-bold mt-4 max-w-2xl text-center lg:text-left">
              Explore Our Selection Our Latest Projects
            </h2>
          </div>

          {/* Desktop Pagination Dots (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-3 h-3 transition-all ${index === activeSlide
                  ? 'bg-charcoal'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Projects Slider */}
        <div
          ref={scrollContainerRef}
          className="flex gap-2 lg:gap-6 overflow-x-auto pb-4 scrollbar-hide cursor-grab overflow-hidden active:cursor-grabbing px-6 lg:px-[60px]"
        >
          {infiniteProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-full md:w-[calc(50%-4px)] lg:w-[calc(33.333%-16px)] group relative project-card"
            >
              <div className="relative h-[350px] lg:h-[380px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6 lg:p-8">
                  <h3 className="text-white text-2xl lg:text-3xl font-bold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md text-[12.5px] font-bold uppercase border border-transparent text-white hover:bg-[#bd9e65] hover:text-white w-fit transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                  >
                    READ MORE
                    <span className="flex items-center justify-center w-6 h-6 bg-[#bd9e65] text-white rounded-[4px] transition-colors">
                      <RightIcon />
                    </span>
                  </Link>
                </div>

                {/* Mobile: Always visible title and button overlay on bottom */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:hidden bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-3xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase text-white hover:text-gold transition-colors"
                  >
                    READ MORE
                    <span className="flex items-center justify-center w-6 h-6 bg-[#bd9e65] text-white rounded-[4px]">
                      <RightIcon className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Pagination Dots (Shown below slider) */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-2 h-2 transition-all ${index === activeSlide
                ? 'bg-gray-800' // Darker active dot for visibility
                : 'bg-gray-200' // Lighter inactive dot
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
