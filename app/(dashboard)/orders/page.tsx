import { ActionBar } from "@/components/shared/action-bar";
import { DataTable } from "@/components/shared/data-table";
import { Field, SelectField } from "@/components/shared/field";
import { SectionCard } from "@/components/shared/section-card";

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="text-3xl font-black tracking-tight">수주 등록</div>
      <SectionCard title="수주 헤더">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Field label="수주번호" placeholder="SO-20260608-001" />
          <Field label="수주일자" placeholder="2026-06-08" />
          <SelectField label="거래처" />
          <Field label="납기일자" placeholder="2026-06-15" />
          <Field label="담당자" placeholder="영업/사무 담당" />
          <SelectField label="상태" />
          <Field label="비고" placeholder="특이사항" wide />
        </div>
      </SectionCard>
      <SectionCard title="수주 품목 라인">
        <DataTable
          columns={["품목코드", "품명", "수량", "단가", "공급가액", "비고"]}
          rows={[
            ["ITEM-0001", "SHAFT-A", "500", "1,200", "600,000", "-"],
            ["ITEM-0002", "BRKT-LH", "200", "2,800", "560,000", "긴급"],
          ]}
        />
        <ActionBar primary="저장" secondary="조회" extra={["신규", "수정", "삭제", "작업지시 생성"]} />
      </SectionCard>
    </div>
  );
}
