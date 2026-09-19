"use client";

import React, { useState } from "react";
import { useToast } from "./Toast";

interface Specimen {
  id: string;
  name: string;
  pathogen: string;
  confidence: number;
  category: "diseased" | "healthy";
  symptoms: string;
  recommendedAction: string;
  heatmapColor: string;
  gradCamFocus: { x: number; y: number; radius: number };
}

const specimens: Specimen[] = [
  {
    id: "anthracnose",
    name: "Anthracnose (Colletotrichum)",
    pathogen: "Fungal Spore Necrosis",
    confidence: 99.4,
    category: "diseased",
    symptoms: "Irregular sunken necrotic lesions across the epidermal surface.",
    recommendedAction: "Apply Copper Oxychloride 50 WP (2.5 g/L) at 12-day intervals.",
    heatmapColor: "#ef4444",
    gradCamFocus: { x: 48, y: 52, radius: 28 },
  },
  {
    id: "bacterial-canker",
    name: "Bacterial Canker (Xanthomonas)",
    pathogen: "Bacterial Vascular Blight",
    confidence: 98.7,
    category: "diseased",
    symptoms: "Water-soaked spots coalescing into corky cankers with chlorotic halos.",
    recommendedAction: "Spray Streptocycline (200 ppm) with Bordeaux Mixture (1%).",
    heatmapColor: "#f59e0b",
    gradCamFocus: { x: 62, y: 38, radius: 22 },
  },
  {
    id: "dieback",
    name: "Dieback & Stem Rot (Lasiodiplodia)",
    pathogen: "Vascular Fungal Infection",
    confidence: 97.8,
    category: "diseased",
    symptoms: "Apical twig drying downwards with brownish vascular discoloration.",
    recommendedAction: "Prune twigs 5 cm below infection and apply Carbendazim paste.",
    heatmapColor: "#a855f7",
    gradCamFocus: { x: 35, y: 30, radius: 26 },
  },
  {
    id: "healthy",
    name: "Healthy Control (Normal)",
    pathogen: "None (Disease-Free)",
    confidence: 99.9,
    category: "healthy",
    symptoms: "Uniform chlorophyll distribution; zero necrotic lesions detected.",
    recommendedAction: "Maintain standard balanced NPK nutrition schedule.",
    heatmapColor: "#10b981",
    gradCamFocus: { x: 50, y: 50, radius: 10 },
  },
];

