import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import SectionLabel from '@/components/shared/SectionLabel';

const processData = [
    {
        id: "01",
        title: "Stone Block Processing",
        description: "Once mined and transported to the processing plant, the blocks are cut into slabs that form parallel cuts, revealing the hidden beauty within each block.",
        type: "text",
        variant: "white"
    },
    {
        id: "img1",
        image: "/assets/images/about/what-we-do-1.png",
        type: "image"
    },
    {
        id: "02",
        title: "Resin Treatment",
        description: "Resin treatment will fill any natural pores or cracks in the marble, making the slab harder and giving it a perfect finish.",
        type: "text",
        variant: "white"
    },
    {
        id: "03",
        title: "Stone Slab Finishing",
        description: "The slabs are then polished to create a smooth, polished surface. This process may include grinding, sanding, and polishing the marble surface.",
        type: "text",
        variant: "white"
    },
    {
        id: "04",
        title: "Cut Slab To Size",
        description: "The polished slabs are cut into specific dimensions based on customer requirements. This can include tiles, countertops, or custom architectural elements.",
        type: "text",
        variant: "white"
    },
    {
        id: "img2",
        image: "/assets/images/about/what-we-do-2.png",
        type: "image",
        grayscale: true
    }
];

const AboutProcessSection = () => {
    const sectionRef = useRef(null);


    // Stone animation - exactly matching AboutTestimonialsSection (Linear Parallax)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const stoneX = useTransform(scrollYProgress, [0, 1], [-200, 100]);

    return (
        <section ref={sectionRef} className="relative py-24 lg:py-32 bg-[#F9F6F2] overflow-hidden">
            {/* Decorative Background Circles */}
            <div className="absolute top-32 left-20 w-[250px] h-[250px] rounded-full bg-[#E8E4DF] opacity-40 blur-3xl pointer-events-none" />
            <div className="absolute top-10 right-32 w-[180px] h-[180px] rounded-full bg-[#D4CEC5] opacity-30 blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-1/3 w-[200px] h-[200px] rounded-full bg-[#E8E4DF] opacity-35 blur-3xl pointer-events-none" />

            <div className="container-luxury">

                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start mb-0">
                    {/* Left side with "Unit" watermark and Floating Stone */}
                    <div className="hidden lg:flex lg:col-span-5 relative min-h-[350px] items-center justify-center">
                        {/* "Unit" Watermark Background */}
                        <div className="hidden lg:flex absolute inset-0 items-start justify-start pointer-events-none select-none overflow-visible z-10">
                            <span
                                className="text-[220px] lg:text-[420px] font-bold text-[#E8E4DF] leading-none opacity-50 -ml-4 whitespace-nowrap"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, transparent 100%)'
                                }}
                            >
                                Unit
                            </span>
                        </div>

                        {/* Floating Stone with Bidirectional Scroll Animation */}
                        <motion.div
                            style={{ x: stoneX }}
                            className="relative z-10 hidden lg:block"
                        >
                            <img
                                src="/assets/images/about/about-hero-stone.jpg"
                                alt="Marble Stone"
                                className="w-[260px] lg:w-[300px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                            />
                        </motion.div>
                    </div>

                    {/* Right side - Header Text */}
                    <div className="lg:col-span-7 z-10">
                        {/* Label */}
                        <div className="flex justify-center lg:justify-start">
                            <SectionLabel text="WHAT WE DO" />
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-2xl md:text-4xl lg:text-[56px] font-bold text-[#1a1a1a] leading-[1.2] mb-8 tracking-tight text-center lg:text-left">
                            The Value Is In The Process <br /> For Exceptional.
                        </h2>

                        {/* Description */}
                        <p className="text-[#666666] max-w-2xl text-[15px] lg:text-[16px] mb-6 leading-relaxed text-center lg:text-left">
                            From the moment marble emerges from the earth's embrace, it begins a journey of transformation
                            guided by our innovative techniques and the skilled hands of our artisans who carefully
                            transform the raw stone into exquisite pieces.
                        </p>
                    </div>
                </div>

                {/* Process Grid - 3 Columns, 2 Rows */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processData.map((item, index) => (
                        <div key={item.id} className="min-h-[380px] group">
                            {item.type === "text" ? (
                                <div
                                    className={`h-full p-10 lg:p-12 flex flex-col justify-start transition-all duration-500 cursor-pointer ${item.variant === "gold"
                                        ? "bg-[#C4A574] text-white hover:bg-[#BA9A67]"
                                        : "bg-white text-[#1a1a1a] hover:bg-[#BA9A67]"
                                        }`}
                                >
                                    {/* Number */}
                                    <span className={`text-[60px] font-bold leading-none mb-24 transition-colors ${item.variant === "gold" ? "text-white/20" : "text-[#F0F0F0] group-hover:text-[#c6ad86]"
                                        }`}>
                                        {item.id}
                                    </span>

                                    {/* Title */}
                                    <h3 className={`text-[20px] lg:text-[28px] font-bold mb-2 transition-colors ${item.variant === "gold" ? "text-white" : "text-[#1a1a1a] group-hover:text-white"
                                        }`}>
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className={`text-[13px] lg:text-[16px] leading-relaxed transition-colors ${item.variant === "gold" ? "text-white/95" : "text-[#777777] group-hover:text-white"
                                        }`}>
                                        {item.description}
                                    </p>
                                </div>
                            ) : (
                                <div className="h-full overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt="Process Step"
                                        className={`w-full h-full object-cover transition-all duration-700  ${item.grayscale ? "grayscale group-hover:grayscale-0" : ""
                                            }`}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutProcessSection;