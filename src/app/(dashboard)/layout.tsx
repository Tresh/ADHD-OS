export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200 p-4">
        <nav className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="text-lg font-semibold">ADHD OS</span>
          <span className="text-sm text-gray-400">Dashboard</span>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl p-8">{children}</main>
    </div>
  );
}
