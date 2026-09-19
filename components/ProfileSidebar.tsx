"use client";

import React from "react";
import Image from "next/image";

export const ProfileSidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-[320px] lg:shrink-0 lg:sticky lg:top-12 self-start">
      <div
        className="rounded-[28px] p-6 sm:p-7 border shadow-2xl flex flex-col items-center text-center transition-all"
        style={{
          backgroundColor: "#1a1816",
          borderColor: "#282522",
        }}
      >
        {/* Photo with aspect ratio */}
        <div className="relative w-full aspect-[533/660] rounded-2xl overflow-hidden bg-[#24211d] mb-4 group shadow-xl">
          <Image
            src="/profile.jpg"
            alt="Md. Nur Alam"
            fill
            priority
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Available for Work Pill */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center px-4 py-1.5 rounded-full bg-[#ea580c] text-white text-[11px] font-bold shadow-xl whitespace-nowrap">
            <span>Available for Work</span>
          </div>
        </div>

        {/* Name with Orange Accent Underline */}
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Md. Nur Alam
        </h2>
        <div className="w-12 h-1 bg-[#ea580c] rounded-full my-1.5" />

        {/* Subtitle Statement */}
        <p className="text-xs text-[#a8a199] leading-relaxed max-w-[260px] mb-4">
          A <strong className="text-white font-bold">Software Engineer &amp; AI Researcher</strong> who has developed innovative deep learning and computer vision solutions.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3 mb-5 text-[#a8a199]">
          <a
            href="https://github.com/Nur-Alam-1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#24211d] border border-[#2e2a26] hover:text-white hover:border-[#ea580c] transition-all"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a
            href="https://linkedin.com/in/md-nur-alam"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#24211d] border border-[#2e2a26] hover:text-white hover:border-[#ea580c] transition-all"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a
            href="mailto:mdnuralam6498@gmail.com"
            className="p-2.5 rounded-full bg-[#24211d] border border-[#2e2a26] hover:text-white hover:border-[#ea580c] transition-all"
            aria-label="Email"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </a>
          <a
            href="tel:+8801312837622"
            className="p-2.5 rounded-full bg-[#24211d] border border-[#2e2a26] hover:text-white hover:border-[#ea580c] transition-all"
            aria-label="Call"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          </a>
        </div>

        {/* Action Button: DOWNLOAD CV */}
        <a
          href="#contact"
          className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full font-extrabold text-xs bg-white text-black hover:bg-neutral-200 transition-all shadow-xl uppercase tracking-wider group"
        >
          <span>DOWNLOAD CV</span>
          <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </a>
      </div>
    </aside>
  );
};
