import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className='min-h-screen px-4 py-12'>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
    </main>
  );
}
