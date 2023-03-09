import React from "react";
import { SectionHeading } from "./components/SectionHeading";
import { SectionCTABtn } from "./components/SectionCTABtn";
import { MobileCTABtn } from "./components/MobileCTABtn";

const ProjectElement = ({ image, heading, subHeading, text, className }) => (
  <div className={"text-center md:text-left md:items-start" + " " + className}>
    <div
      className="mx-auto w-full max-w-[400px] h-[300px] rounded-base mb-7 bg-red-100 bg-cover shadow-lg"
      style={{ backgroundImage: image }}
    ></div>
    <p className="text-forgroundColor font-extrabold">{heading}</p>
    <p className="text-mutedColor mb-3 text-sm">{subHeading}</p>
    <p className="text-forgroundColor text-sm sm:text-base">{text}</p>
  </div>
);

const PorjectsSection = () => {
  const onCTAClickHandler = () => {
    window.open("https://github.com/c0dysharma", "_blank");
  };
  return (
    <div className="">
      <div className="mb-10 text-center md:text-left md:flex justify-between">
        <SectionHeading
          headingText="Featured projects"
          subHeadingText="My latest projects that im working on"
        />
        <div className="hidden md:inline-block">
          <SectionCTABtn
            text="See all projects"
            onCTAClick={onCTAClickHandler}
          />
        </div>
      </div>

      <div className="grid gap-y-14 sm:gap-x-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectElement
          image="url('/assets/images/Dalle-img.png')"
          heading="Dall-E 2.0 Website"
          subHeading="MongoDB, Expres JS, React JS, Node js"
          text="Experience the magic of unique and stunning images with my latest MERN stack project, which leverages the incredible Dall-E API to generate and display beautiful images in gallery."
        />

        <ProjectElement
          image="url('/assets/images/Nike-img.png')"
          heading="Nike E-commerce App"
          subHeading="Node Js React Native, Redux"
          text="Shop for the latest Nike products with ease using our innovative ecommerce app. Built with React Native, Zustand state management, this app delivers the ultimate shopping experience."
        />

        <ProjectElement
          image="url('/assets/images/Social-img.png')"
          heading="Social Media Backend"
          subHeading="MongoDB, Expres JS, Node js"
          text="This social media backend app is built with Node.js, Express.js, and MongoDB, and includes features like post liking, commenting, and following users."
        />

        <ProjectElement
          image="url('/assets/images/Greets-img.png')"
          heading="Greets Webapp"
          subHeading="MongoDB, Expres JS, Node js"
          text="Introducing Greets, a backend application designed to help you schedule emails, WhatsApp messages, and text SMS ahead of time for special occasions to make em feel special."
          // className="hidden sm:grid"
        />

        <ProjectElement
          image="url('/assets/images/Looter-img.png')"
          heading="Looter’s Backend"
          subHeading="Node Js React Native, Redux"
          text="The backend of the Looter app provides users with access to exclusive deals on popular ecommerce platforms, along with notification support and a variety of amazing offers."
          // className="hidden sm:grid"
        />

        <ProjectElement
          image="url('/assets/images/Scrappers-img.png')"
          heading="Web Scrappers"
          subHeading="MongoDB, Expres JS, Node js"
          text="My recent projects involved web scraping, data mining, and reverse engineering APIs from popular websites like Netflix, Amazon, and Oyo to extract valuable insights"
          // className="hidden sm:grid"
        />
      </div>

      <div className="flex justify-end md:hidden ">
        <MobileCTABtn
          text="See all project..."
          onCTAClick={onCTAClickHandler}
        />
      </div>
    </div>
  );
};

export default PorjectsSection;
