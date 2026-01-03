'use client';
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { RoleAnimator } from "./role-animator";
import { CyberDecodeText } from "./ui/cyber-decode-text";

export const HomeSection = () => {
    const [showAvatar, setShowAvatar] = useState(false);
    const [showRoles, setShowRoles] = useState(false);

    const handleDecodeComplete = () => {
        // Show avatar after name decode completes
        setTimeout(() => {
            setShowAvatar(true);
            // Show roles shortly after avatar starts appearing
            setTimeout(() => {
                setShowRoles(true);
            }, 500);
        }, 300);
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden" id="home">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center z-10 h-full">
                {/* Text Content - Left Aligned */}
                <div className="flex flex-col items-center md:items-start space-y-8 md:space-y-12 text-center md:text-left order-2 md:order-1 min-h-[300px] justify-center">
                    <div className="whitespace-nowrap overflow-visible">
                        <CyberDecodeText
                            text="INDRAJITH M P"
                            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase"
                            onComplete={handleDecodeComplete}
                            decodeSpeed={50}
                        />
                    </div>

                    {showRoles && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full"
                        >
                            <RoleAnimator />
                        </motion.div>
                    )}
                </div>

                {/* 3D Element - Right Side - Appears after decode */}
                <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center order-1 md:order-2 isolate">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                        animate={{
                            opacity: showAvatar ? 1 : 0,
                            scale: showAvatar ? 1 : 0.8,
                            filter: showAvatar ? "blur(0px)" : "blur(10px)"
                        }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full h-full flex items-center justify-center"
                        style={{ visibility: showAvatar ? 'visible' : 'hidden' }}
                    >
                        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                            {/* Avatar space reserved - image removed */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
