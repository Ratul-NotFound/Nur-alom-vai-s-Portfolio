"use client";

import React, { useState, useEffect } from "react";
import ProfileSidebar from "@/components/ProfileSidebar";
import FloatingDock from "@/components/FloatingDock";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import SkillsMatrix from "@/components/SkillsMatrix";
import Research from "@/components/Research";
import Honors from "@/components/Honors";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "experience", "skills", "research", "honors", "education", "contact"];
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#141311] text-white selection:bg-orange-500 selection:text-white relative">
      {/* Floating Navigation Dock */}
      <FloatingDock activeSection={activeSection} />

      {/* Master Layout Container */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:pr-20 lg:px-8 xl:pr-24 pt-4 sm:pt-14 pb-28 md:pb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-14 items-start relative">
          {/* Left Column: Fixed / Sticky Profile Card */}
          <aside className="w-full max-w-[360px] mx-auto lg:mx-0 lg:w-[310px] xl:w-[340px] lg:shrink-0 lg:sticky lg:top-14 self-start z-30">
            <ProfileSidebar />
          </aside>

          {/* Right Column: Main Content Flow */}
          <div className="flex-1 min-w-0 w-full flex flex-col gap-12 sm:gap-16 lg:gap-20">
            <Hero />
            <Projects />
            <Experience />
            <SkillsMatrix />
            <Research />
            <Honors />
            <Education />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
