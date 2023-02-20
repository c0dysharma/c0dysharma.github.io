import React from "react";

const HeroImage = () => (
  <div className="relative md:scale-75 md:origin-top">
    <img
      src="./src/assets/images/image-bg-memphis-ptt.png"
      alt="hero background memphis pattern"
      className="absolute origin-bottom bottom-0 -z-10 scale-75"
    />
    <img
      src="./src/assets/images/hero-image.png"
      alt="Kuldeep in heroic pose"
      className="w-1/2 mx-auto mt-10"
    />
  </div>
);

const HeroSection = () => {
  return (
    <div>
      <div className="text-center mt-16 md:mt-36">
        {/* top level headings  */}
        <h1 className="font-extrabold text-xl md:text-5xl lg:text-6xl">
          I'm <span className="text-accentColor">Kuldeep Sharma.</span>
        </h1>
        <h2 className="font-extrabold text-2xl md:text-6xl lg:text-7xl md:mb-16">
          Welcome to my portfolio
        </h2>
        {/* hero image  */}
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroSection;
