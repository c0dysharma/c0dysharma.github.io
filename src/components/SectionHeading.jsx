import React from "react";

export const SectionHeading = ({ headingText, subHeadingText }) => {
  const firstWord = headingText.split(" ")[0];
  const otherWords = headingText.split(" ").slice(1);
  return (
    <div>
      <h2 className="font-extrabold text-xl mb-1 sm:text-2xl md:text-3xl lg:text-4xl">
        <span className="text-forgroundColor">{firstWord}</span>{" "}
        <span className="text-accentColor">{otherWords}</span>
      </h2>
      <p className="text-mutedColor font-medium sm:text-lg lg:text-2xl">
        {subHeadingText}
      </p>
    </div>
  );
};
