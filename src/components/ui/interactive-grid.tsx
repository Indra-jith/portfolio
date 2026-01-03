"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface InteractiveGridPatternProps {
    className?: string;
    width?: number;
    height?: number;
    squares?: [number, number];
}

interface DataLine {
    x: number;
    y: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    baseX: number;
    baseY: number;
}

export const InteractiveGridPattern = ({ className }: InteractiveGridPatternProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let frameId: number;
        let isMobile = false;

        // Grid parameters
        const gap = 50; // Increased spacing for better performance
        const pointSize = 2; // Slightly larger points
        const influenceRadius = 250; // Larger influence area
        const forceFactor = 1.5; // Stronger movement
        const returnSpeed = 0.12;

        // Data lines parameters
        const dataLines: DataLine[] = [];
        const lineCount = 6; // Reduced for performance
        const lineColor = "rgba(0, 255, 100, 0.15)"; // Green data lines

        // State
        const points: {
            x: number;
            y: number;
            originX: number;
            originY: number;
            vx: number;
            vy: number;
        }[] = [];

        const mouse = { x: -9999, y: -9999 };

        const resize = () => {
            width = container.clientWidth;
            height = container.clientHeight;
            isMobile = width < 768;

            const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap DPR for performance
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);

            // Initialize points
            points.length = 0;
            const cols = Math.ceil(width / gap);
            const rows = Math.ceil(height / gap);

            const startX = (width - cols * gap) / 2;
            const startY = (height - rows * gap) / 2;

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    const x = startX + i * gap;
                    const y = startY + j * gap;
                    points.push({
                        x,
                        y,
                        originX: x,
                        originY: y,
                        vx: 0,
                        vy: 0
                    });
                }
            }

            // Initialize data lines
            dataLines.length = 0;
            if (!isMobile) {
                for (let i = 0; i < lineCount; i++) {
                    const isHorizontal = Math.random() > 0.5;
                    dataLines.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        length: 150 + Math.random() * 250,
                        angle: isHorizontal ? 0 : Math.PI / 4 + (Math.random() - 0.5) * 0.3,
                        speed: 0.4 + Math.random() * 0.6,
                        opacity: 0.15 + Math.random() * 0.15,
                        baseX: Math.random() * width,
                        baseY: Math.random() * height
                    });
                }
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (isMobile) return;
            const rect = container.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -9999;
            mouse.y = -9999;
        };

        const update = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw data lines
            if (!isMobile) {
                dataLines.forEach(line => {
                    // Update position
                    line.x += Math.cos(line.angle) * line.speed;
                    line.y += Math.sin(line.angle) * line.speed;

                    // Wrap around screen
                    if (line.x > width + line.length) line.x = -line.length;
                    if (line.y > height + line.length) line.y = -line.length;
                    if (line.x < -line.length) line.x = width + line.length;
                    if (line.y < -line.length) line.y = height + line.length;

                    // React to mouse
                    const dx = mouse.x - line.x;
                    const dy = mouse.y - line.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    let currentOpacity = line.opacity;
                    if (dist < influenceRadius) {
                        const influence = (influenceRadius - dist) / influenceRadius;
                        currentOpacity = line.opacity + influence * 0.5; // Much stronger glow
                    }

                    // Draw line
                    ctx.beginPath();
                    ctx.moveTo(line.x, line.y);
                    ctx.lineTo(
                        line.x + Math.cos(line.angle) * line.length,
                        line.y + Math.sin(line.angle) * line.length
                    );
                    ctx.strokeStyle = `rgba(0, 255, 100, ${currentOpacity})`;
                    ctx.lineWidth = 2;
                    ctx.stroke();
                });
            }

            // Draw grid points
            points.forEach(point => {
                if (isMobile) {
                    // Static grid on mobile
                    ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
                    ctx.beginPath();
                    ctx.arc(point.originX, point.originY, pointSize, 0, Math.PI * 2);
                    ctx.fill();
                    return;
                }

                // Interactive grid on desktop
                const dx = mouse.x - point.x;
                const dy = mouse.y - point.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                let brightness = 0.1;
                let currentSize = pointSize;

                if (dist < influenceRadius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (influenceRadius - dist) / influenceRadius;

                    const moveX = Math.cos(angle) * force * forceFactor * -35; // Stronger push
                    const moveY = Math.sin(angle) * force * forceFactor * -35;

                    point.vx += (point.originX + moveX - point.x) * returnSpeed;
                    point.vy += (point.originY + moveY - point.y) * returnSpeed;

                    // Make points brighter and larger near cursor
                    brightness = 0.15 + force * 0.4;
                    currentSize = pointSize + force * 3;
                } else {
                    point.vx += (point.originX - point.x) * returnSpeed;
                    point.vy += (point.originY - point.y) * returnSpeed;
                }

                point.vx *= 0.85;
                point.vy *= 0.85;

                point.x += point.vx;
                point.y += point.vy;

                ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
                ctx.beginPath();
                ctx.arc(point.x, point.y, currentSize, 0, Math.PI * 2);
                ctx.fill();
            });

            frameId = requestAnimationFrame(update);
        };

        window.addEventListener("resize", resize);
        // Listen to document for global mouse tracking (works everywhere, even over icons)
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        resize();
        update();

        return () => {
            window.removeEventListener("resize", resize);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div ref={containerRef} className={cn("fixed inset-0 pointer-events-none z-0", className)}>
            <canvas ref={canvasRef} className="block w-full h-full pointer-events-none" /> {/* Changed to pointer-events-none since we're tracking at document level */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
        </div>
    );
};
