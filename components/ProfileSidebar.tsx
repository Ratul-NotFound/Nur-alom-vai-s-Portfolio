"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import AnimatedEye from "./AnimatedEye";

const socialLinks = [
  {
    Icon: FaGithub,
    href: "https://github.com/mdnuralamrahi6498",
    hoverColor: "#e6edf3",
    label: "GitHub",
  },
  {
    Icon: CiLinkedin,
    href: "https://linkedin.com/in/md-nur-alam",
    hoverColor: "#0A66C2",
    label: "LinkedIn",
  },
  {
    Icon: MdOutlineMail,
    href: "mailto:mdnuralam6498@gmail.com",
    hoverColor: "#ea580c",
    label: "Email",
  },
  {
    Icon: FiPhone,
    href: "tel:+8801312837622",
    hoverColor: "#22c55e",
    label: "Phone",
  },
];

export const ProfileSidebar: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <aside className="w-full max-w-full sm:max-w-[420px] mx-auto lg:mx-0 lg:w-[350px] lg:shrink-0 lg:sticky lg:top-16 self-start shadow-2xl">
      <div className="bg-[#1a1816] p-5 sm:p-7 lg:p-9 rounded-[2rem] border border-white/[0.06] items-center gap-6 sm:gap-7 flex flex-col backdrop-blur-xl">
        {/* Full Image — 533 / 700 Aspect Ratio */}
        <div
          className="relative group w-full overflow-hidden rounded-2xl"
          style={{ aspectRatio: "533 / 680" }}
        >
          {/* Skeleton Shimmer */}
          {!imgLoaded && (
            <div className="sidebar-skeleton absolute inset-0 rounded-2xl" />
          )}
          <Image
            src="/profile.jpg"
            alt="Md. Nur Alam"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 350px"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover object-top rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-[1.03] ${
              imgLoaded ? "sidebar-img-visible" : "sidebar-img-hidden"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
          <span className="absolute bottom-3 left-3 text-white text-[11px] sm:text-xs font-semibold bg-orange-500/90 px-3 py-1 rounded-full backdrop-blur-sm shadow-md">
            Available for Work
          </span>
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="font-bold text-2xl sm:text-3xl text-white tracking-tight">
            Md. Nur Alam
          </h1>
          <div className="h-0.5 w-12 bg-orange-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Bio */}
        <div className="text-center">
          <p className="font-normal leading-relaxed text-gray-400 text-xs sm:text-sm">
            A <span className="text-white font-medium">Software Engineer &amp; AI Researcher</span> specializing in Deep Learning, Computer Vision &amp; Healthcare XAI.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex gap-3.5 sm:gap-4 text-2xl text-gray-500">
          {socialLinks.map(({ Icon, href, hoverColor, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 sm:p-2.5 rounded-full bg-white/[0.03] border border-white/[0.05] transition-all duration-300 hover:scale-115 hover:-translate-y-1 hover:border-orange-500/40"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "";
              }}
            >
              <Icon size={19} />
            </a>
          ))}
        </div>

        {/* Download CV Button */}
        <a
          href="/cv.pdf"
          download
          className="relative overflow-hidden group text-center w-full bg-white text-black font-bold py-3.5 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg active:scale-95 block uppercase tracking-widest text-xs"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Download CV
            <AnimatedEye size={20} className="text-black group-hover:text-white transition-colors duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-white/20 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </a>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
