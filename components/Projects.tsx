"use client";

import React, { useState } from "react";
import Heading from "./Heading";
import RecentProjectCard from "./RecentProjectCard";
import { IoIosArrowForward } from "react-icons/io";
import { FaPython, FaPhp, FaReact } from "react-icons/fa";
import { SiTensorflow, SiFastapi, SiStreamlit, SiMysql, SiOpencv } from "react-icons/si";

export const projects = [
  {
    id: 1,
    heading: "Amrapali Mango Disease Classification with (XAI)",
    discr: "Cultivar-specific deep CNN diagnostic pipeline identifying 7 mango fruit diseases with Gradient-weighted Class Activation Mapping (Grad-CAM) visual explainability.",
    pic: "/project_mango.jpg",
    link: "https://github.com/mdnuralamrahi6498",
    tags: [
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
      { name: "CNN", icon: <SiOpencv className="text-[#5C3EE8]" /> },
      { name: "Grad-CAM (XAI)" },
      { name: "Transfer Learning" },
    ],
  },
  {
    id: 2,
    heading: "Customer Relationship Management (CRM) System",
    discr: "Enterprise software managing sales pipelines, customer follow-ups, ticketing, and transactional audit logging with strict Object-Oriented Programming (OOP) design.",
    pic: "/project_polyp.jpg",
    link: "https://github.com/mdnuralamrahi6498",
    tags: [
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "Streamlit", icon: <SiStreamlit className="text-[#FF4B4B]" /> },
      { name: "SQLAlchemy" },
      { name: "MySQL / SQLite", icon: <SiMysql className="text-[#00758F]" /> },
      { name: "OOP Architecture" },
    ],
  },
  {
    id: 3,
    heading: "Role-Based Hotel Management System",
    discr: "Hospitality operations platform covering reservations, check-in/out, automated invoices, and payment tracking with decoupled FastAPI REST API endpoints.",
    pic: "/project_driving.jpg",
    link: "https://github.com/mdnuralamrahi6498",
    tags: [
      { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "Streamlit", icon: <SiStreamlit className="text-[#FF4B4B]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#00758F]" /> },
      { name: "REST API" },
    ],
  },
  {
    id: 4,
    heading: "Hospital Management System",
    discr: "Multi-user web platform for healthcare administration, doctor schedules, patient records, and appointments with asynchronous AJAX lookups.",
    pic: "/project_alpr.jpg",
    link: "https://github.com/mdnuralamrahi6498",
    tags: [
      { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#00758F]" /> },
      { name: "JavaScript" },
      { name: "Bootstrap / AJAX" },
    ],
  },
];

export const Projects: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const toggleShowMore = () => {
    if (visibleCount >= projects.length) {
      setVisibleCount(3);
    } else {
      setVisibleCount((prev) => prev + 2);
    }
  };

  return (
    <section id="projects" data-name="RecentProjects" className="scroll-mt-28 flex flex-col gap-10">
      <div>
        <Heading FWord="FEATURED" LWord="PROJECTS" />
      </div>

      <div className="flex flex-col gap-2 relative">
        {/* Vertical connector line */}
        <div className="absolute left-10 md:left-12 top-0 bottom-0 w-px bg-white/[0.03] z-0 hidden lg:block" />

        {projects.slice(0, visibleCount).map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 block"
          >
            <RecentProjectCard
              pic={project.pic}
              heading={project.heading}
              discr={project.discr}
              tags={project.tags}
            />
          </a>
        ))}
      </div>

      <div className="flex justify-center mt-2">
        <button
          onClick={toggleShowMore}
          className="group relative px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase text-xs overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-2">
            {visibleCount >= projects.length ? "Show Less" : "View All Projects"}
            <IoIosArrowForward className="transition-transform duration-500 group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
