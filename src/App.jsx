import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import ProjectsSection from "./ProjectsSection";

function App() {
  return (
    <div className="font-poppins md:max-w-fourk md:mx-auto">
      {/* centerised container  */}
      <div className="mx-5 md:mx-10 lg:mx-20">
        <div id="home" className="">
          <NavBar />
          <HeroSection />
        </div>

        <div id="projects">
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
}

export default App;
