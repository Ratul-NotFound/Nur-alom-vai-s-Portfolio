"use client";

import React, { useState, useEffect } from "react";

export const FloatingDock: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 250;
      let current = "hero";

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          current = el.getAttribute("id") || "hero";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dockItems = [
    {
      id: "hero",
      label: "Home",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "projects",
      label: "Projects",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      id: "experience",
      label: "Experience",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "skills",
      label: "Skills",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: "research",
      label: "Research",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: "contact",
      label: "Contact",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Top Floating Dock (Small/Medium screens) */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 lg:hidden pointer-events-none">
        <nav
          className="pointer-events-auto flex items-center gap-1.5 p-1.5 rounded-full border shadow-2xl backdrop-blur-xl"
          style={{
            backgroundColor: "rgba(18, 19, 26, 0.92)",
            borderColor: "#232736",
          }}
        >
          {dockItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center justify-center h-8 w-8 rounded-full transition-all ${
                  isActive
                    ? "bg-[#f97316] text-white shadow-md font-bold scale-105"
                    : "text-[#9aa2b4] hover:text-white hover:bg-[#181a24]"
                }`}
                title={item.label}
              >
                {item.icon}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Right Floating Dock (Desktop - Image 5 style) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col pointer-events-none">
        <nav
          className="pointer-events-auto flex flex-col items-center gap-2 p-2 rounded-full border shadow-2xl backdrop-blur-xl"
          style={{
            backgroundColor: "rgba(18, 19, 26, 0.92)",
            borderColor: "#232736",
          }}
        >
          {dockItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center justify-center h-10 w-10 rounded-full transition-all group relative ${
                  isActive
                    ? "bg-[#f97316] text-white shadow-md font-bold scale-105"
                    : "text-[#9aa2b4] hover:text-white hover:bg-[#181a24]"
                }`}
                title={item.label}
              >
                {item.icon}

                {/* Floating tooltip on hover */}
                <span className="absolute right-12 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#12131a] text-white border border-[#232736] shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
};
