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
