import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import ProjectsSection from "./ProjectsSection";
import TechStackSection from "./TechStack";
import AboutMeSection from "./About";
import CTASection from "./CTA";
import FooterSection from "./Footer";

function App() {
  return (
    <div className="font-poppins">
      <div className="md:max-w-fourk md:mx-auto">
        {/* centerised container  */}
        <div className="mx-5 md:mx-10 lg:mx-20">
          <div id="home" className="mb-36">
            <NavBar />
            <HeroSection />
          </div>

          <div id="projects" className="mb-36">
            <ProjectsSection />
          </div>

          <div id="skills" className="mb-36">
            <TechStackSection />
          </div>

          <div id="about" className="mb-36">
            <AboutMeSection />
          </div>

          <div id="cta" className="mb-40">
            <CTASection />
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
