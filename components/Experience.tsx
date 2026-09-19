"use client";

import React from "react";
import { Heading } from "./Heading";

interface ExperienceItem {
  role: string;
  desc: string;
  date: string;
  isFeatured?: boolean;
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: "Campus Bird Intern — Research & Development",
      desc: "Selected in top 10% decile nationwide for R&D. Evaluated GYC competitor models, designed Skill Jobs vacancy intelligence architecture, and prepared feasibility reports for AI automation.",
      date: "JULY, 2026 – PRESENT",
      isFeatured: true,
    },
    {
      role: "Selected Apprentice Programmer — DIU HRDI",
      desc: "Top 8 assessment ranking nationwide. Completed intensive problem-solving Bootcamp and earned 'Building Skills for TAF' with Distinction from GoEdu. Evaluated AI pipelines in Shark Tank pitches.",
      date: "JULY, 2026 – PRESENT",
      isFeatured: false,
    },
    {
      role: "Media Secretary & Department Representative",
      desc: "Directed visual communications and public branding for DIU Computer & Programming Club (DIU CPC) and represented department research initiatives at ResearchOrbit.",
      date: "2024 – 2026",
      isFeatured: false,
    },
  ];

  return (
    <section id="experience" className="py-12 border-t border-[#282522] flex flex-col gap-8">
      {/* Title */}
      <Heading FWord="RELEVANT" LWord="EXPERIENCE" />

      {/* Experience Cards */}
      <div className="flex flex-col gap-5">
        {experiences.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-[28px] p-6 sm:p-7 border transition-all hover:border-[#ea580c]/50 flex flex-col gap-3 shadow-lg ${
              item.isFeatured ? "bg-[#221f1b]" : "bg-[#1a1816]"
            }`}
            style={{ borderColor: "#282522" }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                    item.isFeatured
                      ? "bg-[#ea580c] text-white shadow-xl"
                      : "bg-[#24211d] text-[#a8a199] border border-[#2e2a26]"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {item.role}
                </h3>
              </div>

              <span className="text-[#6e675f] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#a8a199] leading-relaxed pl-0 sm:pl-[60px]">
              {item.desc}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ea580c] pl-0 sm:pl-[60px] pt-1 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#ea580c]" />
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
