import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-forgroundColor rounded-t-base">
        <div className="flex flex-col px-8 py-6 sm:flex-row sm:justify-between md:max-w-fourk md:mx-auto">
          <p className="text-white mb-5 sm:mb-0">Kuldeep Sharma © / 2023</p>

          <ul className="flex flex-col gap-1 sm:flex-row sm:gap-6 md:gap-24 font-medium text-mutedColor">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about">About Me</a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
