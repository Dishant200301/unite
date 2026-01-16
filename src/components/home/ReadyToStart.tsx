import React from "react";
import { Link } from "react-router-dom";
import RightIcon from "../shared/RightIcon";

const ReadyToStart = () => {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div className="container-luxury relative py-20 lg:pt-6 lg:pb-20">

                {/* --- MOBILE VIEW (Matches Reference) --- */}
                <div className="block lg:hidden">
                    {/* Heading with Top/Bottom Borders */}
                    <div className="w-full border-t border-gray-200 py-8 border-b mb-12">
                        <h2 className="text-center font-bold text-[#1a1a1a] text-[34px] md:text-[45px] lg:text-[45px] leading-[0.9] tracking-tighter">
                            Ready To Start?
                        </h2>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-center text-center px-4">
                        <p className="font-normal text-[#4a4a4a] text-[18px] leading-[1.6] max-w-[320px] mb-10">
                            Shaping visions into reality. From branding to production, we create experiences that resonate.
                        </p>

                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-3 bg-[#262525] px-8 py-4 w-auto"
                        >
                            <span className="font-bold text-white text-[13px] uppercase tracking-wider">
                                VIEW ALL PROJECTS
                            </span>
                            <span className="text-white text-[14px] font-bold">
                                &raquo;
                            </span>
                        </Link>
                    </div>
                </div>


                {/* --- DESKTOP VIEW (Preserved Original) --- */}
                <div className="hidden lg:block">
                    {/* Heading */}
                    <h2 className="text-center font-vend font-bold text-[#262525] text-[clamp(56px,10vw,133px)] leading-[0.86] tracking-[-0.02em]">
                        Ready To Start?
                    </h2>

                    {/* Content Row */}
                    <div className="mt-12 flex flex-col items-center text-center">
                        <p className="font-vend font-light text-left ml-0 lg:ml-28 text-[#262525] text-[18px] leading-[24px] max-w-[400px] mb-10 line-clamp-2">
                            We're here to help you bring your vision to life. Contact our expert team for a personalized quote.
                        </p>

                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 bg-[#262525] px-8 py-[18px]"
                        >
                            <span className="font-vend font-bold text-white text-[14px] uppercase tracking-wide">
                                Contact Us For Quote
                            </span>
                            <RightIcon className="text-white" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default ReadyToStart;