export const AiSimulator: React.FC = () => {
  const [selectedSpecimen, setSelectedSpecimen] = useState<Specimen>(specimens[0]);
  const [viewMode, setViewMode] = useState<"optical" | "gradcam" | "saliency">("gradcam");
  const [threshold, setThreshold] = useState<number>(85);
  const [isInferencing, setIsInferencing] = useState<boolean>(false);
  const { showToast } = useToast();

  const handleSelectSpecimen = (specimen: Specimen) => {
    setIsInferencing(true);
    setTimeout(() => {
      setSelectedSpecimen(specimen);
      setIsInferencing(false);
    }, 150);
  };

  const copyInferenceReport = () => {
    const report = `[AI Diagnostic Telemetry Report]
Model: Deep CNN + Grad-CAM Explainable Vision
Specimen: ${selectedSpecimen.name}
Pathogen: ${selectedSpecimen.pathogen}
Confidence: ${selectedSpecimen.confidence}%
Threshold: ${threshold}%
Inference Latency: 14.8 ms (Edge TensorRT)
Action: ${selectedSpecimen.recommendedAction}`;
    navigator.clipboard.writeText(report);
    showToast("Telemetry log copied!");
  };

  return (
    <section id="ai-simulator" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider border mb-3"
               style={{ backgroundColor: "var(--bg-pill)", borderColor: "var(--border-subtle)", color: "var(--border-accent)" }}>
            <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--border-accent)" }} />
            <span>Interactive Vision Laboratory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Explainable AI (Grad-CAM) Simulator
          </h2>
          <span className="accent-bar" />
          <p className="mt-3 text-sm sm:text-base max-w-xl mx-auto text-[var(--text-secondary)]">
            Test neural attention layers, inspect Grad-CAM heatmaps, and adjust diagnostic thresholds.
          </p>
        </div>

        {/* Main Card */}
        <div
          className="rounded-2xl border p-4 sm:p-6 shadow-xl"
          style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-card)" }}
        >
          {/* Specimen Pills */}
          <div className="mb-5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2.5">
              1. Select Test Sample:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {specimens.map((specimen) => {
                const isSelected = selectedSpecimen.id === specimen.id;
                return (
                  <button
                    key={specimen.id}
                    onClick={() => handleSelectSpecimen(specimen)}
                    className={`flex flex-col text-left p-2.5 sm:p-3 rounded-xl border transition-all ${
                      isSelected
                        ? "border-[var(--border-accent)] bg-[var(--bg-pill)] shadow-sm"
                        : "border-[var(--border-subtle)] hover:border-[var(--border-card)] hover:bg-[var(--bg-dark)]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-xs font-bold text-[var(--text-primary)] truncate">
                        {specimen.id.replace("-", " ").toUpperCase()}
                      </span>
                      <span
                        className="h-2 w-2 rounded-full shrink-0"
                        style={{ backgroundColor: specimen.heatmapColor }}
                      />
                    </div>
                    <span className="text-[11px] font-mono text-[var(--text-muted)] truncate">
                      {specimen.pathogen}
                    </span>
                    <div className="mt-1.5 flex items-center justify-between text-[11px] font-mono font-semibold">
                      <span style={{ color: specimen.heatmapColor }}>{specimen.confidence}% match</span>
                      <span className="text-[var(--text-muted)]">#{specimen.id.slice(0, 4)}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Left: Viewport (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-3.5">
              {/* Tabs */}
              <div
                className="flex items-center gap-1 rounded-xl p-1 border"
                style={{ backgroundColor: "var(--bg-dark)", borderColor: "var(--border-subtle)" }}
              >
                <button
                  onClick={() => setViewMode("optical")}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    viewMode === "optical"
                      ? "bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm border border-[var(--border-subtle)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  RGB (Raw)
                </button>
                <button
                  onClick={() => setViewMode("gradcam")}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    viewMode === "gradcam"
                      ? "bg-[var(--border-accent)] text-white shadow-sm"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  Grad-CAM Attention
                </button>
                <button
                  onClick={() => setViewMode("saliency")}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    viewMode === "saliency"
                      ? "bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm border border-[var(--border-subtle)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  Gradient Saliency
                </button>
              </div>

              {/* Neural Display */}
              <div
                className="relative aspect-[16/10] w-full rounded-2xl border overflow-hidden flex items-center justify-center p-4 transition-all"
                style={{
                  backgroundColor: "var(--bg-dark)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div className="relative w-40 sm:w-56 h-40 sm:h-56 flex items-center justify-center">
                  <div
                    className="w-full h-full rounded-tr-[80px] rounded-bl-[80px] border-2 transition-all duration-300"
                    style={{
                      backgroundColor: viewMode === "saliency" ? "#0f172a" : "#14532d",
                      borderColor: viewMode === "saliency" ? "#334155" : "#166534",
                      transform: "rotate(-25deg)",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                      <div className="w-[85%] h-[2px] bg-emerald-300 rotate-45" />
                    </div>
                  </div>

                  {viewMode !== "optical" && (
                    <div
                      className={`absolute rounded-full pointer-events-none transition-all duration-500 ${
                        isInferencing ? "scale-90 opacity-40" : "scale-100 opacity-90"
                      }`}
                      style={{
                        left: `${selectedSpecimen.gradCamFocus.x}%`,
                        top: `${selectedSpecimen.gradCamFocus.y}%`,
                        width: `${selectedSpecimen.gradCamFocus.radius * 2.8}%`,
                        height: `${selectedSpecimen.gradCamFocus.radius * 2.8}%`,
                        transform: "translate(-50%, -50%)",
                        backgroundColor: selectedSpecimen.heatmapColor,
                        filter: viewMode === "gradcam" ? "blur(16px)" : "blur(8px)",
                        mixBlendMode: "screen",
                      }}
                    />
                  )}

                  {viewMode === "gradcam" && selectedSpecimen.category === "diseased" && (
                    <div
                      className="absolute rounded border-2 border-dashed transition-all duration-300 pointer-events-none"
                      style={{
                        left: `${selectedSpecimen.gradCamFocus.x - 16}%`,
                        top: `${selectedSpecimen.gradCamFocus.y - 16}%`,
                        width: "32%",
                        height: "32%",
                        borderColor: selectedSpecimen.heatmapColor,
                      }}
                    >
                      <span
                        className="absolute -top-4 left-0 px-1 py-0.5 rounded text-[9px] font-mono font-bold text-white uppercase"
                        style={{ backgroundColor: selectedSpecimen.heatmapColor }}
                      >
                        ROI: {selectedSpecimen.confidence}%
                      </span>
                    </div>
                  )}
                </div>

                {/* Overlays */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <span className="rounded bg-black/70 px-1.5 py-0.5 font-mono text-[9px] text-white border border-white/10">
                    {viewMode.toUpperCase()}
                  </span>
                  <span className="rounded bg-black/70 px-1.5 py-0.5 font-mono text-[9px] text-emerald-400 border border-white/10">
                    224×224 TENSOR
                  </span>
                </div>
              </div>

              {/* Slider */}
              <div
                className="p-3 rounded-xl border flex flex-col gap-1.5"
                style={{ backgroundColor: "var(--bg-dark)", borderColor: "var(--border-subtle)" }}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--text-secondary)]">Confidence Threshold:</span>
                  <span className="font-bold text-[var(--border-accent)]">{threshold}%</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="99"
                  value={threshold}
                  onChange={(e) => setThreshold(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer h-1.5 bg-[var(--border-card)] rounded-lg"
                />
              </div>
            </div>

            {/* Right: Telemetry (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              {/* Result Card */}
              <div
                className="p-3.5 sm:p-4 rounded-xl border"
                style={{
                  backgroundColor: "var(--bg-dark)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold uppercase text-[var(--text-muted)]">
                    Model Decision:
                  </span>
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${
                      selectedSpecimen.confidence >= threshold
                        ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
                        : "text-amber-400 border-amber-500/30 bg-amber-500/10"
                    }`}
                  >
                    {selectedSpecimen.confidence >= threshold ? "VERIFIED" : "BELOW THRESHOLD"}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] mb-0.5">
                  {selectedSpecimen.name}
                </h3>
                <p className="text-xs font-mono mb-2.5" style={{ color: selectedSpecimen.heatmapColor }}>
                  {selectedSpecimen.pathogen}
                </p>

                <div className="space-y-1.5 text-xs border-t pt-2.5" style={{ borderColor: "var(--border-subtle)" }}>
                  <div>
                    <span className="font-bold text-[var(--text-primary)]">Symptoms: </span>
                    <span className="text-[var(--text-secondary)]">{selectedSpecimen.symptoms}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[var(--text-primary)]">Action: </span>
                    <span className="text-[var(--text-secondary)]">{selectedSpecimen.recommendedAction}</span>
                  </div>
                </div>
              </div>

              {/* Hardware Telemetry */}
              <div
                className="p-3 rounded-xl border grid grid-cols-2 gap-2 font-mono"
                style={{ backgroundColor: "var(--bg-dark)", borderColor: "var(--border-subtle)" }}
              >
                <div>
                  <div className="text-[9px] text-[var(--text-muted)] uppercase">Latency</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400">14.8 ms</div>
                </div>
                <div>
                  <div className="text-[9px] text-[var(--text-muted)] uppercase">Accuracy</div>
                  <div className="text-xs sm:text-sm font-bold text-blue-400">99.4%</div>
                </div>
                <div>
                  <div className="text-[9px] text-[var(--text-muted)] uppercase">Backbone</div>
                  <div className="text-[11px] font-bold text-[var(--text-primary)] truncate">ConvNeXt / DenseNet</div>
                </div>
                <div>
                  <div className="text-[9px] text-[var(--text-muted)] uppercase">XAI Layer</div>
                  <div className="text-[11px] font-bold text-purple-400">Grad-CAM++</div>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={copyInferenceReport}
                className="flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl font-mono text-xs font-semibold border transition-all hover:border-[var(--border-accent)]"
                style={{
                  backgroundColor: "var(--bg-pill)",
                  borderColor: "var(--border-card)",
                  color: "var(--text-primary)",
                }}
              >
                <span>Export Telemetry Log</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
