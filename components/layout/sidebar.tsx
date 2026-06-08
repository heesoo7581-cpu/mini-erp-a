"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuGroups } from "@/lib/menu";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r border-slate-200 bg-slate-950 text-white">
      <div className="border-b border-white/10 px-6 py-5">
        <div className="text-2xl font-black tracking-tight">JM-ERP A</div>
        <div className="mt-1 text-xs tracking-[0.2em] text-slate-400">MACHINING ERP STARTER</div>
      </div>

      <div className="px-4 py-4">
        {menuGroups.map((group) => (
          <div key={group.title} className="mb-5">
            <div className="px-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              {group.title}
            </div>
            <div className="mt-2 space-y-1">
              {group.items.map((item, idx) => {
                const Icon = item.icon;
                const active = pathname === item.href;
                return (
                  <Link
                    key={`${item.href}-${idx}`}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition ${
                      active ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
