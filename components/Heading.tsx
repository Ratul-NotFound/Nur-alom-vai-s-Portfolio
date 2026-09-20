import React from "react";

interface HeadingProps {
  FWord: string;
  LWord: string;
}

export const Heading: React.FC<HeadingProps> = ({ FWord, LWord }) => {
  return (
    <h1 className="text-white text-left font-extrabold text-[32px] xs:text-[38px] sm:text-[54px] md:text-[76px] lg:text-[94px] leading-[1.08] sm:leading-none m-0 p-0 tracking-tight select-none break-words">
      {FWord} <span style={{ color: "#2b2927" }}>{LWord}</span>
    </h1>
  );
};

export default Heading;
