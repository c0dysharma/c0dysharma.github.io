import React from "react";

export const MobileCTABtn = ({ text, onCTAClick }) => (
  <p
    onClick={onCTAClick}
    className="text-accentColor font-semibold cursor-pointer my-5"
  >
    {text}
  </p>
);
