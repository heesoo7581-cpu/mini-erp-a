import { SectionCard } from "@/components/shared/section-card";

export default function PrintPage() {
  return (
    <div className="space-y-6">
      <div className="text-3xl font-black tracking-tight">문서출력 와이어프레임</div>
      <div className="grid gap-6 xl:grid-cols-2">
        <SectionCard title="작업지시서 출력 포맷">
          <div className="rounded-[24px] border border-dashed border-slate-300 bg-slate-50 p-6">
            <div className="text-xl font-black">작업지시서</div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700">
              <div>작업지시번호: WO-20260608-001</div>
              <div>수주번호: SO-20260608-001</div>
              <div>거래처: 삼성 협력사</div>
              <div>품목: SHAFT-A</div>
              <div>지시수량: 500</div>
              <div>납기: 2026-06-10</div>
            </div>
          </div>
        </SectionCard>
        <SectionCard title="거래명세서 출력 포맷">
          <div className="rounded-[24px] border border-dashed border-slate-300 bg-slate-50 p-6">
            <div className="text-xl font-black">거래명세서</div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700">
              <div>출하번호: SH-20260608-001</div>
              <div>출하일자: 2026-06-08</div>
              <div>거래처: 삼성 협력사</div>
              <div>합계금액: 240,000</div>
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              품목, 수량, 단가, 공급가액이 표 형태로 출력됨
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
