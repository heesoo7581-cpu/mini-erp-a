export function Field({
  label,
  placeholder = "",
  wide = false,
}: {
  label: string;
  placeholder?: string;
  wide?: boolean;
}) {
  return (
    <label className={`block ${wide ? "col-span-2" : ""}`}>
      <div className="mb-2 text-sm font-semibold text-slate-700">{label}</div>
      <input
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
      />
    </label>
  );
}

export function SelectField({ label }: { label: string }) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-semibold text-slate-700">{label}</div>
      <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
        <option>선택</option>
      </select>
    </label>
  );
}
