"use client";

import React, { useState } from "react";
import { useToast } from "./Toast";

interface CitationData {
  title: string;
  bibtex: string;
  ieee: string;
  apa: string;
}

export const Research: React.FC = () => {
  const { showToast } = useToast();
  const [citationModal, setCitationModal] = useState<CitationData | null>(null);
  const [citationFormat, setCitationFormat] = useState<"bibtex" | "ieee" | "apa">("bibtex");

  const copyDoi = () => {
    navigator.clipboard.writeText("10.17632/ypttkp5fb5.1");
    showToast("DOI copied: 10.17632/ypttkp5fb5.1");
  };

  const openIeeeCitation = () => {
    setCitationModal({
      title: "Benchmarking Attention-Enhanced Encoder–Decoder Models for Polyp Segmentation in Colonoscopy Images",
      bibtex: `@inproceedings{alam2026benchmarking,
  title={Benchmarking Attention-Enhanced Encoder--Decoder Models for Polyp Segmentation in Colonoscopy Images},
  author={Alam, Md. Nur and Authors},
  booktitle={2026 IEEE International Conference on Robotics, Automation, AI and IoT (RAAICON)},
  pages={1--6},
  year={2026},
  organization={IEEE},
  note={Paper ID: 433}
}`,
      ieee: `M. N. Alam et al., "Benchmarking Attention-Enhanced Encoder–Decoder Models for Polyp Segmentation in Colonoscopy Images," in 2026 IEEE RAAICON, Dhaka, 2026, Paper ID: 433.`,
      apa: `Alam, M. N. (2026). Benchmarking attention-enhanced encoder–decoder models for polyp segmentation in colonoscopy images. 2026 IEEE RAAICON (Paper ID: 433).`,
    });
  };

  const openDatasetCitation = () => {
    setCitationModal({
      title: "Amrapali Mango Fruit Diseases Dataset (Mendeley Data)",
      bibtex: `@data{alam2026mendeley,
  author = {Alam, Md. Nur},
  publisher = {Mendeley Data},
  title = {Amrapali Mango Fruit Diseases: A Cultivar-Specific Image Dataset for Computer Vision and Deep CNN Classification},
  year = {2026},
  version = {1},
  doi = {10.17632/ypttkp5fb5.1}
}`,
      ieee: `M. N. Alam, "Amrapali Mango Fruit Diseases Dataset," Mendeley Data, V1, 2026. doi: 10.17632/ypttkp5fb5.1.`,
      apa: `Alam, M. N. (2026). Amrapali mango fruit diseases dataset (Version 1) [Data set]. Mendeley Data. https://doi.org/10.17632/ypttkp5fb5.1`,
    });
  };

  return (
    <section id="research" className="py-12 border-t border-[#1e212d]">
      {/* Header */}
      <div className="flex flex-col mb-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[0.95]">
          ACADEMIC
        </h2>
        <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#222533] uppercase leading-[0.95] mt-1">
          RESEARCH
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Paper 1 */}
        <article
          className="p-5 rounded-[22px] border flex flex-col justify-between transition-all hover:border-orange-500/40"
          style={{ backgroundColor: "#12131a", borderColor: "#1e212d" }}
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#f97316] text-white">
                IEEE RAAICON 2026
              </span>
              <span className="text-[10px] font-mono text-[#9aa2b4]">#433</span>
            </div>
            <h3 className="text-sm font-bold text-white mb-2 leading-snug">
              Benchmarking Attention-Enhanced Encoder–Decoder Models for Polyp Segmentation
            </h3>
            <p className="text-xs text-[#9aa2b4] leading-relaxed mb-4">
              Attention-augmented deep architectures for early colorectal polyp segmentation and boundary delineation.
            </p>
          </div>

          <div className="pt-3 border-t border-[#1e212d] flex items-center justify-between">
            <button
              onClick={openIeeeCitation}
              className="text-xs font-mono font-bold text-[#f97316] hover:underline"
            >
              Cite Paper ▾
            </button>
            <a
              href="#contact"
              className="text-xs font-mono text-[#9aa2b4] hover:text-white"
            >
              Preprint ↗
            </a>
          </div>
        </article>

        {/* Thesis */}
        <article
          className="p-5 rounded-[22px] border flex flex-col justify-between transition-all hover:border-orange-500/40"
          style={{ backgroundColor: "#12131a", borderColor: "#1e212d" }}
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#181a24] border border-[#232736] text-purple-400">
                B.Sc. Thesis
              </span>
              <span className="text-[10px] font-mono text-[#9aa2b4]">DIU</span>
            </div>
            <h3 className="text-sm font-bold text-white mb-2 leading-snug">
              Explainable Transfer Learning Deep CNN for Mango Fruit Disease Classification
            </h3>
            <p className="text-xs text-[#9aa2b4] leading-relaxed mb-4">
              Diagnostic framework for 7 major Amrapali diseases with Grad-CAM visual heatmaps.
            </p>
          </div>

          <div className="pt-3 border-t border-[#1e212d] flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#64748b]">Grad-CAM XAI</span>
            <a
              href="#projects"
              className="text-xs font-mono text-[#f97316] hover:underline"
            >
              View Model ↗
            </a>
          </div>
        </article>

        {/* Dataset */}
        <article
          className="p-5 rounded-[22px] border flex flex-col justify-between transition-all hover:border-orange-500/40"
          style={{ backgroundColor: "#12131a", borderColor: "#1e212d" }}
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#181a24] border border-[#232736] text-amber-400">
                Mendeley Data
              </span>
              <span className="text-[10px] font-mono text-[#9aa2b4]">Jan 2026</span>
            </div>
            <h3 className="text-sm font-bold text-white mb-2 leading-snug">
              Amrapali Mango Fruit Diseases: Cultivar-Specific Image Dataset
            </h3>
            <p className="text-xs text-[#9aa2b4] leading-relaxed mb-4">
              Curated and standardized benchmark dataset across 7 classes with verified ground-truth labels.
            </p>
          </div>

          <div className="pt-3 border-t border-[#1e212d] flex items-center justify-between">
            <button
              onClick={openDatasetCitation}
              className="text-xs font-mono font-bold text-[#f97316] hover:underline"
            >
              Cite Dataset ▾
            </button>
            <button
              onClick={copyDoi}
              className="text-xs font-mono text-[#9aa2b4] hover:text-white"
            >
              Copy DOI
            </button>
          </div>
        </article>
      </div>

      {/* Citation Modal */}
      {citationModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setCitationModal(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border p-5 shadow-2xl flex flex-col gap-3"
            style={{ backgroundColor: "#12131a", borderColor: "#232736" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#232736] pb-3">
              <span className="text-xs font-mono font-bold text-[#f97316] uppercase">Citation Exporter</span>
              <button onClick={() => setCitationModal(null)} className="text-xs text-[#9aa2b4] hover:text-white">✕</button>
            </div>
            <div className="flex gap-2 font-mono text-xs">
              {(["bibtex", "ieee", "apa"] as const).map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setCitationFormat(fmt)}
                  className={`px-3 py-1 rounded-lg uppercase ${
                    citationFormat === fmt ? "bg-[#f97316] text-white" : "bg-[#181a24] text-[#9aa2b4]"
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>
            <pre className="p-3 rounded-xl bg-[#090a0f] border border-[#232736] text-xs font-mono text-white overflow-x-auto select-all">
              {citationModal[citationFormat]}
            </pre>
          </div>
        </div>
      )}
    </section>
  );
};
