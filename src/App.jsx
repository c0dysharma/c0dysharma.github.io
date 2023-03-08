import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import ProjectsSection from "./ProjectsSection";
import TechStackSection from "./TechStack";
import AboutMeSection from './About'

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

        <div id="tech-stack" className="mb-24">
          <TechStackSection />
        </div>

        <div id="about-me" className="mb-24">
          <AboutMeSection />
        </div>

      </div>
    </div>
  );
}

export default App;
