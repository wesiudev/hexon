"use client";

import { useUserData } from "@/common/hooks/useUserData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userData, loading, loadingImages, images } = useUserData();
  return (
    <div
      className={`w-full min-h-full from-zinc-900 to-purple-900 bg-gradient-to-br`}
    >
      <ToastContainer />
      {children}
    </div>
  );
}
