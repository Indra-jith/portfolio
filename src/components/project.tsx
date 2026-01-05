import { handleOpenUrl } from "@/lib/utilfunctions";
import CustomButton from "./custom-button";
import { TextRandomizerEffect } from "./ui/text-randomizer";
import Image from "next/image";

import { motion } from "motion/react";
import { TechStack } from "./interface/types";
import { useRouter } from "next/navigation";
import { LuScrollText } from "react-icons/lu";
import { BiExpandAlt } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { useTheme } from "./context/theme-context";

export const Project = ({
    title,
    description,
    imageUrl,
    link,
    number,
    techstacks,
    logo,
    project_story_path,
    buttonText = "View Project",
    downloadPath,
    downloadButtonText = "Download",
    secondaryLink,
    secondaryButtonText = "View Paper"
}: {
    title: string,
    description: string,
    imageUrl: string,
    link: string,
    number: number,
    techstacks: TechStack[],
    logo: string,
    project_story_path?: string,
    buttonText?: string,
    downloadPath?: string,
    downloadButtonText?: string,
    secondaryLink?: string,
    secondaryButtonText?: string
}) => {
    const techStackClassesDark: Record<string, string> = {
        "React": "border-cyan-400 text-cyan-400",
        "Next.js": "border-indigo-300 text-indigo-300",
        "TypeScript": "border-blue-400 text-blue-400",
        "Node.js": "border-emerald-400 text-emerald-400",
        "Express": "border-gray-400 text-gray-400",
        "MongoDB": "border-green-400 text-green-400",
        "AWS": "border-yellow-400 text-yellow-400",
        "PostgreSQL": "border-pink-400 text-pink-400",
        "Figma": "border-purple-400 text-purple-400",
        "Socket.io": "border-orange-400 text-orange-400",
        "Firebase": "border-yellow-300 text-yellow-300",
        "YOLO": "border-red-400 text-red-400",
        "Flask": "border-gray-300 text-gray-300",
        "GCP": "border-green-300 text-green-300",
        "Vertex AI": "border-sky-400 text-sky-400",
        "Python": "border-blue-400 text-blue-400",
        "C++": "border-blue-600 text-blue-600",
        "Git": "border-orange-600 text-orange-600",
        "Flutter": "border-cyan-400 text-cyan-400",
        "Kotlin": "border-purple-400 text-purple-400",
        "Computer Vision": "border-red-400 text-red-400",
        "AI": "border-purple-400 text-purple-400",
        "NLP": "border-green-400 text-green-400",
        "Reinforcement Learning": "border-yellow-400 text-yellow-400"
    };

    const techStackClassesLight: Record<string, string> = {
        "React": "border-cyan-600 text-cyan-600",
        "Next.js": "border-violet-600 text-violet-600",
        "TypeScript": "border-blue-500 text-blue-500",
        "Node.js": "border-emerald-600 text-emerald-600",
        "Express": "border-gray-600 text-gray-600",
        "MongoDB": "border-green-600 text-green-600",
        "AWS": "border-yellow-600 text-yellow-600",
        "PostgreSQL": "border-pink-600 text-pink-600",
        "Figma": "border-purple-600 text-purple-600",
        "Socket.io": "border-orange-600 text-orange-600",
        "Firebase": "border-yellow-700 text-yellow-700",
        "YOLO": "border-red-600 text-red-600",
        "Flask": "border-gray-700 text-gray-700",
        "GCP": "border-green-700 text-green-700",
        "Vertex AI": "border-sky-600 text-sky-600",
        "Python": "border-blue-600 text-blue-600",
        "C++": "border-blue-800 text-blue-800",
        "Git": "border-orange-700 text-orange-700",
        "Flutter": "border-cyan-600 text-cyan-600",
        "Kotlin": "border-purple-600 text-purple-600",
        "Computer Vision": "border-red-600 text-red-600",
        "AI": "border-purple-600 text-purple-600",
        "NLP": "border-green-600 text-green-600",
        "Reinforcement Learning": "border-yellow-600 text-yellow-600"
    };

    const navigator = useRouter();
    const { isDarkMode } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, x: number % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen py-12 md:py-16 lg:h-screen px-4 sm:px-6 md:px-8"
            id={`project${number}`}
        >
            <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
                <div className="flex-col space-y-4 sm:space-y-6 md:space-y-8 w-full md:w-1/2 max-w-[500px] lg:max-w-[550px]">
                    <div className="font-bold text-lg sm:text-xl select-none">
                        <span className="text-secondary mr-3">{"//"}</span>
                        <span className="text-header">{number}</span>
                    </div>
                    <div className="flex gap-3 sm:gap-5 items-center flex-wrap">
                        <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] relative flex-shrink-0">
                            <Image src={logo || "/logo.png"} alt={title} fill className="object-contain" />
                        </div>
                        <TextRandomizerEffect
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-header break-words"
                            words={title}
                            placeholder={true}
                        />
                    </div>
                    <span className="text-base sm:text-lg md:text-xl text-cfgray leading-[1.6] font-inter block">
                        {description}
                    </span>
                    <div className="flex flex-row flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10 text-xs sm:text-sm md:text-base">
                        {techstacks.map((tech) => (
                            <div
                                key={tech}
                                className={`outline-1 md:outline-2 rounded-full w-fit px-2 sm:px-3 py-1 font-inter ${isDarkMode ? techStackClassesDark[tech] || "border-gray-400 text-gray-400" : techStackClassesLight[tech] || "border-gray-600 text-gray-600"}`}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
                        <CustomButton onClick={() => handleOpenUrl(link)} className="w-full sm:w-auto">
                            <div className="flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
                                <BiExpandAlt className="text-lg sm:text-xl" />
                                <span>{buttonText}</span>
                            </div>
                        </CustomButton>
                        {
                            project_story_path && (
                                <CustomButton onClick={() => navigator.push(project_story_path)} className="w-full sm:w-auto" backgroundColor="bg-third" fillColor="bg-third-hover">
                                    <div className="flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
                                        <LuScrollText className="text-lg sm:text-xl" />
                                        <span>Read Full Story</span>
                                    </div>
                                </CustomButton>
                            )
                        }
                        {
                            downloadPath && (
                                <CustomButton
                                    onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = downloadPath;
                                        link.download = downloadPath.split('/').pop() || 'download';
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                    className="w-full sm:w-auto"
                                    backgroundColor="bg-third"
                                    fillColor="bg-third-hover"
                                >
                                    <div className="flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
                                        <HiDownload className="text-lg sm:text-xl" />
                                        <span>{downloadButtonText}</span>
                                    </div>
                                </CustomButton>
                            )
                        }
                        {
                            secondaryLink && (
                                <CustomButton
                                    onClick={() => handleOpenUrl(secondaryLink)}
                                    className="w-full sm:w-auto"
                                    backgroundColor="bg-third"
                                    fillColor="bg-third-hover"
                                >
                                    <div className="flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
                                        <BiExpandAlt className="text-lg sm:text-xl" />
                                        <span>{secondaryButtonText}</span>
                                    </div>
                                </CustomButton>
                            )
                        }
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
                    <div className="relative w-full max-w-[280px] h-[180px] sm:max-w-[350px] sm:h-[220px] md:max-w-[400px] md:h-[280px] lg:max-w-[450px] lg:h-[300px]">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-contain"
                            draggable={false}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
