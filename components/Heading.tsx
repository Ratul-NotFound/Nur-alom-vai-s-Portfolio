import React from "react";

interface HeadingProps {
  FWord: string;
  LWord: string;
}

export const Heading: React.FC<HeadingProps> = ({ FWord, LWord }) => {
  return (
    <h1 className="text-white text-left font-extrabold text-[28px] xs:text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-[68px] 2xl:text-[76px] leading-[1.02] m-0 p-0 tracking-tight select-none flex flex-wrap items-baseline gap-x-2.5 sm:gap-x-3.5 gap-y-1">
      <span className="text-white shrink-0">{FWord}</span>
      <span className="text-[#55504a] shrink-0">{LWord}</span>
    </h1>
  );
};

export default Heading;
