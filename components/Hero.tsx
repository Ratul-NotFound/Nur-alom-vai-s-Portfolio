"use client";

import React from "react";
import { Heading } from "./Heading";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-2 sm:pt-4 pb-12 flex flex-col gap-8">
      {/* Title */}
      <Heading FWord="SOFTWARE" LWord="ENGINEER" />

      {/* Paragraph */}
      <p className="text-sm sm:text-base text-[#a8a199] max-w-2xl leading-relaxed text-left">
        Passionate about designing deep convolutional vision systems, Explainable AI (Grad-CAM), and edge architectures. Specialize in transforming neural research models into robust production software.
      </p>

      {/* Stats - 3 Columns (Exact Reference Style) */}
      <div className="flex flex-wrap justify-start items-center gap-8 sm:gap-16 pt-2">
        <div className="flex flex-col items-start group">
          <h3 className="text-white font-black text-3xl sm:text-5xl group-hover:text-[#ea580c] transition-colors duration-300">
            1+
          </h3>
          <span className="text-[11px] font-mono font-bold tracking-wider text-[#6e675f] uppercase mt-1">
            YEARS OF EXPERIENCE
          </span>
        </div>

        <div className="flex flex-col items-start group">
          <h3 className="text-white font-black text-3xl sm:text-5xl group-hover:text-[#ea580c] transition-colors duration-300">
            3+
          </h3>
          <span className="text-[11px] font-mono font-bold tracking-wider text-[#6e675f] uppercase mt-1">
            PROJECTS COMPLETED
          </span>
        </div>

        <div className="flex flex-col items-start group">
          <h3 className="text-white font-black text-3xl sm:text-5xl group-hover:text-[#ea580c] transition-colors duration-300">
            01+
          </h3>
          <span className="text-[11px] font-mono font-bold tracking-wider text-[#6e675f] uppercase mt-1">
            IEEE PUBLICATION
          </span>
        </div>

        <div className="flex flex-col items-start group">
          <h3 className="text-white font-black text-3xl sm:text-5xl group-hover:text-[#ea580c] transition-colors duration-300">
            3.63
          </h3>
          <span className="text-[11px] font-mono font-bold tracking-wider text-[#6e675f] uppercase mt-1">
            CGPA (DIU SCHOLAR)
          </span>
        </div>
      </div>

      {/* 2 Service Cards (Exact Reference Style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div
          className="p-6 rounded-[24px] border transition-all hover:border-[#ea580c]/50 flex items-start gap-4 group"
          style={{ backgroundColor: "#1a1816", borderColor: "#282522" }}
        >
          <div className="w-12 h-12 rounded-2xl bg-[#ea580c]/10 border border-[#ea580c]/20 text-[#ea580c] flex items-center justify-center shrink-0 text-xl group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div>
            <h4 className="text-base font-bold text-white mb-1">AI &amp; Deep Learning</h4>
            <p className="text-xs text-[#a8a199] leading-relaxed">
              Convolutional neural networks, transfer learning, and dataset curation.
            </p>
          </div>
        </div>

        <div
          className="p-6 rounded-[24px] border transition-all hover:border-[#10b981]/50 flex items-start gap-4 group"
          style={{ backgroundColor: "#1a1816", borderColor: "#282522" }}
        >
          <div className="w-12 h-12 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] flex items-center justify-center shrink-0 text-xl group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <div>
            <h4 className="text-base font-bold text-white mb-1">Computer Vision &amp; XAI</h4>
            <p className="text-xs text-[#a8a199] leading-relaxed">
              Biomedical polyp segmentation, boundary delineation, and Grad-CAM visual heatmaps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
