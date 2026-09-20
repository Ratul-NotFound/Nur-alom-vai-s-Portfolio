"use client";

import React, { useState } from "react";
import Heading from "./Heading";

const recognitions = [
  // 1-9 Leadership & Community
  {
    role: "Department Representative — ResearchOrbit",
    organization: "Representing department research initiatives, research community coordination, and student collaboration.",
    year: "2025–2026",
    type: "leadership",
  },
  {
    role: "Media Secretary — DIU Computer & Programming Club",
    organization: "Directed media strategy, visual communications, and public branding for the premier university programming club (DIU CPC).",
    year: "2024–2025",
    type: "leadership",
  },
  {
    role: "Executive Member, Research Wing — DIU CPC",
    organization: "Mentored junior students, organized technical sessions, and facilitated deep learning research study cohorts.",
    year: "2023–2024",
    type: "leadership",
  },
  {
    role: "Associate Member, Research Wing — DIU CPC",
    organization: "Engaged in machine learning workshops, paper review discussions, and exploratory deep learning study circles.",
    year: "2022–2023",
    type: "leadership",
  },
  {
    role: "Campus Leader — SelDev Academy",
    organization: "Organized student programming skill development programs and software engineering workshops across campus.",
    year: "2023–2024",
    type: "leadership",
  },
  {
    role: "Logistics & Protocol Volunteer — DIU Job Utsob 2025",
    organization: "Managed corporate delegate protocol, company booth allocations, and attendee operational logistics (Nov 28–29, 2025).",
    year: "Nov 2025",
    type: "leadership",
  },
  {
    role: "Official Photographer & Volunteer — ICPC Asia Dhaka Regional Contest",
    organization: "Official event coverage, contestant protocol, and operational logistics for the premier ACM-ICPC Asia Dhaka Regional.",
    year: "2024",
    type: "leadership",
  },
  {
    role: "Photographer & Documentary Volunteer — National Math Olympiad",
    organization: "Visual documentation and media archives for the National Undergraduate Mathematical Olympiad.",
    year: "2025",
    type: "leadership",
  },
  {
    role: "Photographer — JCPC 2024",
    organization: "Event documentation and media coverage for the Junior Competitive Programming Contest.",
    year: "2024",
    type: "leadership",
  },
  // 10-19 Honors & Awards
  {
    role: "Building Skills for TAF & Apprenticeship — With Distinction",
    organization: "Completed specialized professional apprenticeship qualification with Distinction recognition (GoEdu).",
    year: "2026",
    type: "award",
  },
  {
    role: "Certificate of Appreciation — Erasmus Mundus Scholarship Webinar",
    organization: "Awarded by DIU Research Society for organizing the European Joint Masters guidance session.",
    year: "2025",
    type: "award",
  },
  {
    role: "Media Secretary Recognition — DIU CPC",
    organization: "Executive committee leadership recognition for exceptional branding operations at DIU Computer & Programming Club.",
    year: "2024–2025",
    type: "award",
  },
  {
    role: "Logistics & Protocol Volunteer Distinction — DIU Job Utsob 2025",
    organization: "Recognized for execution of VIP protocol and recruiter management at nationwide job fair.",
    year: "2025",
    type: "award",
  },
  {
    role: "Volunteer Service Award — ICPC Asia Dhaka Regional Contest",
    organization: "Awarded for voluntary service and media contribution at the ACM-ICPC Asia Dhaka Regional.",
    year: "2024",
    type: "award",
  },
  {
    role: "Participant — Unlock the Algorithm Programming Contest",
    organization: "Competitive algorithmic contest testing data structures and algorithmic speed.",
    year: "Spring 2024",
    type: "award",
  },
  {
    role: "Participant — Engineering Summit, IDEB Bhaban (YBFS)",
    organization: "Participated in national youth engineering symposium addressing modern technological engineering challenges.",
    year: "2023",
    type: "award",
  },
  {
    role: "Participant — Take-Off Programming Contest",
    organization: "First-year collegiate competitive programming tournament testing algorithmic problem-solving.",
    year: "Fall 2022",
    type: "award",
  },
  {
    role: "Academic Merit Scholarship — Daffodil International University",
    organization: "Awarded up to 50% tuition waiver throughout the undergraduate degree program for academic excellence.",
    year: "2022–2026",
    type: "award",
  },
  {
    role: "JSC Merit Scholarship — Rajshahi Education Board",
    organization: "Awarded government competitive talent merit scholarship for academic standing in Rajshahi Division.",
    year: "2014",
    type: "award",
  },
];

export const Honors: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "leadership" | "award">("all");

  const filtered = recognitions.filter(
    (item) => filter === "all" || item.type === filter
  );

  return (
    <section id="honors" data-name="Honors" className="scroll-mt-28 flex flex-col gap-8">
      <div>
        <Heading FWord="HONORS &" LWord="LEADERSHIP" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "all", label: `All Recognitions (${recognitions.length})` },
          { id: "leadership", label: `Leadership & Community (9)` },
          { id: "award", label: `Honors & Awards (10)` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              filter === tab.id
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                : "bg-white/[0.04] text-gray-400 border border-white/[0.06] hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex flex-col gap-3">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="group p-4 sm:p-6 rounded-[1.6rem] sm:rounded-[1.8rem] bg-[#181715]/40 border border-white/[0.05] backdrop-blur-xl transition-all duration-300 hover:bg-[#1e1d1a]/70 hover:border-orange-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4"
          >
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-orange-500 font-mono text-xs font-semibold">
                  {item.year}
                </span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                  {item.type === "leadership" ? "Leadership" : "Honor / Award"}
                </span>
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg tracking-tight group-hover:text-orange-400 transition-colors">
                {item.role}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">
                {item.organization}
              </p>
            </div>

            <div className="shrink-0 self-start sm:self-center">
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/[0.04] text-gray-300 border border-white/[0.08] uppercase tracking-wider">
                {item.type === "leadership" ? "Leadership" : "Award"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Honors;
