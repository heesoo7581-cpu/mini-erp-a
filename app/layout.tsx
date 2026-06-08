import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini ERP A Starter",
  description: "가공업체용 미니 ERP A안 초기 코드",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
