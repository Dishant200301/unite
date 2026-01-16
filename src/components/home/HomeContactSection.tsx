import React from "react";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

const HomeContactSection = () => {
    return (
        <section className="relative w-full">
            {/* Main Content Section */}
            <div className="relative w-full py-20 lg:py-32">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/images/home/contact-image.png"
                        alt="Marble Worker"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="container-luxury relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text */}
                        <div className="text-white max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                            <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight">
                                Come as You are And we Will Take Care of the Rest
                            </h2>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="bg-white p-8 md:p-12 lg:p-16 max-w-xl mx-auto lg:ml-auto w-full shadow-2xl">
                            <div className="flex justify-center lg:justify-start">
                                <SectionLabel text="COMMON QUESTIONS" />
                            </div>
                            <h3 className="text-2xl md:text-4xl font-bold text-[#1a1a1a] mb-10 leading-tight text-center lg:text-left">
                                Have Questions
                               
                                Get In Touch
                            </h3>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full border-b border-gray-200 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full border-b border-gray-200 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            placeholder="Enter your number"
                                            className="w-full border-b border-gray-200 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Project scope"
                                            className="w-full border-b border-gray-200 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Your message here"
                                        className="w-full border-b border-gray-200 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-transparent"
                                    />
                                </div>

                                <div className="flex justify-center lg:justify-start">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#333333] transition-colors"
                                    >
                                        SEND MESSAGE <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logos Section */}
            <div className="w-full bg-white border-b border-gray-100 py-12">
                <div className="container-luxury">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-between items-center gap-8 lg:gap-8 opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
                        <img src="/assets/images/home/brand-icon-1.jpg" alt="Brand 1" className="h-12 w-auto object-contain mx-auto lg:mx-0" />
                        <img src="/assets/images/home/brand-icon-2.jpg" alt="Brand 2" className="h-12 w-auto object-contain mx-auto lg:mx-0" />
                        <img src="/assets/images/home/brand-icon-3.jpg" alt="Brand 3" className="h-12 w-auto object-contain mx-auto lg:mx-0" />
                        <img src="/assets/images/home/brand-icon-4.jpg" alt="Brand 4" className="h-12 w-auto object-contain mx-auto lg:mx-0" />
                        <img src="/assets/images/home/brand-icon-5.jpg" alt="Brand 5" className="h-12 w-auto object-contain mx-auto lg:mx-0 col-span-2 md:col-span-1" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContactSection;
