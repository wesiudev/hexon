"use client";

export default function BackpackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`min-h-screen w-full from-zinc-900 to-purple-900 bg-gradient-to-r`}
    >
      {children}
    </div>
  );
}
