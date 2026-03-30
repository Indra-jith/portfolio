'use client';
import React, { useEffect } from "react";
import Particles from "@/components/particles";
import { SideBar } from "@/components/sidebar";
import { handleScrollTo } from "@/lib/utilfunctions";
import { Project } from "@/components/project";
import { Experience } from "@/components/experience";
import { ContactSection } from "@/components/contact";
import { HomeSection } from "@/components/home";
import { ViewCVButton } from "@/components/ui/curriculum-vitae";
import { SocialMediaLinks } from "@/components/ui/social-media";
import { useTailwindBreakpoint } from "@/components/hooks/breakpoint";
import { FaAnglesDown } from "react-icons/fa6";
import { ThemeChanger } from "@/components/ui/theme-changer";
import { useTheme } from "@/components/context/theme-context";
import { AboutSection } from "@/components/about";
import { Education } from "@/components/education";
import { TechMarquee } from "@/components/ui/tech-marquee";
import Hyperspeed, { hyperspeedPresets } from "@/components/hyperspeed";

function Home() {
  const [scrollIconOpacity, setScrollIconOpacity] = React.useState(0);
  const handleScroll = () => {
    setScrollIconOpacity(80 - window.scrollY);
  };

  const { breakpoint } = useTailwindBreakpoint();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <main className="w-full min-h-screen overflow-hidden landscape:px-30">
      <div className="fixed inset-0 z-[-2]">
        <Particles
          particleColors={["#00fffb", "#00fffb", "#00fffb"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.4}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
          className="w-full h-full"
        />
      </div>
      {isDarkMode ? (
        <div className="fixed inset-0 z-[-1] opacity-[0.76]">
          <Hyperspeed effectOptions={hyperspeedPresets.one} />
        </div>
      ) : null}

      <SocialMediaLinks />
      <ViewCVButton />
      <ThemeChanger />
      <SideBar />
      {scrollIconOpacity > 0 && (
        <div className="fixed flex flex-col justify-end items-center bottom-[50px] left-0 right-0 space-y-3 transition duration-200 z-999 text-header" style={{ opacity: scrollIconOpacity / 100 }}>
          <div className="select-none text-xs">Scroll</div>
          <FaAnglesDown
            className="animate-pulse transition text-2xl cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#project1");
            }}
          />
        </div>
      )}
      <HomeSection />
      <TechMarquee />
      <AboutSection />
      <Experience />
      <Education />

      <div className="w-full flex justify-center py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-header">Projects</h2>
      </div>

      <Project
        title={'ShadowMind'}
        description={"Autonomous AI Investigation Agent using a hypothesis-driven agentic RAG pipeline. Autonomously generates competing theories, retrieves targeted evidence from Qdrant, and iterates until convergence for deep, non-linear reasoning."}
        imageUrl={"/assets/shadowmind.png"}
        logo={"/techstacks/python.svg"}
        link={"https://github.com/Indra-jith/ShadowMind"}
        number={1}
        techstacks={['LangGraph', 'Qdrant', 'Cohere', 'FastAPI', 'Pydantic']}
        project_story_path={"/projects/shadow-mind"}
        buttonText="GitHub"
      />

      <Project
        title={'Failure Aware Vision'}
        description={"ML perception safety engine achieving zero false-safe resumptions across 5 failure types. Features 30Hz real-time anomaly scoring via a trust-based state machine with asymmetric temporal decay and WebSocket telemetry."}
        imageUrl={"/techstacks/python.svg"} // Placeholder
        logo={"/techstacks/python.svg"}
        link={"https://failure-aware-vision.onrender.com/"}
        number={2}
        techstacks={['FastAPI', 'ROS2', 'OpenCV', 'WebSockets', 'Python']}
        project_story_path={"/projects/failure-aware-vision"}
        buttonText="Live Demo"
      />

      <Project
        title={'Intentra'}
        description={"GenAI Prompt Optimization Platform enhancing output reliability by 67% via multi-stage refinement. Features input scoring, semantic restructuring, and hallucination-risk validation on Cloudflare Workers edge."}
        imageUrl={"/techstacks/react.svg"} // Placeholder
        logo={"/techstacks/react.svg"}
        link={"https://github.com/Indra-jith/Intentra"}
        number={3}
        techstacks={['TypeScript', 'Cloudflare', 'AI', 'NLP']}
        project_story_path={"/projects/intentra"}
        buttonText="GitHub"
      />

      <Project
        title={'Gesture Control System'}
        description={"A multi-functional CV system for touchless device control. Uses MediaPipe and OpenCV for hand-landmark tracking, enabling gesture-based media, mouse, and game control."}
        imageUrl={"/assets/gesture-control.png"}
        logo={"/techstacks/python.svg"}
        link={"https://github.com/Indra-jith/Gesture-Control-System"}
        number={4}
        techstacks={['Python', 'Computer Vision', 'AI']}
        project_story_path={"/projects/gesture-control"}
        buttonText="GitHub"
      />


      <Project
        title={'Transfer Learning with BERT & T5'}
        description={"Research project exploring efficient transfer learning architectures. Investigated fine-tuning state-of-the-art transformers like BERT and T5 for downstream tasks with minimal compute."}
        imageUrl={"/assets/bert-t5.jpg"}
        logo={"/techstacks/python.svg"}
        link={"https://drive.google.com/file/d/1nDfqMawYX3LCb_hTGZquTUpAz5L5QvdH/view?usp=sharing"}
        number={5}
        techstacks={['Python', 'AI', 'NLP', 'Reinforcement Learning']}
        project_story_path={"/projects/bert-t5"}
        buttonText="Read the Paper"
        downloadPath="/assets/bert-t5-paper.pdf"
        downloadButtonText="Download Paper"
      />

      <Project
        title={'Stock Portfolio Optimization'}
        description={"DQN-based reinforcement learning agent for automated stock trading. Implements target network architectures and prioritized experience replay for optimized portfolio returns."}
        imageUrl={"/assets/stock-portfolio.png"}
        logo={"/techstacks/python.svg"}
        link={"https://github.com/Indra-jith/QuantAI"}
        number={6}
        techstacks={['Python', 'Reinforcement Learning', 'AI', 'Node.js']}
        project_story_path={"/projects/stock-portfolio"}
        buttonText="GitHub"
        secondaryLink="https://drive.google.com/file/d/1nZjEdGYoZD9Ue6On2QgdAOa3bsygSdys/view?usp=sharing"
        secondaryButtonText="View Paper"
      />

      <ContactSection />
    </main>
  );
}

export default Home;
