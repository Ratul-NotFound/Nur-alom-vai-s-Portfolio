"use client";

import React from "react";
import { Heading } from "./Heading";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: { label: string; dot: string }[];
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: "mango-xai",
      title: "Amrapali Mango Disease XAI",
      subtitle: "AI Cultivar-Specific Disease Diagnostic & Grad-CAM",
      tags: [
        { label: "Python", dot: "bg-yellow-400" },
        { label: "TensorFlow", dot: "bg-orange-500" },
        { label: "CNN", dot: "bg-blue-500" },
        { label: "Grad-CAM", dot: "bg-purple-500" },
      ],
    },
    {
      id: "crm-system",
      title: "Enterprise CRM Platform",
      subtitle: "Sales Pipeline & Client Intelligence System",
      tags: [
        { label: "Python", dot: "bg-yellow-400" },
        { label: "Streamlit", dot: "bg-red-400" },
        { label: "SQLAlchemy", dot: "bg-amber-500" },
        { label: "MySQL", dot: "bg-blue-500" },
      ],
    },
    {
      id: "hotel-system",
      title: "Hotel Management REST API",
      subtitle: "FastAPI Decoupled Hospitality Microservice",
      tags: [
        { label: "FastAPI", dot: "bg-teal-400" },
        { label: "Streamlit", dot: "bg-red-400" },
        { label: "MySQL", dot: "bg-blue-500" },
        { label: "REST API", dot: "bg-emerald-400" },
      ],
    },
    {
      id: "hospital-system",
      title: "Hospital Medical Portal",
      subtitle: "Multi-User Clinical Records & Appointments",
      tags: [
        { label: "PHP", dot: "bg-indigo-400" },
        { label: "MySQL", dot: "bg-blue-500" },
        { label: "JavaScript", dot: "bg-yellow-500" },
        { label: "Bootstrap", dot: "bg-purple-500" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-12 border-t border-[#282522] flex flex-col gap-8">
      {/* Title (Exact Reference Style) */}
      <Heading FWord="RECENT" LWord="PROJECTS" />

      {/* Project Cards (Exact Reference Style) */}
      <div className="flex flex-col gap-6">
        {projects.map((proj) => (
          <article
            key={proj.id}
            className="rounded-[28px] p-6 sm:p-7 border transition-all hover:border-[#ea580c]/50 hover:bg-[#1f1d1a] flex flex-col sm:flex-row items-center gap-6 group shadow-lg"
            style={{ backgroundColor: "#1a1816", borderColor: "#282522" }}
          >
            {/* Left Preview UI Frame */}
            <div className="w-full sm:w-[240px] aspect-[16/10] rounded-2xl bg-[#141311] border border-[#2e2a26] p-3.5 flex flex-col justify-between shrink-0 shadow-inner group-hover:scale-[1.02] transition-transform">
              <div className="flex items-center justify-between border-b border-[#2e2a26] pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <span className="w-2 h-2 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[9px] font-mono text-[#6e675f]">PROD_APP</span>
              </div>

              <div className="flex flex-col items-center justify-center py-2 text-center">
                <span className="text-2xl mb-1">
                  {proj.id.includes("mango") ? "🌿" : proj.id.includes("crm") ? "📊" : proj.id.includes("hotel") ? "🏨" : "🏥"}
                </span>
                <span className="text-[10px] font-mono font-bold text-white/80 uppercase truncate max-w-[160px]">
                  {proj.id.replace("-", " ")}
                </span>
              </div>

              <div className="flex items-center justify-between text-[9px] font-mono text-[#6e675f] pt-1.5 border-t border-[#2e2a26]">
                <span>STATUS</span>
                <span className="text-emerald-400 font-bold">READY</span>
              </div>
            </div>

            {/* Right Details */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-[#ea580c] transition-colors">
                {proj.title}
              </h3>
              <div className="text-xs text-[#a8a199] mb-5 font-mono">
                {proj.subtitle}
              </div>

              {/* Tags with Dots */}
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#24211d] border border-[#2e2a26] text-xs font-mono font-medium text-white shadow-sm"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${tag.dot}`} />
                    <span>{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
