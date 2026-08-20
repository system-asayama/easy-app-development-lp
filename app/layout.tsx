import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "アイデアさえあれば、誰でもアプリは作れる。｜AI業務アプリ開発スクール", description: "パソコン初心者でも、スマホの隙間時間にAIへ指示して業務アプリを開発。自分のアイデアを10時間で動くアプリへ。" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ja"><body>{children}</body></html>; }
