import CustomButton from "./custom-button";
import { TextRandomizerEffect } from "./ui/text-randomizer";
import { IoSend } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

// Custom hook for magnetic effect
const MagneticWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.div
            ref={ref}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const ContactSection = () => {
    const [openMessagePage, setOpenMessagePage] = useState(false);

    // Removed unused hooks

    useEffect(() => {
        // Removed scroll listener as isAtBottom was unused
    }, []);

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center font-primary pb-20 relative z-10" id="contact">
            {!openMessagePage ? (
                <div className="flex flex-col items-center justify-center space-y-12 w-full px-4">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <TextRandomizerEffect
                            words="Let's build something meaningful."
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-header"
                        />
                        <p className="text-cfgray text-lg md:text-xl max-w-2xl">
                            Have ideas in mind? Let&apos;s collaborate and bring them to real life.
                        </p>
                    </div>

                    <MagneticWrapper>
                        <CustomButton
                            onClick={() => setOpenMessagePage(true)}
                            className="px-8 py-4 text-xl"
                        >
                            <span className="flex items-center gap-3">
                                Let&apos;s Connect <IoSend />
                            </span>
                        </CustomButton>
                    </MagneticWrapper>
                </div>
            ) : (
                <div className="w-full max-w-2xl px-4 animate-in fade-in zoom-in duration-500">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
                        <h3 className="text-2xl font-bold text-header mb-6">Send a Message</h3>
                        <div className="flex flex-col gap-4">
                            <input type="text" placeholder="Name" className="bg-transparent border-b border-white/20 p-3 outline-none focus:border-secondary transition-colors text-cfgray" />
                            <input type="email" placeholder="Email" className="bg-transparent border-b border-white/20 p-3 outline-none focus:border-secondary transition-colors text-cfgray" />
                            <textarea placeholder="Message" rows={4} className="bg-transparent border-b border-white/20 p-3 outline-none focus:border-secondary transition-colors text-cfgray resize-none"></textarea>
                            <div className="flex gap-4 mt-4">
                                <CustomButton onClick={() => setOpenMessagePage(false)}>Cancel</CustomButton>
                                <CustomButton onClick={() => setOpenMessagePage(false)}>Send</CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
