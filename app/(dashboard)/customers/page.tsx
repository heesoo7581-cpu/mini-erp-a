import { ActionBar } from "@/components/shared/action-bar";
import { DataTable } from "@/components/shared/data-table";
import { Field, SelectField } from "@/components/shared/field";
import { SectionCard } from "@/components/shared/section-card";

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="text-3xl font-black tracking-tight">거래처 관리</div>
      <SectionCard title="검색 / 입력 영역">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Field label="거래처코드" placeholder="CUST-001" />
          <Field label="거래처명" placeholder="거래처명 입력" />
          <Field label="담당자명" placeholder="담당자" />
          <SelectField label="사용 여부" />
          <Field label="사업자번호" placeholder="000-00-00000" />
          <Field label="연락처" placeholder="010-0000-0000" />
          <Field label="이메일" placeholder="mail@company.com" />
          <Field label="납품처" placeholder="납품처 입력" />
        </div>
        <ActionBar primary="저장" secondary="조회" extra={["신규", "수정", "삭제"]} />
      </SectionCard>
      <SectionCard title="거래처 목록">
        <DataTable
          columns={["거래처코드", "거래처명", "담당자", "연락처", "납품처", "사용"]}
          rows={[
            ["CUST-001", "삼성 협력사", "김OO", "010-1111-1111", "천안", "Y"],
            ["CUST-002", "한온시스템", "박OO", "010-2222-2222", "평택", "Y"],
            ["CUST-003", "기타거래처", "이OO", "010-3333-3333", "아산", "Y"],
          ]}
        />
      </SectionCard>
    </div>
  );
}
