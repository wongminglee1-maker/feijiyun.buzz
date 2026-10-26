import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { devicesData } from "@/config/devices";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "设备支持与客户端配置中心｜Windows、Mac、Android、iOS 使用指引",
  description:
    "飞机云全设备客户端配置指引。提供 Windows (Clash Verge Rev)、macOS、Android (Clash Meta) 与 iPhone/iPad (Shadowrocket) 的详细教程与官方开源下载渠道。",
  alternates: {
    canonical: `${siteConfig.baseUrl}/devices`,
  },
};

export default function DevicesPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb items={[{ name: "设备中心", href: "/devices" }]} />

        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block">
            CROSS-DEVICE CONFIGURATION
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
            从手机到电脑，连接步骤都应该清楚
          </h1>
          <p className="text-base text-[#868C96] leading-relaxed">
            不同操作系统的网络底座存在本质差异。桌面端使用端口监听与系统代理，移动端依托系统级虚拟网卡（VpnService）。选择你的设备，查看定制化的环境准备与避坑指南。
          </p>
        </div>

        {/* 4 Large Device Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {devicesData.map((dev) => (
            <div
              key={dev.id}
              className="p-8 rounded-xl bg-white border border-[#D7D9D6] hover:border-[#3457D5] transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-[#D7D9D6]">
                  <div>
                    <span className="text-xs font-mono text-[#868C96] uppercase">
                      PLATFORM
                    </span>
                    <h2 className="text-2xl font-bold text-[#17191D]">
                      {dev.name}
                    </h2>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#F7F7F5] border border-[#D7D9D6] text-[#3457D5]">
                    {dev.platform.split(" ")[0]}
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-[#868C96]">
                  <p>
                    <strong className="text-[#17191D]">适用系统：</strong>
                    {dev.platform}
                  </p>
                  <p>
                    <strong className="text-[#17191D]">推荐客户端：</strong>
                    {dev.recommendedClients.map((c) => c.name).join("、")}
                  </p>
                  <p className="line-clamp-2">
                    <strong className="text-[#17191D]">关键前提：</strong>
                    {dev.prerequisites[0]}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D7D9D6] flex items-center justify-between">
                <span className="text-xs text-[#868C96]">4 步快速上手教程</span>
                <Link
                  href={`/devices/${dev.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[#3457D5] hover:underline"
                >
                  查看完整教程与排障 →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Software Download Source Disclaimer */}
        <div className="p-6 rounded-xl bg-white border border-[#D7D9D6] text-xs text-[#868C96] leading-relaxed space-y-2">
          <p className="font-semibold text-[#17191D]">
            【客户端正规安全渠道原则】
          </p>
          <p>
            本站坚决不提供任何经过第三方二次打包篡改的“破解版”、“无限流量版”安装包。所有教程中提供的客户端下载链接均严格指向
            GitHub 官方开源 Releases 页面或苹果官方 App Store 正版专区，保障你的设备安全与账户凭证免受恶意软件威胁。
          </p>
        </div>
      </div>
    </div>
  );
}
