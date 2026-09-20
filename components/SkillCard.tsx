import React, { useState } from "react";

interface SkillCardProps {
  logo: React.ReactNode;
  title: string;
  disc: string;
  color: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ logo, title, disc, color }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex p-3.5 sm:p-4 items-center gap-4 sm:gap-6 rounded-[1.6rem] sm:rounded-[2rem] transition-all duration-500 cursor-default border group"
      style={{
        backgroundColor: hovered ? `${color}15` : "rgba(26,24,23,0.4)",
        borderColor: hovered ? `${color}40` : "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        boxShadow: hovered ? `0 10px 30px -10px ${color}20` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon box */}
      <div
        className="h-16 w-16 sm:h-20 sm:w-20 text-3xl sm:text-4xl lg:text-5xl flex justify-center items-center rounded-2xl sm:rounded-[1.5rem] transition-all duration-500 shrink-0 border border-white/[0.03]"
        style={{
          backgroundColor: hovered ? `${color}25` : "rgba(37,35,33,0.8)",
          color: hovered ? color : "#888",
          transform: hovered ? "scale(1.08) rotate(4deg)" : "scale(1) rotate(0deg)",
          boxShadow: hovered ? `inset 0 0 20px ${color}30` : "none",
        }}
      >
        {logo}
      </div>

      <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0">
        <h3
          className="text-lg sm:text-2xl font-bold tracking-tight transition-colors duration-300 truncate"
          style={{ color: hovered ? color : "#ffffff" }}
        >
          {title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">{disc}</p>
      </div>
    </div>
  );
};

export default SkillCard;
