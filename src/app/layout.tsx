import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyFC",
  description: "FCOnline 전적 검색 사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-korean bg-black text-white">{children}</body>
    </html>
  );
}
