import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F7F7F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "飞机云 FeiJiYun｜飞机云机场套餐、VPN 使用与连接帮助",
    template: "%s ｜ 飞机云 FeiJiYun",
  },
  description: siteConfig.description,
  keywords: [
    "飞机云",
    "飞机云机场",
    "飞机云vpn",
    "飞机云 VPN",
    "飞机云机场官网",
    "飞机云官网",
    "飞机云 官网",
    "FeiJiYun",
    "feijiyun.buzz",
    "飞机云套餐",
    "飞机云机场价格",
    "飞机云订阅",
    "Clash Verge Rev",
    "Shadowrocket",
  ],
  authors: [{ name: "FeiJiYun Editorial Team", url: siteConfig.baseUrl }],
  creator: "FeiJiYun Editorial Team",
  publisher: "feijiyun.buzz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "飞机云 FeiJiYun｜飞机云机场套餐、VPN 使用与连接帮助",
    description: siteConfig.description,
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "飞机云 FeiJiYun 官网专题",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "飞机云 FeiJiYun｜飞机云机场套餐、VPN 使用与连接帮助",
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased min-h-screen flex flex-col bg-[#F7F7F5] text-[#17191D]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
