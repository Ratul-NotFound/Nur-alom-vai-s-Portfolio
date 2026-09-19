"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useToast } from "./Toast";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Research" | "Projects" | "Contact" | "Actions";
  subtitle: string;
  action: () => void;
  icon: string;
}

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { showToast } = useToast();

  const handleNavigate = (hash: string) => {
    setIsOpen(false);
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    setIsOpen(false);
    navigator.clipboard.writeText("mdnuralam6498@gmail.com");
    showToast("Email address copied: mdnuralam6498@gmail.com");
  };

  const copyPhone = () => {
    setIsOpen(false);
    navigator.clipboard.writeText("+8801312837622");
    showToast("Phone number copied: +8801312837622");
  };

  const copyDoi = () => {
    setIsOpen(false);
    navigator.clipboard.writeText("10.17632/ypttkp5fb5.1");
    showToast("Mendeley DOI copied: 10.17632/ypttkp5fb5.1");
  };

  const items: CommandItem[] = [
    {
      id: "about",
      title: "About & Core Competencies",
      category: "Navigation",
      subtitle: "Executive bio, 4 pillars & DIU CGPA metrics",
      action: () => handleNavigate("#about"),
      icon: "👤",
    },
    {
      id: "simulator",
      title: "Interactive Grad-CAM Simulator",
      category: "Navigation",
      subtitle: "Live neural attention & disease diagnosis playground",
      action: () => handleNavigate("#ai-simulator"),
      icon: "🧠",
    },
    {
      id: "research",
      title: "Academic Research & Publications",
      category: "Research",
      subtitle: "IEEE RAAICON 2026 Paper (#433) & B.Sc. Thesis",
      action: () => handleNavigate("#research"),
      icon: "📚",
    },
    {
      id: "dataset",
      title: "Mendeley Data Repository",
      category: "Research",
      subtitle: "Amrapali Mango Fruit Diseases Dataset (DOI: 10.17632/ypttkp5fb5.1)",
      action: () => handleNavigate("#research"),
      icon: "💾",
    },
    {
      id: "projects",
      title: "Featured Engineering Projects",
      category: "Projects",
      subtitle: "Mango Vision XAI, Enterprise CRM, Hotel & Hospital Systems",
      action: () => handleNavigate("#projects"),
      icon: "⚡",
    },
    {
      id: "experience",
      title: "Professional Experience & R&D",
      category: "Navigation",
      subtitle: "Campus Bird 9.0 Lead AI Developer & DIU Apprenticeship",
      action: () => handleNavigate("#experience"),
      icon: "💼",
    },
    {
      id: "leadership",
      title: "Leadership & Honors Ledger",
      category: "Navigation",
      subtitle: "19 Verified recognitions across DIU & national events",
      action: () => handleNavigate("#leadership"),
      icon: "🏆",
    },
    {
      id: "skills",
      title: "Technical Skills Matrix",
      category: "Navigation",
      subtitle: "8 Domains: CV, LLMs, Edge AI, Python, FastAPI, React",
      action: () => handleNavigate("#skills"),
      icon: "🛠️",
    },
    {
      id: "education",
      title: "Academic Degrees & References",
      category: "Navigation",
      subtitle: "B.Sc. CSE, HSC, SSC + Verified Faculty References",
      action: () => handleNavigate("#education"),
      icon: "🎓",
    },
    {
      id: "contact",
      title: "Contact & Direct Channels",
      category: "Contact",
      subtitle: "Send a message or connect on LinkedIn / GitHub",
      action: () => handleNavigate("#contact"),
      icon: "✉️",
    },
    {
      id: "copy-email",
      title: "Copy Email Address",
      category: "Actions",
      subtitle: "mdnuralam6498@gmail.com / mnalam.cse@gmail.com",
      action: copyEmail,
      icon: "📋",
    },
    {
      id: "copy-phone",
      title: "Copy Phone Number",
      category: "Actions",
      subtitle: "+8801312837622",
      action: copyPhone,
      icon: "📞",
    },
    {
      id: "copy-doi",
      title: "Copy Mendeley Dataset DOI",
      category: "Actions",
      subtitle: "10.17632/ypttkp5fb5.1",
      action: copyDoi,
      icon: "🔗",
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      } else if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev === 0 ? Math.max(0, filteredItems.length - 1) : prev - 1
          );
        } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
          e.preventDefault();
          filteredItems[selectedIndex].action();
        }
      }
    },
    [isOpen, filteredItems, selectedIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 rounded-full border px-4 py-2.5 shadow-2xl font-mono text-xs font-semibold backdrop-blur-md transition-all hover:scale-105 hover:border-[var(--border-accent)]"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-card)",
          color: "var(--text-primary)",
        }}
        title="Open Command Palette (Ctrl+K)"
      >
        <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
        <span>Quick Jump</span>
        <kbd
          className="rounded px-1.5 py-0.5 text-[10px] font-mono border"
          style={{ backgroundColor: "var(--bg-pill)", borderColor: "var(--border-subtle)" }}
        >
          Ctrl K
        </kbd>
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/70 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-xl rounded-2xl border shadow-2xl overflow-hidden flex flex-col transition-all"
        style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-card)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b" style={{ borderColor: "var(--border-subtle)" }}>
          <svg className="h-5 w-5 text-[var(--border-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Type a command, section, or keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
          />
          <kbd
            onClick={() => setIsOpen(false)}
            className="cursor-pointer rounded px-2 py-1 text-[10px] font-mono text-[var(--text-muted)] border hover:text-[var(--text-primary)]"
            style={{ backgroundColor: "var(--bg-pill)", borderColor: "var(--border-subtle)" }}
          >
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-[var(--text-muted)]">
              No matching commands found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                    isSelected
                      ? "bg-[var(--bg-pill)] border border-[var(--border-accent)]"
                      : "hover:bg-[var(--bg-pill)] border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-base">{item.icon}</span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-[var(--text-primary)] truncate">
                        {item.title}
                      </span>
                      <span className="text-[11px] font-mono text-[var(--text-muted)] truncate">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                  <span
                    className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded border"
                    style={{
                      backgroundColor: "var(--bg-dark)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div
          className="flex items-center justify-between px-4 py-2 border-t text-[11px] font-mono text-[var(--text-muted)]"
          style={{ backgroundColor: "var(--bg-dark)", borderColor: "var(--border-subtle)" }}
        >
          <div className="flex items-center gap-2">
            <span>Navigate <kbd>↑</kbd><kbd>↓</kbd></span>
            <span>&bull;</span>
            <span>Select <kbd>↵</kbd></span>
          </div>
          <span>Antigravity Spotlight</span>
        </div>
      </div>
    </div>
  );
};
