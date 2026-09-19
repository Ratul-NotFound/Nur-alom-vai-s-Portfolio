import React from "react";

export const Footer: React.FC = () => {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Leadership", href: "#leadership" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t py-12" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
      <div className="container-custom flex flex-col items-center gap-5 text-center">
        <div className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
          Md. Nur Alam &mdash; <span style={{ color: "var(--text-secondary)", fontWeight: "normal" }}>AI/ML Engineer &bull; Computer Vision Researcher</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs transition-colors hover:text-blue-500"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
          &copy; {new Date().getFullYear()} Md. Nur Alam. Built with Next.js, React, TypeScript &amp; Tailwind CSS. Ready for Vercel deployment.
        </div>
      </div>
    </footer>
  );
};
