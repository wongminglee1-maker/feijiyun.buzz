import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/Breadcrumb";
import { devicesData } from "@/config/devices";
import { articlesData } from "@/config/articles";

export const metadata: Metadata = {
  title: "使用指南与技术专题索引｜飞机云 FeiJiYun",
  description:
    "飞机云完整使用指南索引。涵盖各平台客户端准备、订阅开通到期全流程、网络异常排障决策树及安全防护手册。",
  alternates: {
    canonical: `${siteConfig.baseUrl}/guides`,
  },
};

export default function GuidesPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb items={[{ name: "使用说明", href: "/guides" }]} />

        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block">
            GUIDES & INDEX
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
            清晰的阅读路径，助你解决每一次连接疑问
          </h1>
          <p className="text-base text-[#868C96] leading-relaxed">
            无论你是刚刚接触网络配置的新手，还是遇到复杂 DNS 登录异常的进阶用户，这里按终端设备、套餐决策、异常诊断三个维度分类整理了全部指南。
          </p>
        </div>

        {/* Section 1: Device Guides */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#17191D] pb-3 border-b border-[#D7D9D6]">
            一、终端设备配置指南
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {devicesData.map((d) => (
              <Link
                key={d.id}
                href={`/devices/${d.slug}`}
                className="p-6 rounded-xl bg-white border border-[#D7D9D6] hover:border-[#3457D5] transition-all flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#17191D] group-hover:text-[#3457D5] transition-colors">
                    {d.name}
                  </h3>
                  <p className="text-xs text-[#868C96] mt-2 line-clamp-2">
                    {d.systemRequirement}
                  </p>
                </div>
                <div className="pt-4 text-xs font-mono text-[#3457D5] font-medium">
                  阅读配置流程 →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 2: Articles by Category */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#17191D] pb-3 border-b border-[#D7D9D6]">
            二、核心业务与技术排障专文
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articlesData.map((art) => (
              <Link
                key={art.id}
                href={`/articles/${art.slug}`}
                className="p-6 rounded-xl bg-white border border-[#D7D9D6] hover:border-[#3457D5] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F7F7F5] border border-[#D7D9D6] text-[#868C96]">
                      {art.category}
                    </span>
                    <span className="text-xs font-mono text-[#868C96]">
                      {art.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#17191D] group-hover:text-[#3457D5] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#868C96] mt-2 line-clamp-2">
                    {art.subtitle}
                  </p>
                </div>
                <div className="pt-4 text-xs font-mono text-[#3457D5] font-semibold">
                  阅读全文 →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
