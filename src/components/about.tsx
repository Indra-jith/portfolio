"use client";
import React from "react";
import { IconScroll } from "./ui/icon-scroll";
import { TextGenerateEffect } from "./ui/text-generation.effect";

export const AboutSection = () => {
    return (
        <section className="min-h-[50vh] flex flex-col items-center justify-center py-20 relative z-10" id="about">
            <div className="max-w-4xl mx-auto px-6 text-center mb-16">
                <TextGenerateEffect
                    font="font-inter"
                    words={'"Building intelligent systems with AI, ML & Computer Vision"'}
                    className="tracking-wide text-2xl md:text-4xl text-cfgray leading-relaxed mb-6"
                    duration={0.2}
                    delay={0.15}
                />
                <div className="font-inter text-secondary text-lg tracking-wider opacity-80">
                    Data Science • Robotics • AI • Research
                </div>
            </div>

            <IconScroll />
        </section>
    );
};
