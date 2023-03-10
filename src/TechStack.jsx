import React from "react";
import { SectionHeading } from "./components/SectionHeading";

const TechItem = ({ image, text, className }) => (
  <div className={"flex flex-col items-center gap-5" + " " + className}>
    <img
      src={image}
      alt="Tech Logo"
      className="w-32 h-32 sm:w-40 sm:h-40 duration-150 hover:scale-110 active:scale-110"
    />
    <p className="text-forgroundColor font-medium">{text}</p>
  </div>
);

const TechStack = () => {
  return (
    <div>
      <div className="mb-16 text-center">
        <SectionHeading
          headingText="My Tech Stack"
          subHeadingText="Im well versed with latest technologies"
        />
      </div>

      <div className="grid items-center gap-x-8 gap-y-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
        <TechItem image="/assets/logos/javascript.svg" text="Javascript" />
        <TechItem image="/assets/logos/react-2.svg" text="React Js" />
        <TechItem image="/assets/logos/python.svg" text="Python" />
        <TechItem image="/assets/logos/node-js.svg" text="Node Js" />
        <TechItem
          image="/assets/logos/mongodb.svg"
          text="Mongo DB"
          className="col-span-2 sm:col-span-1"
        />
      </div>
    </div>
  );
};

export default TechStack;
