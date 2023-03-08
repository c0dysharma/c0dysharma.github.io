import React from "react";

export const SectionCTABtn = ({ text, onCTAClick }) => (
  <div onClick={onCTAClick} className="cursor-pointer">
    <div className="px-4 py-2 bg-accentColor visited:bg-hoverColor hover:bg-hoverColor active:bg-hoverColor inline-block rounded-base text-white font-semibold md:text-lg relative">
      {text}
      <div className="px-3 py-2 absolute border-2 top-1 -right-2 border-black rounded-base md:text-lg -z-10">
        <span className="opacity-0">{text}</span>
      </div>
    </div>
  </div>
);
