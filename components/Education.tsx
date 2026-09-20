import React from "react";
import Heading from "./Heading";
import { FiPhone, FiMail } from "react-icons/fi";

export const Education: React.FC = () => {
  const degrees = [
    {
      level: "UNDERGRADUATE • 2022–2026",
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Daffodil International University",
      score: "CGPA: 3.63 / 4.00",
      highlight: "Dean's Honor List",
    },
    {
      level: "HIGHER SECONDARY • 2020",
      degree: "HSC — Science Division",
      institution: "Shahid A.H.M. Kamaruzzaman Govt. College",
      score: "GPA: 5.00 / 5.00",
      highlight: "Dinajpur Board Merit",
    },
    {
      level: "SECONDARY SCHOOL • 2017",
      degree: "SSC — Science Division",
      institution: "Al Helal Islami Academy & College",
      score: "GPA: 5.00 / 5.00",
      highlight: "Golden Distinction",
    },
  ];

  const references = [
    {
      type: "ACADEMIC REFERENCE",
      name: "Prof. Dr. Sheak Rashed Haider Noori",
      designation: "Head of Department, CSE",
      org: "Daffodil International University",
      phone: "+8801847140016",
      email: "headcse@daffodilvarsity.edu.bd",
    },
    {
      type: "INDUSTRY REFERENCE",
      name: "Dewan Ashiquzzaman",
      designation: "Chief Information Security Officer (CISO)",
      org: "The KOW Company",
      phone: "+8801737766490",
      email: "almas@thekowcompany.com",
    },
  ];

  return (
    <section id="education" data-name="Education" className="scroll-mt-28 flex flex-col gap-8">
      <div>
        <Heading FWord="ACADEMIC" LWord="BACKGROUND" />
      </div>

      {/* Degrees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {degrees.map((deg, i) => (
          <div
            key={i}
            className="group flex flex-col justify-between p-6 sm:p-7 rounded-[2rem] bg-[#181715]/40 border border-white/[0.06] backdrop-blur-xl transition-all duration-500 hover:bg-[#1e1d1a]/70 hover:border-orange-500/30 hover:shadow-[0_20px_50px_-15px_rgba(249,115,22,0.12)]"
          >
            <div className="space-y-2">
              <span className="text-orange-500 text-xs font-bold uppercase tracking-wider block">
                {deg.level}
              </span>
              <h3 className="text-white font-bold text-lg leading-snug tracking-tight group-hover:text-orange-400 transition-colors">
                {deg.degree}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm font-medium">
                {deg.institution}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
              <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-orange-500/10 text-orange-500 border border-orange-500/25 whitespace-nowrap">
                {deg.score}
              </span>
              <span className="text-xs text-gray-400 font-medium text-right truncate">
                {deg.highlight}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Verified References */}
      <div className="mt-4">
        <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          Verified Academic &amp; Industry References
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {references.map((ref, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[2rem] bg-[#181715]/40 border border-white/[0.06] backdrop-blur-xl transition-all duration-500 hover:bg-[#1e1d1a]/70 hover:border-orange-500/30"
            >
              <span className="text-orange-500 text-[11px] font-bold uppercase tracking-wider block mb-1">
                {ref.type}
              </span>
              <h4 className="text-white font-bold text-lg tracking-tight mb-1">
                {ref.name}
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm mb-4">
                {ref.designation} • {ref.org}
              </p>

              <div className="flex flex-col gap-1.5 pt-3 border-t border-white/[0.06] text-xs text-gray-400">
                <a
                  href={`tel:${ref.phone}`}
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors"
                >
                  <FiPhone size={13} className="text-orange-500" />
                  <span>{ref.phone}</span>
                </a>
                <a
                  href={`mailto:${ref.email}`}
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors"
                >
                  <FiMail size={13} className="text-orange-500" />
                  <span>{ref.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
