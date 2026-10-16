import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Educator | infinite imaginations",
  description:
    "周磊（Panda）— AI 教育工作者｜中职计算机一线教师｜软件开发实践者。自研 AI 教学反馈系统，中职课堂验证迭代；5 年一线执教，公办专科升学率 60%。",
  keywords: [
    "AI 教育",
    "中职计算机",
    "周磊",
    "Panda",
    "教学反馈系统",
    "软件开发",
    "Next.js",
    "C语言教学",
  ],
  authors: [{ name: "周磊（Panda）" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans">{children}</body>
    </html>
  );
}
