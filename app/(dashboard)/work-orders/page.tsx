import { ActionBar } from "@/components/shared/action-bar";
import { DataTable } from "@/components/shared/data-table";
import { Field, SelectField } from "@/components/shared/field";
import { SectionCard } from "@/components/shared/section-card";

export default function WorkOrdersPage() {
  return (
    <div className="space-y-6">
      <div className="text-3xl font-black tracking-tight">작업지시 등록</div>
      <SectionCard title="작업지시 헤더">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Field label="작업지시번호" placeholder="WO-20260608-001" />
          <Field label="수주번호" placeholder="SO-20260608-001" />
          <SelectField label="거래처" />
          <SelectField label="우선순위" />
          <Field label="품목" placeholder="SHAFT-A" />
          <Field label="지시수량" placeholder="500" />
          <Field label="예정시작일" placeholder="2026-06-08" />
          <Field label="예정완료일" placeholder="2026-06-10" />
          <Field label="설비" placeholder="CNC-01" />
          <Field label="작업자" placeholder="작업자명" />
          <SelectField label="상태" />
          <Field label="비고" placeholder="가공 주의사항" />
        </div>
        <ActionBar primary="저장" secondary="조회" extra={["신규", "수정", "삭제", "작업지시서 출력"]} />
      </SectionCard>
      <SectionCard title="작업지시 목록">
        <DataTable
          columns={["작업지시번호", "수주번호", "품목", "지시수량", "양품", "잔량", "상태"]}
          rows={[
            ["WO-20260608-001", "SO-20260608-001", "SHAFT-A", "500", "300", "200", "작업중"],
            ["WO-20260608-002", "SO-20260608-002", "BRKT-LH", "200", "200", "0", "작업완료"],
          ]}
        />
      </SectionCard>
    </div>
  );
}
