import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
