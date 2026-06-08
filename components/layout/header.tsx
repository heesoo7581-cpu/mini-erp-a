export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-bold">가공업체용 미니 ERP A안</div>
          <div className="text-sm text-slate-500">
            수주 → 작업지시 → 생산실적 → 출하 → 거래명세서 중심 구조
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
          관리자 · 장희수
        </div>
      </div>
    </header>
  );
}
