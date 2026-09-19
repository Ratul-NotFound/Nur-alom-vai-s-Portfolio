"use client";

import React, { useState } from "react";
import { Heading } from "./Heading";
import { useToast } from "./Toast";

export const Contact: React.FC = () => {
  const { showToast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("AI/ML & Computer Vision Engineering");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      showToast("Please fill out all required fields");
      return;
    }

    const mailto = `mailto:mdnuralam6498@gmail.com?subject=${encodeURIComponent(
      `[${subject}] Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(`From: ${name} (${email})\nSubject: ${subject}\n\n${message}`)}`;
    window.location.href = mailto;

    showToast("Opening mail client... Thank you!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-12 border-t border-[#282522] flex flex-col gap-8">
      {/* Title */}
      <Heading FWord="LET'S WORK" LWord="TOGETHER" />

      {/* Form Container (Exact Reference Style - Image 5) */}
      <div
        className="rounded-[32px] p-6 sm:p-10 border shadow-2xl"
        style={{ backgroundColor: "#1a1816", borderColor: "#282522" }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-[#a8a199] mb-2 font-mono">
                Your Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
                className="w-full rounded-2xl border px-4 py-3.5 text-xs bg-[#24211d] border-[#2e2a26] text-white placeholder-[#6e675f] focus:outline-none focus:border-[#ea580c] transition-colors shadow-inner"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#a8a199] mb-2 font-mono">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                required
                className="w-full rounded-2xl border px-4 py-3.5 text-xs bg-[#24211d] border-[#2e2a26] text-white placeholder-[#6e675f] focus:outline-none focus:border-[#ea580c] transition-colors shadow-inner"
              />
            </div>
          </div>

          {/* Row 2: Subject of Interest */}
          <div>
            <label className="block text-xs font-semibold text-[#a8a199] mb-2 font-mono">
              Subject of Interest
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-2xl border px-4 py-3.5 text-xs bg-[#24211d] border-[#2e2a26] text-white focus:outline-none focus:border-[#ea580c] transition-colors shadow-inner"
            >
              <option value="AI/ML & Computer Vision Engineering">AI/ML &amp; Computer Vision Engineering</option>
              <option value="Deep Learning & Grad-CAM Research">Deep Learning &amp; Grad-CAM Research</option>
              <option value="Full-Stack Web & REST API Development">Full-Stack Web &amp; REST API Development</option>
              <option value="Technical R&D & Market Intelligence">Technical R&amp;D &amp; Market Intelligence</option>
            </select>
          </div>

          {/* Row 3: Message */}
          <div>
            <label className="block text-xs font-semibold text-[#a8a199] mb-2 font-mono">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project..."
              rows={4}
              required
              className="w-full rounded-2xl border px-4 py-3.5 text-xs bg-[#24211d] border-[#2e2a26] text-white placeholder-[#6e675f] focus:outline-none focus:border-[#ea580c] transition-colors resize-y shadow-inner"
            />
          </div>

          {/* Full-Width Send Message Button */}
          <button
            type="submit"
            className="w-full py-4 px-8 rounded-full font-black text-xs bg-white text-black hover:bg-neutral-200 transition-all shadow-xl uppercase tracking-wider mt-2"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};
