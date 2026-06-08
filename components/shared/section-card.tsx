export function SectionCard({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
      <div className="mb-4 text-lg font-bold text-slate-900">{title}</div>
      {children}
    </section>
  );
}
