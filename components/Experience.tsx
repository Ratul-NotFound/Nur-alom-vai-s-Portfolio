import React from "react";
import Heading from "./Heading";
import ExperienceCard from "./ExperienceCard";

export const Experience: React.FC = () => {
  return (
    <section id="experience" data-name="Experience" className="scroll-mt-28 flex flex-col gap-8">
      <div>
        <Heading FWord="RELEVANT" LWord="EXPERIENCE" />
      </div>

      <div className="mt-2 flex flex-col gap-3">
        <ExperienceCard
          heading="Campus Bird Intern — Research & Development"
          para="Placed in Top 10% nationwide for R&D. Formulated Skill Jobs vacancy intelligence architecture, conducted competitor market research, and prepared actionable AI automation business deliverables."
          date="July 2026 – Present"
          active
        />
        <ExperienceCard
          heading="Selected Apprentice Programmer — DIU HRDI"
          para="Ranked Top 8 in nationwide 100-mark assessment. Completed problem-solving Bootcamp with GoEdu Distinction. Applied root-cause analysis, SWOT, and KPI evaluations to optimize operational AI workflows."
          date="July 2026 – Present"
        />
        <ExperienceCard
          heading="Research Wing Lead & Media Secretary — DIU CPC"
          para="Authored IEEE RAAICON 2026 research paper, curated open benchmark dataset on Mendeley Data, directed branding strategy, and solved 300+ algorithmic problems on online judges."
          date="2022 – 2026"
        />
      </div>
    </section>
  );
};

export default Experience;
