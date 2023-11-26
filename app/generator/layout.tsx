"use client";
import { LevelAnimation } from "@/app/components/levelsystem/LevelAnimation";
import { useUserData } from "@/app/hooks/useUserData";

import { ToastContainer } from "react-toastify";

export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userData } = useUserData();

  return (
    <div
      className={`min-h-screen w-full from-zinc-900 to-purple-900 bg-gradient-to-br relative`}
    >
      {userData && <LevelAnimation />}
      <ToastContainer />
      {children}
    </div>
  );
}
