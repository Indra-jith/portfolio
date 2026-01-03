import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const roles = [
    "AI & Machine Learning Engineer",
    "Robotics Instructor & Project Mentor",
    "Applied Research Enthusiast",
    "Data-Driven Systems Builder"
];

export const RoleAnimator = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-20 flex items-center justify-center md:justify-start overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-xl md:text-2xl lg:text-3xl font-bold text-header text-center md:text-left"
                >
                    {roles[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

