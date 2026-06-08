export function ActionBar({
  primary = "저장",
  secondary = "조회",
  extra,
}: {
  primary?: string;
  secondary?: string;
  extra?: string[];
}) {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      <button className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white">
        {primary}
      </button>
      <button className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
        {secondary}
      </button>
      {extra?.map((item) => (
        <button
          key={item}
          className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
