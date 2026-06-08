import { ActionBar } from "@/components/shared/action-bar";
import { DataTable } from "@/components/shared/data-table";
import { Field, SelectField } from "@/components/shared/field";
import { SectionCard } from "@/components/shared/section-card";

export default function ShipmentsPage() {
  return (
    <div className="space-y-6">
      <div className="text-3xl font-black tracking-tight">출하 등록</div>
      <SectionCard title="출하 헤더">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Field label="출하번호" placeholder="SH-20260608-001" />
          <Field label="출하일자" placeholder="2026-06-08" />
          <SelectField label="거래처" />
          <Field label="납품처" placeholder="천안" />
          <Field label="차량정보" placeholder="선택 입력" />
          <SelectField label="상태" />
          <Field label="비고" placeholder="출하 특이사항" wide />
        </div>
      </SectionCard>
      <SectionCard title="출하 품목 라인">
        <DataTable
          columns={["수주/작지", "품목", "출하가능수량", "출하수량", "단가", "공급가액"]}
          rows={[
            ["SO-20260608-001 / WO-001", "SHAFT-A", "300", "200", "1,200", "240,000"],
            ["SO-20260608-002 / WO-002", "BRKT-LH", "200", "100", "2,800", "280,000"],
          ]}
        />
        <ActionBar primary="저장" secondary="조회" extra={["신규", "수정", "삭제", "거래명세서 출력"]} />
      </SectionCard>
    </div>
  );
}
