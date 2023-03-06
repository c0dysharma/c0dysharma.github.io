import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import ProjectsSection from "./ProjectsSection";
import TechStackSection from "./TechStack";

function App() {
  return (
    <div className="font-poppins md:max-w-fourk md:mx-auto">
      {/* centerised container  */}
      <div className="mx-5 md:mx-10 lg:mx-20">
        <div id="home" className="mb-16">
          <NavBar />
          <HeroSection />
        </div>

        <div id="projects" className="mb-24">
          <ProjectsSection />
        </div>

        <div id="tech-stack">
          <TechStackSection />
        </div>
      </div>
    </div>
  );
}

export default App;
