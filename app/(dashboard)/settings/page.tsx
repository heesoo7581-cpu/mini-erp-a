import { DataTable } from "@/components/shared/data-table";
import { SectionCard } from "@/components/shared/section-card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="text-3xl font-black tracking-tight">권한 / 코드 관리</div>
      <div className="grid gap-6 xl:grid-cols-2">
        <SectionCard title="권한 그룹">
          <DataTable
            columns={["권한코드", "권한명", "설명"]}
            rows={[
              ["ADMIN", "관리자", "전체 권한"],
              ["OFFICE", "사무/관리", "거래처, 품목, 수주, 출하"],
              ["PROD", "생산", "작업지시 조회, 생산실적 등록"],
            ]}
          />
        </SectionCard>
        <SectionCard title="공통코드">
          <DataTable
            columns={["그룹", "코드", "코드명", "사용"]}
            rows={[
              ["ORDER_STATUS", "REG", "등록", "Y"],
              ["ORDER_STATUS", "PARTIAL", "부분출하", "Y"],
              ["WO_STATUS", "WORKING", "작업중", "Y"],
            ]}
          />
        </SectionCard>
      </div>
    </div>
  );
}
