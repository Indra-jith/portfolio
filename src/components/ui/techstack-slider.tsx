"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTailwindBreakpoint } from "../hooks/breakpoint";
import {
    Bot,
    Brain,
    BrainCircuit,
    Eye,
    Flame,
    MessageSquareText,
    ScanEye,
    Boxes
} from "lucide-react";

type TechItem = {
    type: "image" | "icon";
    src?: string; // for images
    icon?: React.ElementType; // for lucide icons
    alt: string;
};

export const TechStackSlider = ({ className, style }: { className?: string; style?: React.CSSProperties }) => {
    const { orientation } = useTailwindBreakpoint();
    const [isHovered, setIsHovered] = useState(false);

    const gap = 40; // Increased gap for better separation
    const baseSpeed = 0.5; // Slightly faster base speed

    // Mapping requested items
    const initialTechstacks: TechItem[] = [
        { type: "image", src: "/techstacks/python.svg", alt: "Python" },
        { type: "icon", icon: Bot, alt: "Robotics" }, // Robotics
        { type: "icon", icon: BrainCircuit, alt: "Machine Learning" }, // ML
        { type: "icon", icon: Brain, alt: "AI" }, // AI
        { type: "icon", icon: ScanEye, alt: "Computer Vision" }, // CV
        { type: "icon", icon: MessageSquareText, alt: "NLP" }, // NLP
        { type: "icon", icon: Boxes, alt: "TensorFlow" }, // TensorFlow (Approx)
        { type: "icon", icon: Flame, alt: "PyTorch" }, // PyTorch
        { type: "icon", icon: Eye, alt: "OpenCV" }, // OpenCV (Approx)
        { type: "image", src: "/techstacks/git.svg", alt: "Git" },
    ];

    const [techstacks, setTechstacks] = useState(initialTechstacks);
    const [offset, setOffset] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);

    useEffect(() => {
        const animate = () => {
            if (!isHovered) {
                setOffset((prev) => {
                    const newOffset = prev + baseSpeed;

                    // Logic to cycle items
                    // We need to measure the first item's width + gap
                    if (containerRef.current?.children[0]) {
                        const firstItem = containerRef.current.children[0] as HTMLElement;
                        const itemWidth = firstItem.offsetWidth;

                        if (newOffset >= itemWidth + gap) {
                            setTechstacks((prevStacks) => {
                                const [first, ...rest] = prevStacks;
                                return [...rest, first];
                            });
                            // Adjust offset by the width of the removed item to prevent jump
                            return newOffset - (itemWidth + gap);
                        }
                    }
                    return newOffset;
                });
            }
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [isHovered, gap]); // Dependencies

    const size = orientation === "landscape" ? 40 : 50;

    return (
        <div
            className={`overflow-hidden transition pb-4 fade-mask-horizontal ${orientation === "landscape" ? "w-full" : "max-w-[48rem]"} ${className}`}
            style={style}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                ref={containerRef}
                className="flex items-center"
                style={{
                    gap: `${gap}px`,
                    transform: `translateX(-${offset}px)`,
                    willChange: "transform",
                    width: "max-content", // Ensure it flows horizontally
                    paddingLeft: `${gap}px` // Initial padding
                }}
            >
                {techstacks.map((tech, index) => (
                    <div
                        key={`${tech.alt}-${index}`}
                        className="flex flex-col items-center justify-center gap-2 group min-w-[max-content] grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                    >
                        {tech.type === "image" && tech.src ? (
                            <Image
                                src={tech.src}
                                alt={tech.alt}
                                width={size}
                                height={size}
                                className="object-contain"
                            />
                        ) : tech.icon ? (
                            <tech.icon
                                size={size}
                                strokeWidth={1.5}
                                className="text-secondary group-hover:text-primary transition-colors"
                            />
                        ) : null}
                        <span className="text-xs font-mono uppercase tracking-widest text-cfgray group-hover:text-white transition-colors">
                            {tech.alt}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
