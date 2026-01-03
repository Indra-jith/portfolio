"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

type ExperienceData = {
    company: string;
    role: string;
    period: string;
    description: string;
    skills: string[];
    logo: string;
};

const experiences: ExperienceData[] = [
    {
        company: "Moonpreneur Inc",
        role: "Robotics Project Guide",
        period: "Feb 2025 – Present",
        description: "Guiding students in robotics projects, fostering technical skills and innovation. Mentoring on embedded systems and prototyping for next-gen solutions.",
        skills: ["Robotics", "Embedded Systems", "Mentorship", "Prototyping"],
        logo: "/companies/moonpreneur.png",
    },
    {
        company: "Allsoft Solutions",
        role: "AI Summer Trainee",
        period: "Jun 2024 – Aug 2024",
        description: "Gained hands-on experience in AI and Machine Learning. Worked on real-world projects involving Computer Vision and NLP, translating theory into application.",
        skills: ["Artificial Intelligence", "Computer Vision", "NLP", "Python"],
        logo: "/companies/allsoft.png",
    },
];

const ExperienceItem = ({ data, index }: { data: ExperienceData; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-8 md:pl-0 mb-20 last:mb-0 grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-10"
        >
            {/* Date/Period - Left side for even, Right for odd on desktop */}
            <div className={`${index % 2 === 0 ? "md:order-1 md:text-right" : "md:order-3 md:text-left"} flex flex-col items-start md:items-${index % 2 === 0 ? 'end' : 'start'} gap-4`}>
                <span className="text-xl md:text-2xl font-bold text-secondary">{data.period}</span>
                {/* Company Logo */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden bg-white/5 p-2 border border-white/10">
                    <Image
                        src={data.logo}
                        alt={`${data.company} logo`}
                        fill
                        className="object-contain p-1"
                    />
                </div>
            </div>

            {/* Timeline Center */}
            <div className="absolute left-0 top-0 bottom-0 md:static md:order-2 flex flex-col items-center">
                <div className="w-3 h-3 bg-white rounded-full z-10 ring-4 ring-black/40 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                <div className="w-0.5 flex-1 bg-gradient-to-b from-white/50 to-transparent my-2"></div>
            </div>

            {/* Content - Right side for even, Left for odd on desktop */}
            <div className={`${index % 2 === 0 ? "md:order-3" : "md:order-1 md:text-right"}`}>
                <h3 className="text-2xl font-bold text-header">{data.role}</h3>
                <h4 className="text-lg text-cfgray mb-4">{data.company}</h4>
                <p className="text-cfgray/80 leading-relaxed max-w-md ml-0 md:ml-auto md:mr-0 inline-block text-left">
                    {data.description}
                </p>
                <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                    {data.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-secondary">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-20 md:py-32 relative overflow-hidden" id="experience">
            <div className="max-w-6xl mx-auto px-6 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16 text-header"
                >
                    Experience
                </motion.h2>

                {/* Central Line for Desktop */}
                <div className="hidden md:block absolute left-1/2 top-32 bottom-20 w-px bg-white/5 -translate-x-1/2">
                    <motion.div
                        style={{ height: lineHeight }}
                        className="w-full bg-secondary shadow-[0_0_10px_orange]"
                    />
                </div>

                <div className="relative">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={exp.company} data={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
