"use client";
import { ToastContainer } from "react-toastify";

export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`min-h-screen w-full from-zinc-900 to-purple-900 bg-gradient-to-br relative`}
    >
      <ToastContainer />
      {children}
    </div>
  );
}
