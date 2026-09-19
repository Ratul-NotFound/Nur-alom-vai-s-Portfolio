import React from "react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider border mb-3"
               style={{ backgroundColor: "var(--bg-pill)", borderColor: "var(--border-subtle)", color: "var(--border-accent)" }}>
            <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--border-accent)" }} />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Education &amp; References
          </h2>
          <span className="accent-bar" />
          <p className="mt-3 text-sm sm:text-base max-w-xl mx-auto text-[var(--text-secondary)]">
            Academic degrees, merit scholarships, and verified academic references.
          </p>
        </div>

        {/* Education Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Undergrad */}
          <div
            className="rounded-2xl p-5 border transition-all hover:border-[var(--border-accent)]"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-card)" }}
          >
            <div className="font-mono text-xs uppercase mb-1 text-[var(--border-accent)]">
              Undergraduate &bull; 2022–2026
            </div>
            <h3 className="text-sm sm:text-base font-bold mb-1 text-[var(--text-primary)]">
              B.Sc. in Computer Science &amp; Engineering
            </h3>
            <div className="text-xs mb-3 text-[var(--text-secondary)]">
              Daffodil International University
            </div>
            <span
              className="inline-flex rounded px-2.5 py-0.5 font-mono text-xs font-bold border"
              style={{
                backgroundColor: "var(--bg-pill)",
                borderColor: "var(--border-subtle)",
                color: "var(--accent-emerald)",
              }}
            >
              CGPA: 3.63 / 4.00
            </span>
          </div>

          {/* HSC */}
          <div
            className="rounded-2xl p-5 border transition-all hover:border-[var(--border-accent)]"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-card)" }}
          >
            <div className="font-mono text-xs uppercase mb-1 text-[var(--border-accent)]">
              Higher Secondary &bull; 2020
            </div>
            <h3 className="text-sm sm:text-base font-bold mb-1 text-[var(--text-primary)]">
              HSC — Science Division
            </h3>
            <div className="text-xs mb-3 text-[var(--text-secondary)]">
              Shahid A.H.M. Kamaruzzaman Govt. College
            </div>
            <span
              className="inline-flex rounded px-2.5 py-0.5 font-mono text-xs font-bold border"
              style={{
                backgroundColor: "var(--bg-pill)",
                borderColor: "var(--border-subtle)",
                color: "var(--accent-emerald)",
              }}
            >
              GPA: 5.00 / 5.00
            </span>
          </div>

          {/* SSC */}
          <div
            className="rounded-2xl p-5 border transition-all hover:border-[var(--border-accent)]"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-card)" }}
          >
            <div className="font-mono text-xs uppercase mb-1 text-[var(--border-accent)]">
              Secondary School &bull; 2017
            </div>
            <h3 className="text-sm sm:text-base font-bold mb-1 text-[var(--text-primary)]">
              SSC — Science Division
            </h3>
            <div className="text-xs mb-3 text-[var(--text-secondary)]">
              Al Helal Islami Academy &amp; College
            </div>
            <span
              className="inline-flex rounded px-2.5 py-0.5 font-mono text-xs font-bold border"
              style={{
                backgroundColor: "var(--bg-pill)",
                borderColor: "var(--border-subtle)",
                color: "var(--accent-emerald)",
              }}
            >
              GPA: 5.00 / 5.00
            </span>
          </div>

          {/* Academic Waiver */}
          <div
            className="rounded-2xl p-5 border transition-all hover:border-[var(--border-accent)]"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-card)" }}
          >
            <div className="font-mono text-xs uppercase mb-1 text-[var(--border-accent)]">
              Merit Honor &bull; 2022–2026
            </div>
            <h3 className="text-sm sm:text-base font-bold mb-1 text-[var(--text-primary)]">
              Academic Merit Scholarship
            </h3>
            <div className="text-xs mb-3 text-[var(--text-secondary)]">
              Awarded up to 50% tuition waiver for academic standing.
            </div>
            <span
              className="inline-flex rounded px-2.5 py-0.5 font-mono text-xs font-bold border text-[var(--border-accent)]"
              style={{
                backgroundColor: "var(--bg-pill)",
                borderColor: "var(--border-subtle)",
              }}
            >
              Top Merit Tier
            </span>
          </div>
        </div>

        {/* Professional References */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="rounded-2xl p-5 border transition-all hover:border-[var(--border-accent)]"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-card)" }}
          >
            <div className="font-mono text-xs uppercase mb-1 text-[var(--border-accent)]">
              Academic Reference
            </div>
            <h3 className="text-base font-bold mb-0.5 text-[var(--text-primary)]">
              Prof. Dr. Sheak Rashed Haider Noori
            </h3>
            <div className="text-xs mb-3 text-[var(--text-secondary)]">
              Head of Department, CSE &bull; Daffodil International University
            </div>
            <div className="flex flex-col gap-1 text-xs text-[var(--text-secondary)]">
              <a href="tel:+8801847140016" className="hover:text-blue-500 transition-colors">
                📞 +8801847140016
              </a>
              <a href="mailto:headcse@daffodilvarsity.edu.bd" className="hover:text-blue-500 transition-colors">
                ✉️ headcse@daffodilvarsity.edu.bd
              </a>
            </div>
          </div>

          <div
            className="rounded-2xl p-5 border transition-all hover:border-[var(--border-accent)]"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-card)" }}
          >
            <div className="font-mono text-xs uppercase mb-1 text-[var(--border-accent)]">
              Industry Reference
            </div>
            <h3 className="text-base font-bold mb-0.5 text-[var(--text-primary)]">
              Dewan Ashiquzzaman
            </h3>
            <div className="text-xs mb-3 text-[var(--text-secondary)]">
              Chief Information Security Officer (CISO) &bull; The KOW Company
            </div>
            <div className="flex flex-col gap-1 text-xs text-[var(--text-secondary)]">
              <a href="tel:+8801737766490" className="hover:text-blue-500 transition-colors">
                📞 +8801737766490
              </a>
              <a href="mailto:almas@thekowcompany.com" className="hover:text-blue-500 transition-colors">
                ✉️ almas@thekowcompany.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
