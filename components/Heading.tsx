import React from "react";

interface HeadingProps {
  FWord: string;
  LWord: string;
}

export const Heading: React.FC<HeadingProps> = ({ FWord, LWord }) => {
  return (
    <h2 className="text-white text-left font-black text-[40px] sm:text-[64px] lg:text-[80px] leading-[0.92] tracking-tight uppercase m-0 p-0">
      {FWord}{" "}
      <span className="text-[#2c2825]" style={{ color: "var(--text-ghost)" }}>
        {LWord}
      </span>
    </h2>
  );
};
