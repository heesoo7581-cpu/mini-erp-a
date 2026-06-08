import { ActionBar } from "@/components/shared/action-bar";
import { DataTable } from "@/components/shared/data-table";
import { Field } from "@/components/shared/field";
import { SectionCard } from "@/components/shared/section-card";

export default function ProductionResultsPage() {
  return (
    <div className="space-y-6">
      <div className="text-3xl font-black tracking-tight">생산실적 등록</div>
      <SectionCard title="실적 입력">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Field label="실적번호" placeholder="PR-20260608-001" />
          <Field label="작업일자" placeholder="2026-06-08" />
          <Field label="작업지시번호" placeholder="WO-20260608-001" />
          <Field label="품목" placeholder="SHAFT-A" />
          <Field label="작업자" placeholder="장희수" />
          <Field label="설비" placeholder="CNC-01" />
          <Field label="양품수량" placeholder="120" />
          <Field label="불량수량" placeholder="3" />
          <Field label="작업시간(분)" placeholder="210" />
          <Field label="비고" placeholder="특이사항" />
        </div>
        <ActionBar primary="저장" secondary="조회" extra={["신규", "수정", "삭제"]} />
      </SectionCard>
      <SectionCard title="생산실적 내역">
        <DataTable
          columns={["실적번호", "작업지시번호", "품목", "양품", "불량", "시간", "작업자"]}
          rows={[
            ["PR-20260608-001", "WO-20260608-001", "SHAFT-A", "120", "3", "210", "장희수"],
            ["PR-20260608-002", "WO-20260608-001", "SHAFT-A", "180", "2", "260", "김OO"],
          ]}
        />
      </SectionCard>
    </div>
  );
}
