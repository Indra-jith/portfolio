"use client";
import { handleScrollTo } from "@/lib/utilfunctions";
import Image from "next/image";
import { useTailwindBreakpoint } from "./hooks/breakpoint";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "./context/theme-context";

export const SideBar = () => {
    const { orientation } = useTailwindBreakpoint();
    const { isDarkMode } = useTheme();
    // Update project pathnames to match Indrajith's projects
    const project_pathnames = ["/projects/gesture-control", "/projects/bert-t5", "/projects/stock-portfolio", "/projects/gait-analysis", "/projects/fake-news"];
    const pathname = usePathname();
    const navigation = useRouter();

    return (
        <nav className="fixed top-0 left-0 h-screen w-16 md:w-24 bg-transparent flex flex-col items-center py-10 z-[999] hidden md:flex">
            <Image
                src={isDarkMode ? "/logo.svg" : "/logolight.svg"}
                alt="Logo"
                width={48}
                height={48}
                onClick={() => {
                    if (window.location.pathname !== "/") {
                        navigation.push("/");
                    }
                    else {
                        handleScrollTo("");
                    }
                }}
                className="cursor-pointer mb-auto"
            />

            {(((orientation === "landscape") || (orientation === "portrait" && pathname !== "/send-message")) && !(orientation === "portrait" && project_pathnames.includes(pathname))) && (
                <div className="flex items-center justify-center h-full">
                    <div className="-rotate-90 flex gap-8 origin-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                        {[
                            { label: "CONTACT", id: "#contact" },
                            { label: "PROJECTS", id: "#project1" },
                            { label: "EDUCATION", id: "#education" },
                            { label: "EXPERIENCE", id: "#experience" },
                            { label: "ABOUT", id: "#about" },
                        ].map(({ label, id }) => (
                            <a
                                key={label}
                                href={id}
                                className="text-sm font-bold tracking-widest text-cfgray hover:text-secondary transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (window.location.pathname !== "/") {
                                        navigation.push("/" + id);
                                        return;
                                    }
                                    if (id === "#project1") {
                                        const currentHash = window.location.hash;
                                        if (currentHash === "#project1") {
                                            handleScrollTo("#project2");
                                        } else if (currentHash === "#project2") {
                                            handleScrollTo("#project3");
                                        } else if (currentHash === "#project3") {
                                            handleScrollTo("#project4");
                                        } else {
                                            handleScrollTo("#project1"); // default start
                                        }
                                        return;
                                    }
                                    if (id === "#experience" && orientation === "portrait") {
                                        handleScrollTo(id);
                                        return;
                                    }
                                    handleScrollTo(id);
                                }}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
