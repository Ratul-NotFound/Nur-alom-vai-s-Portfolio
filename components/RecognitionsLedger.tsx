"use client";

import React, { useState } from "react";

interface RecognitionItem {
  year: string;
  title: string;
  org: string;
  category: "leadership" | "award";
}

export const RecognitionsLedger: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "leadership" | "award">("all");

  const recognitions: RecognitionItem[] = [
    // 9 Leadership
    {
      year: "2025–2026",
      title: "Department Representative — ResearchOrbit",
      org: "Representing department research initiatives, research community coordination, and student collaboration.",
      category: "leadership",
    },
    {
      year: "2024–2025",
      title: "Media Secretary — DIU Computer & Programming Club",
      org: "Directed media strategy, visual communications, and public branding for the premier university club (DIU CPC).",
      category: "leadership",
    },
    {
      year: "2023–2024",
      title: "Executive Member, Research Wing — DIU CPC",
      org: "Mentored junior students, organized technical sessions, and facilitated deep learning research study cohorts.",
      category: "leadership",
    },
    {
      year: "2022–2023",
      title: "Associate Member, Research Wing — DIU CPC",
      org: "Engaged in machine learning workshops, paper review discussions, and exploratory deep learning study circles.",
      category: "leadership",
    },
    {
      year: "2023–2024",
      title: "Campus Leader — SelDev Academy",
      org: "Organized student programming skill development programs and software engineering workshops across campus.",
      category: "leadership",
    },
    {
      year: "Nov 2025",
      title: "Logistics & Protocol Volunteer — DIU Job Utsob 2025",
      org: "Managed corporate delegate protocol, company booth allocations, and attendee operational logistics.",
      category: "leadership",
    },
    {
      year: "2024",
      title: "Official Photographer & Volunteer — ICPC Asia Dhaka Regional",
      org: "Official event coverage, contestant protocol, and operational logistics for the premier ACM-ICPC Asia Dhaka Regional.",
      category: "leadership",
    },
    {
      year: "2025",
      title: "Photographer & Documentary Volunteer — National Math Olympiad",
      org: "Visual documentation and media archives for the National Undergraduate Mathematical Olympiad.",
      category: "leadership",
    },
    {
      year: "2024",
      title: "Photographer — JCPC 2024",
      org: "Event documentation and media coverage for the Junior Competitive Programming Contest.",
      category: "leadership",
    },

    // 10 Honors & Awards
    {
      year: "2026",
      title: "Building Skills for TAF & Apprenticeship — With Distinction",
      org: "Completed specialized professional apprenticeship qualification with Distinction recognition (GoEdu).",
      category: "award",
    },
    {
      year: "2025",
      title: "Certificate of Appreciation — Erasmus Mundus Webinar",
      org: "Awarded by DIU Research Society for organizing European Joint Masters scholarship guidance session.",
      category: "award",
    },
    {
      year: "2024–2025",
      title: "Media Secretary Recognition — DIU CPC",
      org: "Executive committee leadership recognition for exceptional branding operations at DIU Computer & Programming Club.",
      category: "award",
    },
    {
      year: "2025",
      title: "Logistics & Protocol Volunteer Distinction — DIU Job Utsob",
      org: "Recognized for execution of VIP protocol and recruiter management at nationwide job fair.",
      category: "award",
    },
    {
      year: "2024",
      title: "Volunteer Service Award — ICPC Asia Dhaka Regional",
      org: "Awarded for voluntary service and media contribution at the ACM-ICPC Asia Dhaka Regional.",
      category: "award",
    },
    {
      year: "Spring 2024",
      title: "Participant — Unlock the Algorithm Programming Contest",
      org: "Competitive algorithmic contest testing data structures and algorithmic speed.",
      category: "award",
    },
    {
      year: "2023",
      title: "Participant — Engineering Summit, IDEB Bhaban (YBFS)",
      org: "Participated in national youth engineering symposium addressing modern technological challenges.",
      category: "award",
    },
    {
      year: "Fall 2022",
      title: "Participant — Take-Off Programming Contest",
      org: "First-year collegiate competitive programming tournament testing algorithmic problem-solving.",
      category: "award",
    },
    {
      year: "2022–2026",
      title: "Academic Merit Scholarship — Daffodil International University",
      org: "Awarded up to 50% tuition waiver throughout the undergraduate degree program for academic excellence.",
      category: "award",
    },
    {
      year: "2014",
      title: "JSC Merit Scholarship — Rajshahi Education Board",
      org: "Awarded government competitive talent merit scholarship for academic standing in Rajshahi Division.",
      category: "award",
    },
  ];

  const filteredItems = recognitions.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section id="leadership" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider border mb-3"
               style={{ backgroundColor: "var(--bg-pill)", borderColor: "var(--border-subtle)", color: "var(--border-accent)" }}>
            <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--border-accent)" }} />
            <span>Honors &amp; Co-Curricular Ledger</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Leadership &amp; Recognitions
          </h2>
          <span className="accent-bar" />
          <p className="mt-3 text-sm sm:text-base max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Community leadership, competitive programming achievements, academic merit scholarships, and volunteer service.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-1.5 p-1 rounded-xl border font-mono text-xs"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-card)" }}
          >
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filter === "all"
                  ? "bg-[var(--border-accent)] text-white shadow"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              All Recognitions (19)
            </button>
            <button
              onClick={() => setFilter("leadership")}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filter === "leadership"
                  ? "bg-[var(--border-accent)] text-white shadow"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              Leadership &amp; Community (9)
            </button>
            <button
              onClick={() => setFilter("award")}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filter === "award"
                  ? "bg-[var(--border-accent)] text-white shadow"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              Honors &amp; Awards (10)
            </button>
          </div>
        </div>

        {/* Minimalist Ledger Table */}
        <div
          className="rounded-2xl border overflow-hidden divide-y"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-card)",
            // @ts-expect-error Tailwind divider style
            "--tw-divide-y-reverse": "0",
            divideColor: "var(--border-subtle)",
          }}
        >
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:px-6 sm:py-4 transition-colors hover:bg-[var(--bg-pill)] border-b last:border-b-0"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <div className="w-28 shrink-0 font-mono text-xs text-[var(--text-muted)] font-semibold">
                {item.year}
              </div>

              <div className="flex-1 min-w-0 pr-4">
                <div className="text-sm font-bold text-[var(--text-primary)] mb-0.5">
                  {item.title}
                </div>
                <div className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {item.org}
                </div>
              </div>

              <span
                className={`shrink-0 font-mono text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                  item.category === "leadership"
                    ? "text-blue-400 border-blue-500/30 bg-blue-500/10"
                    : "text-amber-400 border-amber-500/30 bg-amber-500/10"
                }`}
              >
                {item.category === "leadership" ? "Leadership" : "Honor / Award"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
