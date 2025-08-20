import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <Banner/>
      {/* <About /> */}
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}
