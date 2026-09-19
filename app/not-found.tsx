import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="rounded-2xl border p-8 max-w-md w-full"
           style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-card)" }}>
        <div className="font-mono text-4xl font-black text-[var(--border-accent)] mb-2">
          404
        </div>
        <h1 className="text-xl font-bold text-[var(--text-primary)] mb-2">
          Page Not Found
        </h1>
        <p className="text-xs text-[var(--text-secondary)] mb-6 font-mono">
          The requested resource or route does not exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--border-accent)" }}
        >
          Return to Portfolio
        </Link>
      </div>
    </div>
  );
}
