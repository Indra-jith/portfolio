'use client';
import React, { useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";
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
      {
        isDarkMode ? <Spotlight height={breakpoint == 'xs' ? 850 : breakpoint == 'md' ? 1000 : breakpoint == 'lg' ? 1200 : 1380} />
          : <Spotlight height={breakpoint == 'xs' ? 850 : breakpoint == 'md' ? 1000 : breakpoint == 'lg' ? 1200 : 1380}
            gradientFirst="radial-gradient(68.54% 68.72% at 60.02% 31.46%, hsla(30, 50%, 70%, .08) 0, hsla(30, 45%, 50%, .02) 50%, hsla(30, 40%, 35%, 0) 80%)"
            gradientSecond="radial-gradient(50% 50% at 50% 60%, hsla(30, 55%, 75%, .06) 0, hsla(30, 45%, 45%, .02) 80%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 60%, hsla(30, 50%, 70%, .04) 0, hsla(30, 40%, 35%, .02) 80%, transparent 100%)" />
      }

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
        title={'Gesture Control System'}
        description={"A computer vision-based system allowing users to control devices using hand gestures. Integrates detection algorithms for real-time interaction."}
        imageUrl={"/assets/gesture-control.png"}
        logo={"/techstacks/python.svg"}
        link={"https://github.com/Indra-jith/Gesture-Control-System"}
        number={1}
        techstacks={['Python', 'Computer Vision', 'AI']}
        project_story_path={"/projects/gesture-control"}
        buttonText="GitHub"
      />


      <Project
        title={'Transfer Learning with BERT & T5'}
        description={"Research project utilizing BERT and T5 models for NLP tasks. Explored transfer learning techniques to improve model performance on specific datasets."}
        imageUrl={"/assets/bert-t5.jpg"}
        logo={"/techstacks/python.svg"}
        link={"https://drive.google.com/file/d/1nDfqMawYX3LCb_hTGZquTUpAz5L5QvdH/view?usp=sharing"}
        number={2}
        techstacks={['Python', 'NLP', 'AI', 'Reinforcement Learning']}
        project_story_path={"/projects/bert-t5"}
        buttonText="Read the Paper"
        downloadPath="/assets/bert-t5-paper.pdf"
        downloadButtonText="Download Paper"
      />

      <Project
        title={'Stock Portfolio Optimization'}
        description={"Developed a DDQN-based reinforcement learning agent to optimize stock portfolios. Achieved improved returns through automated trading strategies."}
        imageUrl={"/assets/stock-portfolio.png"}
        logo={"/techstacks/python.svg"}
        link={"https://github.com/Indra-jith/QuantAI"}
        number={3}
        techstacks={['Python', 'Reinforcement Learning', 'AI', 'Node.js']}
        project_story_path={"/projects/stock-portfolio"}
        buttonText="GitHub"
        secondaryLink="https://drive.google.com/file/d/1nZjEdGYoZD9Ue6On2QgdAOa3bsygSdys/view?usp=sharing"
        secondaryButtonText="View Paper"
      />

      <Project
        title={'ML-Based Gait Analysis'}
        description={"Healthcare research project analyzing gait patterns using Machine Learning. Aims to assist in early diagnosis of locomotor disorders."}
        imageUrl={"/techstacks/python.svg"} // Placeholder
        logo={"/techstacks/python.svg"} // Placeholder
        link={"https://drive.google.com/file/d/1x1XX9ak5VPqwDMpsWdhZKH_0yyOQFHxh/view?usp=sharing"}
        number={4}
        techstacks={['Python', 'AI', 'Computer Vision']}
        buttonText="Read Paper"
      />


      <Project
        title={'Fake News Detection System'}
        description={"A system designed to identify and flag fake news articles using NLP techniques. Helps in combating misinformation by verifying content credibility."}
        imageUrl={"/techstacks/python.svg"} // Placeholder
        logo={"/techstacks/python.svg"} // Placeholder
        link={"https://github.com/Indra-jith/Fake-News-Detection"}
        number={5}
        techstacks={['Python', 'NLP', 'AI']}
        project_story_path={"/projects/fake-news"}
        buttonText="GitHub"
      />

      <ContactSection />
    </main>
  );
}

export default Home;
