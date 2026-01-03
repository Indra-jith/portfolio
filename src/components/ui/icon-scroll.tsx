"use client";
import { useRef } from "react";
import { Brain, Cpu, Database, Microscope } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useTailwindBreakpoint } from "../hooks/breakpoint";

export const IconScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const { breakpoint } = useTailwindBreakpoint();
    const isMobile = breakpoint === 'xs' || breakpoint === 'sm';

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const items = [
        { icon: Brain, label: "AI / ML", color: "text-purple-400" },
        { icon: Cpu, label: "Robotics", color: "text-blue-400" },
        { icon: Microscope, label: "Research", color: "text-emerald-400" },
        { icon: Database, label: "Data Systems", color: "text-orange-400" },
    ];

    return (
        <div ref={containerRef} className="w-full py-20 overflow-hidden relative">
            <motion.div
                style={{ opacity }}
                className="flex flex-wrap justify-center gap-10 md:gap-20 max-w-6xl mx-auto px-4"
            >
                {items.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={item.label}
                            style={{ y: isMobile ? 0 : isEven ? y1 : y2 }}
                            className="flex flex-col items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-white/20 transition-colors"
                        >
                            <item.icon className={`w-12 h-12 md:w-16 md:h-16 ${item.color}`} strokeWidth={1.5} />
                            <span className="text-lg font-medium text-cfgray">{item.label}</span>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};
