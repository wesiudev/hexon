export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`w-full min-h-full from-zinc-900 to-purple-900 bg-gradient-to-br`}
    >
      {children}
    </div>
  );
}
