import {
  LayoutDashboard,
  Users,
  Boxes,
  FileText,
  ClipboardList,
  Factory,
  Wrench,
  Truck,
  Printer,
  Settings,
} from "lucide-react";

export const menuGroups = [
  {
    title: "대시보드",
    items: [{ href: "/dashboard", label: "운영현황", icon: LayoutDashboard }],
  },
  {
    title: "기준정보",
    items: [
      { href: "/customers", label: "거래처 관리", icon: Users },
      { href: "/items", label: "품목 관리", icon: Boxes },
    ],
  },
  {
    title: "수주관리",
    items: [
      { href: "/orders", label: "수주 등록", icon: FileText },
      { href: "/orders", label: "수주 목록", icon: ClipboardList },
    ],
  },
  {
    title: "생산관리",
    items: [
      { href: "/work-orders", label: "작업지시 등록", icon: Factory },
      { href: "/production-results", label: "생산실적 등록", icon: Wrench },
    ],
  },
  {
    title: "출하관리",
    items: [{ href: "/shipments", label: "출하 등록", icon: Truck }],
  },
  {
    title: "문서출력",
    items: [{ href: "/print", label: "거래명세서 출력", icon: Printer }],
  },
  {
    title: "시스템관리",
    items: [{ href: "/settings", label: "권한/코드 관리", icon: Settings }],
  },
];
