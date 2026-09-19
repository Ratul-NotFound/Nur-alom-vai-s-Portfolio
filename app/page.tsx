import { ProfileSidebar } from "@/components/ProfileSidebar";
import { FloatingDock } from "@/components/FloatingDock";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { Research } from "@/components/Research";
import { RecognitionsLedger } from "@/components/RecognitionsLedger";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141311] text-white selection:bg-[#ea580c] selection:text-white">
      {/* Floating Navigation Dock (Exact Reference Style) */}
      <FloatingDock />

      {/* Master 2-Column Container */}
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
          {/* Left Column: Fixed / Sticky Profile Card */}
          <ProfileSidebar />

          {/* Right Column: Main Content Flow */}
          <div className="flex-1 min-w-0 w-full flex flex-col gap-6">
            <Hero />
            <Projects />
            <Experience />
            <SkillsMatrix />
            <Research />
            <RecognitionsLedger />
            <Education />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>

      {/* Quick Jump Command Palette */}
      <CommandPalette />
    </main>
  );
}
