import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md. Nur Alam — AI/ML Engineer & Computer Vision Researcher",
  description:
    "Professional portfolio of Md. Nur Alam — AI/ML Engineer, Computer Vision Researcher, and Software Engineer. Daffodil International University graduate.",
  keywords: [
    "Md. Nur Alam",
    "AI/ML Engineer",
    "Computer Vision Researcher",
    "Explainable AI",
    "Grad-CAM",
    "Deep Learning",
    "Software Engineer",
    "Daffodil International University",
  ],
  authors: [{ name: "Md. Nur Alam" }],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
