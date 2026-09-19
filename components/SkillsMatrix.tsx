"use client";

import React from "react";
import { Heading } from "./Heading";

interface SkillItem {
  title: string;
  sub: string;
  icon: string;
}

export const SkillsMatrix: React.FC = () => {
  const skills: SkillItem[] = [
    { title: "Python & Deep Learning", sub: "PyTorch, TensorFlow, CNN", icon: "🧠" },
    { title: "Computer Vision & XAI", sub: "Grad-CAM, OpenCV, Segmentation", icon: "👁️" },
    { title: "FastAPI & REST APIs", sub: "Decoupled Backend Services", icon: "⚡" },
    { title: "MySQL & Databases", sub: "SQLAlchemy ORM, Normalized DB", icon: "🗄️" },
    { title: "Data Science & Modeling", sub: "NumPy, Pandas, Scikit-Learn", icon: "📊" },
    { title: "Full-Stack Web Dev", sub: "Streamlit, PHP, AJAX, JavaScript", icon: "🌐" },
    { title: "Git, Docker & Linux", sub: "DevOps & Version Control", icon: "🛠️" },
    { title: "Scientific LaTeX & Agile", sub: "Research Writing & Scrum Workflows", icon: "📄" },
  ];

  return (
    <section id="skills" className="py-12 border-t border-[#282522] flex flex-col gap-8">
      {/* Title */}
      <Heading FWord="TECHNICAL" LWord="SKILLS" />

      {/* 2-Column Grid (Exact Reference Style - Image 4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((item, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-[24px] border transition-all hover:border-[#ea580c]/50 hover:bg-[#1f1d1a] flex items-center gap-4 group shadow-lg"
            style={{ backgroundColor: "#1a1816", borderColor: "#282522" }}
          >
            {/* Icon Container */}
            <div className="w-14 h-14 rounded-2xl bg-[#24211d] border border-[#2e2a26] flex items-center justify-center shrink-0 text-2xl shadow-inner group-hover:scale-105 transition-transform">
              {item.icon}
            </div>

            <div className="flex flex-col">
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#ea580c] transition-colors">
                {item.title}
              </h3>
              <span className="text-xs font-mono text-[#a8a199] mt-0.5">
                {item.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
