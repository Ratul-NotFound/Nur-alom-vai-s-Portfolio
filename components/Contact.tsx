"use client";

import React, { useState } from "react";
import Heading from "./Heading";
import { FiCheckCircle, FiLoader } from "react-icons/fi";

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const labelStyle = "text-gray-400 text-xs font-medium tracking-wide";
  const inpStyle =
    "w-full text-gray-300 text-sm bg-[#1e1c1b] p-3 rounded-xl placeholder-gray-600 border border-white/[0.07] outline-none focus:border-orange-500/60 focus:bg-[#252321] transition-all duration-200 placeholder:text-xs";
  const opStyle = "text-gray-400 text-xs bg-[#1e1c1b]";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" data-name="Contact" className="scroll-mt-28 flex flex-col gap-8">
      <div>
        <Heading FWord="LET'S WORK" LWord="TOGETHER" />
      </div>

      <div className="bg-[#1c1b19]/40 backdrop-blur-xl border border-white/[0.05] p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] group-hover:bg-orange-500/10 transition-all duration-700 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] group-hover:bg-orange-500/10 transition-all duration-700 pointer-events-none" />

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center text-center py-10 px-4 gap-4 relative z-10 animate-fadeIn">
            <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 mb-2">
              <FiCheckCircle size={32} />
            </div>
            <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
              Message Received!
            </h3>
            <p className="text-gray-400 max-w-md text-xs sm:text-base leading-relaxed">
              Thank you for reaching out, Md. Nur Alam will get back to you shortly.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6 relative z-10">
            <input type="hidden" name="access_key" value="8d23d4b1-cdb1-49b8-a7b9-2fc9a473e18d" />

            {/* Name + Email row */}
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              <div className="flex flex-col flex-1 gap-2">
                <label htmlFor="name" className={labelStyle}>Your Full Name</label>
                <input name="name" id="name" type="text" placeholder="John Doe" className={inpStyle} required />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label htmlFor="email" className={labelStyle}>Email Address</label>
                <input name="email" id="email" type="email" placeholder="john@example.com" className={inpStyle} required />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className={labelStyle}>Subject of Interest</label>
              <div className="relative">
                <select
                  name="subject"
                  id="subject"
                  defaultValue="ai-research"
                  className={`${inpStyle} appearance-none cursor-pointer`}
                >
                  <option value="ai-research" className={opStyle}>AI / Computer Vision Research Collaboration</option>
                  <option value="job" className={opStyle}>Full-Time AI/ML Engineering Role</option>
                  <option value="freelance" className={opStyle}>Consulting &amp; ML Development</option>
                  <option value="hi" className={opStyle}>General Inquiry / Just Saying Hi</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C2.185 5.355 2.403 5 2.808 5h10.384a.207.207 0 0 1 .173.344l-4.796 5.482a.25.25 0 0 1-.397 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className={labelStyle}>Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Tell me about your project, research scope, or opportunity..."
                className={inpStyle}
                rows={4}
                required
              />
            </div>

            {/* Error banner */}
            {status === "error" && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                {errorMessage}
              </div>
            )}

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-white text-black font-bold py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base md:text-lg tracking-widest uppercase hover:bg-orange-500 hover:text-white transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)] hover:shadow-orange-500/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <FiLoader className="animate-spin" size={20} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
