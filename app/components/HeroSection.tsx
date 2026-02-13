import React from 'react';
import CTAButton from './CTAButton';
import HeroRightPanel from './HeroRightPanel';

const HeroSection = () => {
    return (
        <section className="relative w-full bg-[#FAFAFA] overflow-hidden pt-12 pb-10 md:pt-24 md:pb-16">
            <div className="container mx-auto px-6 lg:px-12 max-w-[1300px]">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                    {/* Left Content - Copy & Direct Response - WIDER for 3-Line Headline */}
                    <div className="lg:w-[58%] text-center lg:text-left z-10">
                        {/* Urgency / Authority Badge */}
                        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-8 animate-fadeIn">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span className="text-red-600 font-bold text-xs uppercase tracking-wider">
                                New Cohort Starting Soon
                            </span>
                        </div>

                        {/* Main Headline - Problem/Solution Oriented */}
                        <h1 className="font-montserrat font-black text-[#1f2937] text-3xl md:text-3xl lg:text-[1.85rem] xl:text-[2.5rem] 2xl:text-[3rem] leading-[1.2] mb-8 tracking-tight">
                            <span className="whitespace-nowrap">Launch Your <span className="text-[#ff6b00]">High-Paying</span></span> <br className="hidden lg:block" />
                            <span className="text-[#ff6b00] whitespace-nowrap">Cybersecurity Career</span> <br className="hidden lg:block" />
                            In 90 Days...
                        </h1>

                        {/* Subheadline - Immediate Objection Handling */}
                        <h2 className="text-[#4b5563] text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            <span className="block mb-2">Even if you have <span className="text-[#1f2937] font-bold bg-[#ff6b00]/10 px-1 rounded-sm">Zero IT Experience</span> or <span className="text-[#1f2937] font-bold bg-[#ff6b00]/10 px-1 rounded-sm">No Technical Degree</span>.</span>
                            Master practical hacking skills & get hired.
                        </h2>

                        {/* CTA Area */}
                        <div className="flex flex-col items-center lg:items-start gap-6 mb-6 w-full">
                            <CTAButton />
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs md:text-sm text-[#555] font-medium">
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                                    100% Placement Assistance
                                </span>
                                <span className="hidden sm:inline text-gray-300">|</span>
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                                    Global Certifications
                                </span>
                                <span className="hidden sm:inline text-gray-300">|</span>
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ff6b00] shadow-[0_0_8px_rgba(255,107,0,0.6)] animate-pulse"></span>
                                    EMI Options Available
                                </span>
                            </div>
                        </div>

                        {/* Social Proof - Trust Indicators */}
                        <div className="pt-8 border-t border-gray-200">
                            <p className="text-xs uppercase tracking-widest text-[#888] font-bold mb-4">Trusted by 500+ Alumni Working At:</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                                {['GOOGLE', 'MICROSOFT', 'DELOITTE', 'INFOSEC', 'HCL'].map((company, i) => (
                                    <span key={i} className="text-xl font-bold text-[#b0b0b0] hover:text-[#555] cursor-default">{company}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Visual/Animation - COMPACT */}
                    <div className="lg:w-[42%] w-full relative mt-12 lg:mt-0 flex flex-col justify-center items-center">
                        <HeroRightPanel />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
