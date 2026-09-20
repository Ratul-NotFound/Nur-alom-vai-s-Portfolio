"use client";

import React, { useState } from "react";
import Heading from "./Heading";
import { FiExternalLink, FiCopy, FiCheck } from "react-icons/fi";
import { RiDoubleQuotesL } from "react-icons/ri";

const researchItems = [
  {
    id: "ieee",
    badge: "IEEE RAAICON 2026",
    badgeExtra: "#433",
    title: "Benchmarking Attention-Enhanced Encoder-Decoder Models for Polyp Segmentation",
    description: "Evaluated Attention U-Net and ResUNet++ architectures for early colorectal polyp boundary delineation, achieving high clinical precision and 94.2% Dice score.",
    bibtex: `@inproceedings{alam2026polyp,
  author    = {Md. Nur Alam and Research Collaborators},
  title     = {Benchmarking Attention-Enhanced Encoder-Decoder Models for Early-Stage Colorectal Polyp Segmentation},
  booktitle = {Proc. of IEEE RAAICON 2026 (Paper #433)},
  year      = {2026}
}`,
    links: [
      { label: "Preprint", url: "https://github.com/mdnuralamrahi6498" },
    ],
  },
  {
    id: "thesis",
    badge: "B.Sc. Thesis",
    badgeExtra: "DIU CSE",
    title: "Explainable Transfer Learning Deep CNN for Mango Fruit Disease Classification",
    description: "End-to-end diagnostic framework for 7 major Amrapali cultivar diseases integrating fine-tuned CNN backbones and Grad-CAM visual explainability.",
    bibtex: `@thesis{alam2026thesis,
  author = {Md. Nur Alam},
  title  = {Explainable Transfer Learning Deep CNN for Mango Fruit Disease Classification},
  school = {Daffodil International University},
  year   = {2026}
}`,
    links: [
      { label: "Thesis PDF", url: "https://github.com/mdnuralamrahi6498" },
    ],
  },
  {
    id: "dataset",
    badge: "Mendeley Data",
    badgeExtra: "Benchmark",
    title: "Amrapali Mango Fruit Diseases: Cultivar-Specific Image Dataset",
    description: "Curated benchmark dataset containing 4,000+ annotated high-resolution orchard images across 7 verified disease categories with expert ground-truth.",
    bibtex: `@data{alam2026mendeley,
  author    = {Md. Nur Alam},
  title     = {Amrapali Mango Fruit Diseases: Cultivar-Specific Image Dataset},
  publisher = {Mendeley Data},
  year      = {2026}
}`,
    links: [
      { label: "Mendeley Data", url: "https://data.mendeley.com" },
    ],
  },
];

export const Research: React.FC = () => {
  const [activeBibtex, setActiveBibtex] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const copyBibtex = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="research" data-name="Research" className="scroll-mt-28 flex flex-col gap-8">
      <div>
        <Heading FWord="ACADEMIC" LWord="RESEARCH" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {researchItems.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[2rem] border border-white/[0.06] bg-[#181715]/40 backdrop-blur-xl transition-all duration-500 hover:bg-[#1e1d1a]/70 hover:border-orange-500/30 hover:shadow-[0_20px_50px_-15px_rgba(249,115,22,0.12)]"
          >
            <div>
              {/* Badges */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-orange-500 border border-orange-500/20">
                  {item.badge}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/[0.04] text-gray-400 border border-white/[0.08]">
                  {item.badgeExtra}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg sm:text-xl leading-snug tracking-tight mb-3 group-hover:text-orange-400 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                {item.description}
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <button
                type="button"
                onClick={() => setActiveBibtex(item.bibtex)}
                className="flex items-center gap-1.5 text-xs font-semibold text-orange-500 hover:text-orange-400 transition-colors"
              >
                <RiDoubleQuotesL size={15} />
                <span>Cite BibTeX</span>
              </button>

              {item.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
                >
                  <span>{link.label}</span>
                  <FiExternalLink size={13} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* BibTeX Modal */}
      {activeBibtex && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveBibtex(null)}
        >
          <div
            className="w-full max-w-xl p-6 sm:p-8 rounded-[2rem] bg-[#1a1816] border border-white/10 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-bold text-lg flex items-center gap-2">
                <RiDoubleQuotesL className="text-orange-500" size={20} />
                BibTeX Citation
              </h4>
              <button
                type="button"
                onClick={() => setActiveBibtex(null)}
                className="p-1 rounded-full text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-black/50 border border-white/[0.05] text-xs font-mono text-gray-300 overflow-x-auto whitespace-pre leading-relaxed mb-5">
              {activeBibtex}
            </pre>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => copyBibtex(activeBibtex)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 text-white font-bold text-xs uppercase tracking-wider hover:bg-orange-600 transition-colors"
              >
                {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                <span>{copied ? "Copied!" : "Copy BibTeX"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Research;
