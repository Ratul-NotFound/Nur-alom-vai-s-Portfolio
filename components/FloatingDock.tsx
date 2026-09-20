"use client";

import React from "react";
import { GoHome, GoFileSubmodule } from "react-icons/go";
import { CgWorkAlt } from "react-icons/cg";
import { GrTechnology } from "react-icons/gr";
import { LuGraduationCap, LuNotebookPen } from "react-icons/lu";
import { RiBookOpenLine } from "react-icons/ri";
import { FiAward } from "react-icons/fi";

interface FloatingDockProps {
  activeSection: string;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ activeSection }) => {
  const navItems = [
    { href: "#home", label: "home", title: "Home", icon: GoHome },
    { href: "#projects", label: "projects", title: "Projects", icon: GoFileSubmodule },
    { href: "#experience", label: "experience", title: "Experience", icon: CgWorkAlt },
    { href: "#skills", label: "skills", title: "Skills", icon: GrTechnology },
    { href: "#research", label: "research", title: "Research", icon: RiBookOpenLine },
    { href: "#honors", label: "honors", title: "Honors & Leadership", icon: FiAward },
    { href: "#education", label: "education", title: "Education", icon: LuGraduationCap },
    { href: "#contact", label: "contact", title: "Contact", icon: LuNotebookPen },
  ];

  return (
    <div
      className="fixed z-50 transition-all duration-500 ease-out
        bottom-4 left-1/2 -translate-x-1/2 max-w-[95vw]
        md:bottom-auto md:top-1/2 md:left-auto md:right-6 md:translate-x-0 md:-translate-y-1/2"
    >
      <nav
        className="nav-dock-animate text-white bg-[#1a1816]/95 backdrop-blur-xl flex items-center p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl border border-white/[0.09] shadow-[0_10px_35px_rgba(0,0,0,0.7)]
          flex-row gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar
          md:flex-col md:overflow-visible"
      >
        {navItems.map(({ href, label, title, icon: Icon }) => {
          const isActive = activeSection === label;
          return (
            <a
              key={label}
              href={href}
              aria-label={`Go to ${label} section`}
              title={title}
              className={`group relative shrink-0 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-110 active:scale-90 ${
                isActive ? "text-orange-500 bg-orange-500/15" : "text-gray-300"
              }`}
            >
              <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default FloatingDock;
