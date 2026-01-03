"use client";
import React from "react";
import { SideBar } from "@/components/sidebar";
import { Spotlight } from "@/components/ui/spotlight"
import { TextRandomizerEffect } from "@/components/ui/text-randomizer";
import { handleScrollTo } from "@/lib/utilfunctions";
import { useRouter, useParams } from "next/navigation";
import { FaAngleDoubleUp, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { motion } from "motion/react";
import { useTailwindBreakpoint } from "@/components/hooks/breakpoint";
import { ThemeChanger } from "@/components/ui/theme-changer";
import { projectsData } from "@/lib/project-data";

export default function ProjectDetail() {
    const navigator = useRouter();
    const params = useParams();
    const slug = params.slug as string;
    const project = projectsData[slug];

    const { breakpoint, orientation } = useTailwindBreakpoint();
    // const { isDarkMode } = useTheme(); // Unused

    if (!project) {
        return <div className="flex items-center justify-center h-screen text-2xl">Project not found</div>;
    }

    return (
        <div className="flex flex-col items-center w-full h-fit py-25 font-light">
            <Spotlight height={breakpoint == 'xs' ? 850 : breakpoint == 'sm' ? 900 : breakpoint == 'md' ? 1000 : breakpoint == 'lg' ? 1200 : 1380} />
            <SideBar />
            <ThemeChanger />
            <motion.div
                className="sm:w-fit p-5 lg:w-[850px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {
                    orientation === "landscape" ? <TextRandomizerEffect className="text-4xl text-header font-semibold whitespace-nowrap" words={project.title} delay={40} /> : <h1 className="text-4xl font-semibold">{project.title}</h1>
                }
                <div className="flex mt-5 mb-3 text-cfgray text-sm items-center">
                    <FaRegClock />
                    <span className="ml-2">{project.readTime}</span>
                    <span className="ml-auto">{project.date}</span>
                </div>
                <hr className="py-2 text-secondary" />

                {project.content}

                <div className="flex mt-5 lg:mt-10 text-cfgray w-full">
                    {project.prevProject && (
                        <button onClick={() => navigator.push(`/projects/${project.prevProject}`)} className="flex items-center hover:-translate-y-1 transition duration-300 cursor-pointer hover:text-secondary">
                            <FaAngleLeft />
                            <span className="ml-2">Previous</span>
                        </button>
                    )}

                    <button onClick={() => handleScrollTo("")} className="flex items-center hover:-translate-y-1 transition duration-300 cursor-pointer animate-pulse hover:text-secondary mx-auto">
                        <FaAngleDoubleUp />
                        <span className="ml-2">Back to Top</span>
                    </button>

                    {project.nextProject && (
                        <button onClick={() => navigator.push(`/projects/${project.nextProject}`)} className="flex items-center hover:-translate-y-1 transition duration-300 cursor-pointer ml-auto hover:text-secondary">
                            <span className="mr-2">Next</span>
                            <FaAngleRight />
                        </button>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
