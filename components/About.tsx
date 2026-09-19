"use client";

import React from "react";

export const About: React.FC = () => {
  const services = [
    {
      title: "AI & Deep Learning",
      iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      desc: "Training convolutional neural architectures, transfer learning, and deep neural classifiers.",
      chips: ["Python", "TensorFlow", "CNN", "Transfer Learning"],
    },
    {
      title: "Computer Vision & XAI",
      iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      desc: "Semantic segmentation, boundary delineation, and Grad-CAM visual attention verification.",
      chips: ["OpenCV", "Grad-CAM", "Polyp Seg", "Image Analysis"],
    },
    {
      title: "Backend & REST APIs",
      iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      desc: "Building robust decoupled backend services, REST APIs, and interactive Streamlit applications.",
      chips: ["FastAPI", "Streamlit", "OOP", "REST API"],
    },
    {
      title: "Databases & Storage",
      iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7zM4 12c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3" />
        </svg>
      ),
      desc: "Designing normalized database schemas, query optimization, and SQLAlchemy ORM layers.",
      chips: ["MySQL", "SQLAlchemy", "SQLite", "Data Modeling"],
    },
    {
      title: "Data Science & Analysis",
      iconBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      desc: "Dataset curation, exploratory data analysis, feature engineering, and statistical benchmarking.",
      chips: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    },
    {
      title: "Strategic R&D & Intelligence",
      iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      desc: "Corporate market intelligence, vacancy architecture, and feasibility analysis for AI automation.",
      chips: ["Market Research", "SWOT", "Platform R&D", "Technical Writing"],
    },
  ];

  return (
    <section id="about" className="py-12 border-t border-[var(--border-subtle)]">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold font-mono uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
          <span>My Expertise</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Skills &amp; <span className="text-blue-500">Services</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)]">
          Synthesizing deep learning research with end-to-end software engineering.
        </p>
      </div>

      {/* 6 Cards Grid (Reference Style - Image 2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl border transition-all hover:border-blue-500/50 hover:shadow-xl flex flex-col justify-between"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-card)" }}
          >
            <div>
              {/* Icon Container */}
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${item.iconBg}`}>
                {item.icon}
              </div>

              <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                {item.desc}
              </p>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
              {item.chips.map((chip, cIdx) => (
                <span
                  key={cIdx}
                  className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-[var(--bg-pill)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
