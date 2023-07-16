import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className='min-h-screen px-4 py-12 dark:bg-[#031e39] bg-[#F2AA4C] dark:text-[#F2AA4C] text-[#031e39]'>
      {/* [#F2AA4C] gold */}
      {/* [#042647] dark */}

      <HeroSection />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </main>
  );
}
