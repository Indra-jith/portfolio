"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

interface CyberDecodeTextProps {
    text: string;
    className?: string;
    onComplete?: () => void;
    decodeSpeed?: number;
}

const DECODE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

export const CyberDecodeText = ({
    text,
    className = "",
    onComplete,
    decodeSpeed = 50
}: CyberDecodeTextProps) => {
    const [revealedCount, setRevealedCount] = useState(0);
    const [currentChar, setCurrentChar] = useState("");
    const hasAnimated = useRef(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        let index = 0;
        const chars = text.split("");

        const revealNextChar = () => {
            if (index >= chars.length) {
                setRevealedCount(chars.length);
                if (onComplete) {
                    setTimeout(onComplete, 300);
                }
                return;
            }

            const targetChar = chars[index];

            // Skip spaces immediately
            if (targetChar === " ") {
                setRevealedCount(index + 1);
                index++;
                timeoutRef.current = setTimeout(revealNextChar, decodeSpeed);
                return;
            }

            // Flicker effect for current character (3-4 random chars)
            let flickerCount = 0;
            const maxFlickers = 3;

            intervalRef.current = setInterval(() => {
                setCurrentChar(DECODE_CHARS[Math.floor(Math.random() * DECODE_CHARS.length)]);
                flickerCount++;

                if (flickerCount >= maxFlickers) {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    setCurrentChar(targetChar);
                    setRevealedCount(index + 1);
                    index++;
                    timeoutRef.current = setTimeout(revealNextChar, decodeSpeed);
                }
            }, 30);
        };

        // Start animation
        const startTimeout = setTimeout(revealNextChar, 200);

        return () => {
            clearTimeout(startTimeout);
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`font-mono tracking-wider ${className}`}
        >
            {text.split('').map((char, index) => {
                const isRevealed = index < revealedCount;
                const isCurrent = index === revealedCount;
                const displayChar = isCurrent ? currentChar : (isRevealed ? char : char);

                return (
                    <span
                        key={index}
                        className={`inline-block transition-all duration-100 ${isRevealed ? "text-header" : isCurrent ? "text-secondary" : "text-header/20"
                            }`}
                        style={{
                            minWidth: char === " " ? "0.5em" : "auto",
                            textShadow: isCurrent
                                ? "0 0 12px rgba(137, 236, 255, 0.8)"
                                : "none"
                        }}
                    >
                        {displayChar}
                    </span>
                );
            })}
        </motion.div>
    );
};
