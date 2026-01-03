"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const technologies = [
    { name: "Python", icon: "/techstacks/python.png" },
    { name: "Jupyter", icon: "/techstacks/jupyter.png" },
    { name: "NumPy", icon: "/techstacks/numpy.png" },
    { name: "Pandas", icon: "/techstacks/pandas.jpg" },
    { name: "TensorFlow", icon: "/techstacks/tensorflow.jpg" },
    { name: "Keras", icon: "/techstacks/keras.png" },
    { name: "PyTorch", icon: "/techstacks/torch.png" },
    { name: "Scikit-Learn", icon: "/techstacks/scikit-learn.png" },
    { name: "OpenCV", icon: "/techstacks/opencv.png" },
    { name: "MediaPipe", icon: "/techstacks/mediapipe.png" },
    { name: "Hugging Face", icon: "/techstacks/hugging face.png" },
    { name: "Git", icon: "/techstacks/git.png" },
    { name: "GitHub", icon: "/techstacks/github.png" },
    { name: "SQL", icon: "/techstacks/sql.jpg" },
    { name: "Java", icon: "/techstacks/java.jpg" },
    { name: "C++", icon: "/techstacks/c++.png" },
];

export const TechMarquee = () => {
    const [isPaused, setIsPaused] = useState(false);

    // Duplicate the array for seamless loop
    const duplicatedTechs = [...technologies, ...technologies];

    return (
        <div className="w-full py-12 overflow-hidden bg-white/[0.02] border-y border-white/5">
            <div className="relative">
                <motion.div
                    className="flex gap-12 md:gap-16"
                    animate={{
                        x: isPaused ? undefined : [0, -100 * technologies.length / 2],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25, // Faster animation
                            ease: "linear",
                        },
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {duplicatedTechs.map((tech, index) => (
                        <motion.div
                            key={`${tech.name}-${index}`}
                            className="flex-shrink-0 flex flex-col items-center gap-3 group cursor-pointer"
                            whileHover={{ scale: 1.15, y: -5 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="relative w-12 h-12 md:w-16 md:h-16 transition-all duration-300">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    fill
                                    className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(137,236,255,0.4)]"
                                />
                            </div>
                            <span className="text-xs md:text-sm text-cfgray/60 group-hover:text-secondary transition-colors duration-300 font-medium whitespace-nowrap">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Gradient fade edges */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
            </div>
        </div>
    );
};
