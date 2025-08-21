import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import ProjectsSection from "./components/sections/ProjectsSection";

export default function Home() {
  return (
    <div>
      <Banner/>
      <About />
      <ProjectsSection />
      <Contact />
    </div>
  );
}
