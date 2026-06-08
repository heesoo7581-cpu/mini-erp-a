import { SectionCard } from "@/components/shared/section-card";
import { DataTable } from "@/components/shared/data-table";

const kpis = [
  { label: "오늘 수주", value: "12건" },
  { label: "작업지시", value: "8건" },
  { label: "생산실적", value: "3,240 EA" },
  { label: "출하예정", value: "5건" },
  { label: "납기임박", value: "3건" },
  { label: "미출하", value: "7건" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-3xl font-black tracking-tight">운영현황 대시보드</div>
        <p className="mt-2 text-sm text-slate-500">실사용 전 1차 와이어프레임 화면</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-medium text-slate-500">{kpi.label}</div>
            <div className="mt-3 text-2xl font-black tracking-tight text-slate-900">{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="납기 임박 수주">
          <DataTable
            columns={["수주번호", "거래처", "품목", "납기", "상태"]}
            rows={[
              ["SO-20260608-001", "삼성 협력사", "SHAFT-A", "2026-06-10", "작업지시생성"],
              ["SO-20260608-002", "한온시스템", "BRKT-LH", "2026-06-11", "부분출하"],
              ["SO-20260608-004", "기타거래처", "VALVE-TIP", "2026-06-12", "등록"],
            ]}
          />
        </SectionCard>

        <SectionCard title="최근 등록 내역">
          <div className="space-y-3">
            {[
              ["생산실적 등록", "WO-20260608-003", "10분 전"],
              ["출하 등록", "SH-20260608-002", "18분 전"],
              ["수주 등록", "SO-20260608-011", "32분 전"],
              ["작업지시 생성", "WO-20260608-008", "55분 전"],
            ].map((log) => (
              <div key={log.join("-")} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <div>
                  <div className="font-semibold text-slate-800">{log[0]}</div>
                  <div className="mt-1 text-sm text-slate-500">{log[1]}</div>
                </div>
                <div className="text-xs font-medium text-slate-400">{log[2]}</div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
