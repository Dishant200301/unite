import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionLabel from '@/components/shared/SectionLabel';

const testimonials = [
    {
        id: 1,
        name: "Ryan Archer",
        company: "Company owner",
        image: "/assets/images/home/testimonial-1.jpg",
        text: "Extremely helpful team. Understood the requirements very well and provided dedicated support in selecting design of tiles. The prices of the Marble & Tiles were better than all the places where I checked.",
        rating: 5
    },
    {
        id: 2,
        name: "Alina Blake",
        company: "Company owner",
        image: "/assets/images/home/testimonial-2.jpg",
        text: "They have purely good collection of stone. Well organized in the showroom. Could be better if they have some real or virtual bathroom models with their own stone.",
        rating: 5
    },
    {
        id: 3,
        name: "Alex Martin",
        company: "Company owner",
        image: "/assets/images/home/testimonial-3.jpg",
        text: "Extremely helpful team. Understood the requirements very well and provided dedicated support in selecting design of tiles. The prices of the Marble & Tiles were better than all the places where I checked.",
        rating: 5
    },
    {
        id: 4,
        name: "Ryan Archer",
        company: "Company owner",
        image: "/assets/images/home/testimonial-1.jpg",
        text: "Extremely helpful team. Understood the requirements very well and provided dedicated support in selecting design of tiles. The prices of the Marble & Tiles were better than all the places where I checked.",
        rating: 5
    },
    {
        id: 5,
        name: "Alina Blake",
        company: "Company owner",
        image: "/assets/images/home/testimonial-2.jpg",
        text: "They have purely good collection of stone. Well organized in the showroom. Could be better if they have some real or virtual bathroom models with their own stone.",
        rating: 5
    }
];

const AboutTestimonialsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    // Parallax transforms using framer-motion
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const topLeftX = useTransform(scrollYProgress, [0, 1], [-200, 100]); // Moves from left to right gently

    // Handle scroll to update active index
    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const firstCard = container.children[0] as HTMLElement;
        if (!firstCard) return;

        const itemWidth = firstCard.offsetWidth + 24; // width + gap
        const scrollPosition = container.scrollLeft;

        const index = Math.round(scrollPosition / itemWidth);
        setActiveIndex(index % testimonials.length);
    };

    // Mouse drag for horizontal scroll
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
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    // Triple the testimonials for infinite scroll effect
    const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <section ref={sectionRef} className="py-20 bg-[#F6F6F6] relative">
            {/* Watermark Container - Clipped to section bounds */}
            <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 -top-[500px] flex items-center justify-start">
                    <h2
                        className="text-[180px] lg:text-[300px] font-bold text-[#dfdfdf] leading-none select-none"
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
                className="absolute left-[250px] -top-[160px] w-[300px] lg:w-[400px] opacity-100 hidden lg:block z-10 rotate-[15deg]"
            />

            <div className="relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
                    {/* Left Column - Empty for watermark */}
                    <div className="hidden lg:block h-[150px]"></div>

                    {/* Right Column - Header Only */}
                    <div>
                        {/* Header - Left Aligned */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center lg:text-left"
                        >
                            <div className="flex justify-center lg:justify-start">
                                <SectionLabel text="OUR TESTIMONIAL" />
                            </div>
                            <h2 className="text-[26px] md:text-[36px] lg:text-[55px] leading-[1.2] tracking-[-1px] font-bold text-[#262525] mb-3">
                                Client Feedback And<br />Success Stories
                            </h2>
                            <p className="text-[14px] md:text-[16px] lg:text-[16px] text-[#262525] font-bold max-w-2xl mx-auto lg:mx-0">
                                Exceptional Service, Unbeatable Quality<br />Your Trusted Choice!
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Testimonials Carousel - Horizontal scroll with cursor */}
                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide py-8 cursor-grab active:cursor-grabbing"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                        onScroll={handleScroll}
                        style={{
                            scrollBehavior: isDragging ? 'auto' : 'smooth',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {infiniteTestimonials.map((testimonial, index) => (
                            <div
                                key={`${testimonial.id}-${index}`}
                                className="flex-shrink-0 w-[320px] lg:w-[450px] bg-white rounded-none p-10 transition-all duration-300 select-none flex flex-col justify-between"
                            >
                                <div>
                                    {/* Profile */}
                                    <div className="flex items-center gap-5 mb-8">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-[70px] h-[70px] object-cover"
                                            draggable="false"
                                        />
                                        <div>
                                            <h4 className="text-[20px] font-bold text-[#262525] leading-tight">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-[16px] text-[#666] font-normal mt-0">
                                                {testimonial.company}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-[18px] leading-[28px] text-[#262525] font-normal mb-8">
                                        "{testimonial.text}"
                                    </p>
                                </div>

                                {/* Star Rating */}
                                <div className="flex gap-1.5">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 fill-[#FFB800]"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots - Square shaped */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (scrollContainerRef.current) {
                                    const firstCard = scrollContainerRef.current.children[0] as HTMLElement;
                                    const itemWidth = firstCard.offsetWidth + 24;
                                    scrollContainerRef.current.scrollTo({
                                        left: itemWidth * index,
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                            className={`transition-all duration-300 ${index === activeIndex
                                ? 'w-2.5 h-2.5 bg-[#262525]'
                                : 'w-2.5 h-2.5 bg-[#D9D9D9]'
                                }`}
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
};

export default AboutTestimonialsSection;
