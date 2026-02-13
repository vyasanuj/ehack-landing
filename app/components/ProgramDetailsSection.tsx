'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programs = [
    {
        name: "Masterclass",
        highlight: false,
        details: {
            startDate: "5th of Every Month",
            duration: "4 Months",
            mode: "Classroom + Live Online",
            hours: "100+ Hours",
            membership: "6 Months Membership",
            certifications: "3 Global Certifications"
        }
    },
    {
        name: "Graduate",
        highlight: true,
        details: {
            startDate: "5th of Every Month",
            duration: "7-9 Months",
            mode: "Classroom + Live Online",
            hours: "200+ Hours",
            membership: "2 Years",
            certifications: "2 Global Certifications"
        }
    },
    {
        name: "Masters",
        highlight: false,
        details: {
            startDate: "5th of Every Month",
            duration: "9-12 Months",
            mode: "Classroom + Live Online",
            hours: "300+ Hours",
            membership: "2 Years Support",
            certifications: "6 Global Certifications"
        }
    }
];

const rows = [
    { label: "Start Date", key: "startDate" },
    { label: "Duration", key: "duration" },
    { label: "Mode", key: "mode" },
    { label: "Total Hours", key: "hours" },
    { label: "Membership", key: "membership" },
    { label: "Global Certification", key: "certifications" },
];

export default function ProgramDetailsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const tableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(tableRef.current, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: tableRef.current,
                    start: "top 85%"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-12">
                    <span className="text-[#ff6b00] font-bold tracking-widest uppercase mb-4 text-sm md:text-base block">
                        Compare Programs
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-[#1f2937]">
                        Choose Your <span className="text-[#ff6b00]">Path</span>
                    </h3>
                    <p className="text-[#1f2937] text-lg md:text-xl max-w-2xl mx-auto">
                        Detailed breakdown of our elite cybersecurity programs to help you decide.
                    </p>
                </div>

                <div ref={tableRef} className="overflow-hidden bg-white rounded-3xl shadow-xl border-2 border-[#ff6b00]">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px] border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-6 text-left w-1/4 bg-gray-50 border-b border-r border-gray-300 border-gray-100">
                                        <span className="text-gray-400 font-bold uppercase text-xs tracking-wider">Features</span>
                                    </th>
                                    {programs.map((prog, idx) => (
                                        <th key={idx} className={`p-6 text-center w-1/4 border-b border-r border-gray-300 last:border-r-0 border-gray-100 ${prog.highlight ? 'bg-[#ff6b00]/5' : 'bg-white'}`}>
                                            <h4 className={`text-xl font-black ${prog.highlight ? 'text-[#ff6b00]' : 'text-[#1f2937]'}`}>
                                                {prog.name}
                                            </h4>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="p-5 border-b border-r border-gray-300 border-gray-100 font-bold text-[#1f2937] text-sm md:text-base pl-8">
                                            {row.label}
                                        </td>
                                        {programs.map((prog, pIdx) => (
                                            <td key={pIdx} className={`p-5 text-center border-b border-r border-gray-300 last:border-r-0 border-gray-100 text-gray-600 font-medium ${prog.highlight ? 'bg-[#ff6b00]/5' : ''}`}>
                                                {prog.details[row.key as keyof typeof prog.details]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                                {/* Common Features Rows */}
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-5 border-b border-r border-gray-300 border-gray-100 font-bold text-[#1f2937] text-sm md:text-base pl-8">
                                        Placement Support
                                    </td>
                                    {programs.map((prog, idx) => (
                                        <td key={idx} className={`p-5 text-center border-b border-r border-gray-300 last:border-r-0 border-gray-100 text-gray-600 font-medium ${prog.highlight ? 'bg-[#ff6b00]/5' : ''}`}>
                                            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </span>
                                            <span className="ml-2">Included</span>
                                        </td>
                                    ))}
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-5 border-b border-r border-gray-300 border-gray-100 font-bold text-[#1f2937] text-sm md:text-base pl-8">
                                        Internship
                                    </td>
                                    {programs.map((prog, idx) => (
                                        <td key={idx} className={`p-5 text-center border-b border-r border-gray-300 last:border-r-0 border-gray-100 text-gray-600 font-medium ${prog.highlight ? 'bg-[#ff6b00]/5' : ''}`}>
                                            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </span>
                                            <span className="ml-2">Included</span>
                                        </td>
                                    ))}
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-5 border-b border-r border-gray-300 border-gray-100 font-bold text-[#1f2937] text-sm md:text-base pl-8">
                                        24/7 Labs
                                    </td>
                                    {programs.map((prog, idx) => (
                                        <td key={idx} className={`p-5 text-center border-b border-r border-gray-300 last:border-r-0 border-gray-100 text-gray-600 font-medium ${prog.highlight ? 'bg-[#ff6b00]/5' : ''}`}>
                                            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </span>
                                            <span className="ml-2">Included</span>
                                        </td>
                                    ))}
                                </tr>
                                <tr className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-5 border-b border-r border-gray-300 border-gray-100 font-bold text-[#1f2937] text-sm md:text-base pl-8">
                                        EMI Options
                                    </td>
                                    {programs.map((prog, idx) => (
                                        <td key={idx} className={`p-5 text-center border-b border-r border-gray-300 last:border-r-0 border-gray-100 text-gray-600 font-medium ${prog.highlight ? 'bg-[#ff6b00]/5' : ''}`}>
                                            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </span>
                                            <span className="ml-2">Available</span>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Schedule Footer */}
                    <div className="bg-gray-900 text-white p-6 text-center">
                        <h5 className="font-bold uppercase tracking-widest text-[#ff6b00] text-sm mb-3">Schedule Options</h5>
                        <p className="md:text-lg font-medium">
                            <span className="block md:inline mb-2 md:mb-0">Weekday (Tue-Fri): <span className="text-white font-bold">2 hrs/day</span></span>
                            <span className="hidden md:inline mx-4 text-gray-600">|</span>
                            <span className="block md:inline">Weekend (Sat-Sun): <span className="text-white font-bold">4 hrs/day</span></span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
