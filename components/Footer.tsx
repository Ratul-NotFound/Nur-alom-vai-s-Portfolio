import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 text-gray-600 flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-white/[0.05] mt-12 text-xs">
      <p className="tracking-wide">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-orange-500 hover:text-orange-400 transition-colors duration-200 font-medium">
          Md. Nur Alam
        </span>
        . All rights reserved.
      </p>
      <p className="text-gray-500">
        B.Sc. CSE &bull; AI/ML &amp; Computer Vision Researcher
      </p>
    </footer>
  );
};

export default Footer;
