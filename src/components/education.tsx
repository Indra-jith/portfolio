"use client";
import React from "react";
import { motion } from "motion/react";

type EducationData = {
    degree: string;
    institution: string;
    period: string;
    grade: string;
    score: number; // For animation
    maxScore: number; // e.g., 10 or 100
};

const educationList: EducationData[] = [
    {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "Lovely Professional University",
        period: "2022 - 2026",
        grade: "CGPA",
        score: 9.08,
        maxScore: 10
    },
    {
        degree: "Senior Secondary (Class XII)",
        institution: "Carmel HSS",
        period: "2021",
        grade: "CGPA",
        score: 99,
        maxScore: 100
    },
    {
        degree: "Secondary (Class X)",
        institution: "Vijayagiri Public School",
        period: "2019",
        grade: "CGPA",
        score: 95,
        maxScore: 100
    }
];

const CircularProgress = ({ value, max }: { value: number; max: number }) => {
    const percentage = (value / max) * 100;
    const radius = 60; // Increased from 30
    const circumference = 2 * Math.PI * radius;
    const center = 80; // Updated center point

    return (
        <div className="relative w-40 h-40 flex items-center justify-center"> {/* Increased from w-20 h-20 */}
            <svg className="w-full h-full transform -rotate-90">
                {/* Background Circle */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    className="text-white/10"
                />
                {/* Animated Progress Circle with Gradient */}
                <defs>
                    <linearGradient id={`gradient-${value}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" /> {/* cyan-400 */}
                        <stop offset="50%" stopColor="#3b82f6" /> {/* blue-500 */}
                        <stop offset="100%" stopColor="#a855f7" /> {/* purple-500 */}
                    </linearGradient>
                </defs>
                <motion.circle
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: circumference - (percentage / 100) * circumference }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke={`url(#gradient-${value})`}
                    strokeWidth="6"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeLinecap="round"
                    style={{
                        filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))"
                    }}
                />
            </svg>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
            >
                <motion.span
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="font-bold text-white text-3xl"
                >
                    {value}
                </motion.span>
                <span className="text-sm text-white/50 font-medium">/ {max}</span>
            </motion.div>
        </div>
    );
};

export const Education = () => {
    return (
        <section className="py-20 flex flex-col items-center justify-center relative z-10" id="education">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-bold text-center mb-16 text-header"
            >
                Education
            </motion.h2>

            <div className="flex flex-col gap-8 w-full max-w-4xl px-6">
                {educationList.map((edu, index) => (
                    <motion.div
                        key={edu.degree}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="flex flex-col md:flex-row items-center md:justify-between bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all gap-6"
                    >
                        <div className="flex flex-col gap-2 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-secondary">{edu.degree}</h3>
                            <h4 className="text-xl text-header">{edu.institution}</h4>
                            <span className="text-cfgray/80 font-mono">{edu.period}</span>
                        </div>

                        <div className="flex flex-col items-center md:items-end min-w-[150px]">
                            <div className="flex items-center gap-4">
                                <CircularProgress value={edu.score} max={edu.maxScore} />
                                <span className="text-sm text-secondary uppercase tracking-widest font-bold">
                                    {edu.grade}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
