import React from "react";
import Heading from "./Heading";
import { FaCode, FaBrain } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";

const Hstyle = "text-white font-bold text-2xl sm:text-3xl lg:text-5xl";

export const Hero: React.FC = () => {
  const stats = [
    { count: "1+", label: "YEARS EXP." },
    { count: "4+", label: "AI PROJECTS" },
    { count: "01", label: "IEEE PAPER" },
    { count: "3.63", label: "B.SC. CGPA" },
  ];

  return (
    <section id="home" data-name="Intro" className="scroll-mt-28 flex flex-col w-full gap-6 sm:gap-10 items-start pt-2 sm:pt-0">
      <div className="w-full">
        <Heading FWord="AI & ML" LWord="ENGINEER" />
      </div>

      <div className="md:pr-20 lg:pr-32 text-left">
        <p className="text-gray-400 font-normal leading-relaxed text-sm sm:text-base md:text-lg">
          Specializing in Deep Learning, Computer Vision, Explainable AI (XAI), and Polyp Segmentation. Published author at IEEE RAAICON 2026 with hands-on expertise building production-ready AI solutions and scalable REST APIs.
        </p>
      </div>

      {/* Stats - 2x2 grid on mobile with subtle border separation, row on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-3 sm:gap-5 lg:gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-start p-3 sm:p-0 rounded-2xl sm:rounded-none bg-white/[0.02] sm:bg-transparent border border-white/[0.04] sm:border-none group cursor-default">
            <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl group-hover:text-orange-500 transition-colors duration-300">
              {stat.count}
            </h2>
            <p className="text-gray-500 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Stack Feature Cards */}
      <div className="flex gap-4 sm:gap-6 flex-col md:flex-row w-full mt-1 sm:mt-2">
        {/* Card 1: AI & XAI */}
        <a
          href="#research"
          className="group relative overflow-hidden min-h-[16rem] md:h-72 w-full md:w-[48%] bg-[#1c1b19]/40 backdrop-blur-xl border border-white/[0.05] rounded-[1.75rem] sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-500 hover:border-orange-500/40 hover:bg-orange-500/[0.03] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)]"
        >
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-orange-500/10 rounded-full blur-[60px] group-hover:bg-orange-500/20 transition-all duration-700 animate-float"></div>

          <div className="p-3 sm:p-4 bg-orange-500/10 rounded-2xl w-fit border border-orange-500/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
            <FaBrain className="text-2xl sm:text-3xl" />
          </div>

          <div className="relative z-10 my-2 sm:my-3">
            <h2 className="text-white font-bold text-lg sm:text-[1.3rem] pt-1 leading-tight">
              Computer Vision & <br /> Explainable AI (XAI)
            </h2>
            <p className="text-gray-500 text-xs mt-1.5 font-normal">
              Polyp Segmentation, Grad-CAM heatmaps & Transfer Learning.
            </p>
          </div>

          <div className="flex justify-end relative z-10">
            <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center border border-white/20 bg-white text-orange-600 rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-lg group-hover:scale-110">
              <CiLocationArrow1 className="text-xl sm:text-2xl" />
            </div>
          </div>
        </a>

        {/* Card 2: Deep Learning & Full-Stack */}
        <a
          href="#projects"
          className="group relative overflow-hidden min-h-[16rem] md:h-72 w-full md:w-[52%] bg-[#1c1b19]/40 backdrop-blur-xl border border-white/[0.05] rounded-[1.75rem] sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-500 hover:border-green-400/40 hover:bg-green-400/[0.03] hover:shadow-[0_20px_40px_-15px_rgba(74,222,128,0.15)]"
        >
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-green-400/10 rounded-full blur-[60px] group-hover:bg-green-400/20 transition-all duration-700 animate-float delay-1000"></div>

          <div className="p-3 sm:p-4 bg-green-400/10 rounded-2xl w-fit border border-green-400/20 text-green-500 group-hover:bg-green-400 group-hover:text-black transition-all duration-500">
            <FaCode className="text-2xl sm:text-3xl" />
          </div>

          <div className="relative z-10 my-2 sm:my-3">
            <h2 className="text-white font-bold text-lg sm:text-[1.3rem] pt-1 leading-tight">
              PyTorch, TensorFlow, <br /> FastAPI & Next.js
            </h2>
            <p className="text-gray-500 text-xs mt-1.5 font-normal">
              End-to-end deep learning pipelines & decoupled microservices.
            </p>
          </div>

          <div className="flex justify-end relative z-10">
            <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center border border-black/20 bg-white text-green-600 rounded-full hover:bg-green-400 hover:text-white hover:border-green-400 transition-all duration-300 shadow-lg group-hover:scale-110">
              <CiLocationArrow1 className="text-xl sm:text-2xl" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
