"use client";

import React, { createContext, useContext, useState } from "react";

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

export const useToast = () => useContext(ToastContext);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className={`fixed bottom-8 right-8 z-50 rounded px-5 py-2.5 font-mono text-xs shadow-lg transition-all duration-200 ${
          toastMessage
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
        style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border-accent)",
          color: "var(--text-primary)",
        }}
      >
        {toastMessage}
      </div>
    </ToastContext.Provider>
  );
};
