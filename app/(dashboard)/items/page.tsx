import { ActionBar } from "@/components/shared/action-bar";
import { DataTable } from "@/components/shared/data-table";
import { Field } from "@/components/shared/field";
import { SectionCard } from "@/components/shared/section-card";

export default function ItemsPage() {
  return (
    <div className="space-y-6">
      <div className="text-3xl font-black tracking-tight">품목 관리</div>
      <SectionCard title="품목 마스터 입력">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Field label="품목코드" placeholder="ITEM-0001" />
          <Field label="품명" placeholder="SHAFT-A" />
          <Field label="규격" placeholder="Ø20 x 52" />
          <Field label="재질" placeholder="S45C" />
          <Field label="고객도번" placeholder="CUS-DRW-001" />
          <Field label="내부도번" placeholder="JM-001" />
          <Field label="기본단가" placeholder="1,200" />
          <Field label="단위" placeholder="EA" />
        </div>
        <ActionBar primary="저장" secondary="조회" extra={["신규", "수정", "삭제"]} />
      </SectionCard>
      <SectionCard title="품목 목록">
        <DataTable
          columns={["품목코드", "품명", "규격", "재질", "단가", "사용"]}
          rows={[
            ["ITEM-0001", "SHAFT-A", "Ø20 x 52", "S45C", "1,200", "Y"],
            ["ITEM-0002", "BRKT-LH", "120 x 80", "AL6061", "2,800", "Y"],
            ["ITEM-0003", "VALVE-TIP", "소형", "SUS", "980", "Y"],
          ]}
        />
      </SectionCard>
    </div>
  );
}
