import React from "react";
import { SectionHeading } from "./components/SectionHeading";
import { SectionCTABtn } from "./components/SectionCTABtn";
import { MobileCTABtn } from "./components/MobileCTABtn";

const ProjectElement = ({ image, heading, subHeading, text, className }) => (
  <div className={className}>
    <img
      src={image}
      alt="Project Preview Image"
      className="w-full rounded-base mb-7"
    />
    <p className="text-forgroundColor font-extrabold">{heading}</p>
    <p className="text-mutedColor mb-3 text-sm">{subHeading}</p>
    <p className="text-forgroundColor text-sm">{text}</p>
  </div>
);

const PorjectsSection = () => {
  const onCTAClickHandler = () => {};
  return (
    <div className="mb-14">
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

      <div className="grid gap-y-10 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectElement
          image="./src/assets/images/project-placeholder.jpg"
          heading="Dall-E 2.0 Website"
          subHeading="MongoDB, Expres JS, React JS, Node js"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />

        <ProjectElement
          image="./src/assets/images/project-placeholder.jpg"
          heading="Nike E-commerce App"
          subHeading="MongoDB, Expres JS, React JS, Node js"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />

        <ProjectElement
          image="./src/assets/images/project-placeholder.jpg"
          heading="Greets Backend"
          subHeading="MongoDB, Expres JS, React JS, Node js"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />

        <ProjectElement
          image="./src/assets/images/project-placeholder.jpg"
          heading="Social Media Platform Backend"
          subHeading="MongoDB, Expres JS, React JS, Node js"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
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
