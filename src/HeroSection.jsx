import React from "react";

const HeroImage = () => (
  <div className="relative flex justify-center mx-auto w-full sm:w-[80%]">
    <img
      src="/assets/images/image-bg-memphis-ptt.png"
      alt="hero background memphis pattern"
      className="absolute origin-bottom bottom-0 -z-10 w-full h-auto max-w-[500px]"
    />
    <img
      src="/assets/images/hero-image.png"
      alt="Kuldeep in heroic pose"
      className="w-[70%] h-auto mx-auto mt-10 max-w-[350px]"
    />
  </div>
);

const HeroSection = () => {
  return (
    <div>
      <div className="text-center mt-16 md:mt-36">
        {/* top level headings  */}
        <h1 className="font-extrabold text-xl sm:text-3xl md:text-5xl lg:text-6xl">
          I'm <span className="text-accentColor">Kuldeep Sharma.</span>
        </h1>
        <h2 className="font-extrabold text-2xl sm:text-4xl md:text-6xl lg:text-7xl md:mb-16">
          Welcome to my portfolio
        </h2>
        {/* hero image  */}
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroSection;
