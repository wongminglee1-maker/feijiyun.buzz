import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { articlesData } from "@/config/articles";
import { faqsData } from "@/config/faq";
import { PlanCycleSelector } from "@/components/PlanCycleSelector";
import { NetworkMetricsInteractive } from "@/components/NetworkMetricsInteractive";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata = {
  title: "飞机云 FeiJiYun｜飞机云机场套餐、VPN 使用与连接帮助",
  description:
    "了解飞机云 FeiJiYun 相关的机场套餐信息、VPN 客户端、设备连接及常见问题。查看订阅规则、网络线路知识、Windows、Android、iPhone 使用教程与实用帮助。",
  alternates: {
    canonical: siteConfig.baseUrl,
  },
  openGraph: {
    title: "飞机云 FeiJiYun｜飞机云机场套餐、VPN 使用与连接帮助",
    description:
      "了解飞机云 FeiJiYun 相关的机场套餐信息、VPN 客户端、设备连接及常见问题。查看订阅规则、网络线路知识、Windows、Android、iPhone 使用教程与实用帮助。",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: `${siteConfig.baseUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "飞机云 FeiJiYun 官网专题",
      },
    ],
  },
};

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "飞机云 FeiJiYun",
    url: siteConfig.baseUrl,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.baseUrl}/faq?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <div className="w-full">
        {/* ========================================================= */}
        {/* MODULE 01: 品牌首屏 (Brand Hero)                          */}
        {/* ========================================================= */}
        <section
          id="hero"
          className="snap-section min-h-[calc(100vh-4rem)] flex items-center py-16 sm:py-24 border-b border-[#D7D9D6]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left 60% Text Layout (7 cols on 12-col grid) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D7D9D6] text-[#3457D5] text-xs font-mono tracking-widest uppercase">
                  <span>FEIJIYUN / SIMPLE CONNECTIVITY</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#17191D] tracking-tight leading-[1.18]">
                  飞机云 FeiJiYun，<br className="hidden sm:inline" />
                  让每一次连接更有方向
                </h1>

                <p className="text-base sm:text-lg text-[#868C96] leading-relaxed max-w-2xl">
                  了解网络服务，不必从复杂的技术术语开始。飞机云专题将套餐规则、连接方式、客户端使用与常见问题整理成清晰的阅读路径，帮助你找到真正需要的信息。
                </p>

                {/* Primary & Secondary CTA Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={siteConfig.affiliateUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#3457D5] hover:bg-[#2845B2] rounded-lg transition-all shadow-sm"
                  >
                    了解连接方案
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>

                  <Link
                    href="/guides"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-[#17191D] bg-white border border-[#D7D9D6] hover:border-[#17191D] rounded-lg transition-all"
                  >
                    阅读使用说明
                  </Link>
                </div>

                {/* Verified Product Facts Bar (Minimalist Data Strip) */}
                <div className="pt-6 border-t border-[#D7D9D6] flex flex-wrap gap-6 text-xs text-[#868C96] font-mono">
                  <div>
                    <span className="block text-[#17191D] font-bold text-sm">
                      多平台支持
                    </span>
                    <span>Win / Mac / iOS / Android</span>
                  </div>
                  <div className="h-8 w-px bg-[#D7D9D6] hidden sm:block" />
                  <div>
                    <span className="block text-[#17191D] font-bold text-sm">
                      智能分流
                    </span>
                    <span>大陆直连 / 海外中继加速</span>
                  </div>
                  <div className="h-8 w-px bg-[#D7D9D6] hidden sm:block" />
                  <div>
                    <span className="block text-[#17191D] font-bold text-sm">
                      透明核实
                    </span>
                    <span>非直营披露 / 合作平台跳转</span>
                  </div>
                </div>
              </div>

              {/* Right 40% Original Abstract Geometric Art (5 cols) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-square rounded-2xl bg-white border border-[#D7D9D6] p-8 flex flex-col justify-between overflow-hidden shadow-xs">
                  <div className="flex justify-between items-start text-xs font-mono text-[#868C96]">
                    <span>FIG. 01 — FLOW & ROUTE</span>
                    <span>EST. 2026</span>
                  </div>

                  {/* Clean SVG Vector Plane Wings & Dynamic Curves */}
                  <svg
                    viewBox="0 0 300 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto my-auto"
                    aria-hidden="true"
                  >
                    {/* Concentric trajectory rings */}
                    <circle
                      cx="150"
                      cy="120"
                      r="100"
                      stroke="#D7D9D6"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <circle
                      cx="150"
                      cy="120"
                      r="65"
                      stroke="#D7D9D6"
                      strokeWidth="1"
                    />
                    {/* Dynamic flight vector lines */}
                    <path
                      d="M20 180C70 180 100 80 200 60C250 50 280 70 290 80"
                      stroke="#17191D"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M40 210C100 210 140 130 220 110"
                      stroke="#868C96"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                    {/* Restrained blue geometric flight wing */}
                    <g transform="translate(180, 50)">
                      <path
                        d="M-40 20L40 -10L10 35L-10 20L-40 20Z"
                        fill="#3457D5"
                      />
                      <circle cx="40" cy="-10" r="3" fill="#17191D" />
                    </g>
                  </svg>

                  <div className="text-[11px] text-[#868C96] font-mono flex justify-between border-t border-[#D7D9D6] pt-3">
                    <span>GEOMETRIC ORIENTATION</span>
                    <span>NO SPEED FICTION</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* MODULE 02: 服务概览 (Service Overview)                     */}
        {/* ========================================================= */}
        <section
          id="overview"
          className="snap-section py-20 sm:py-28 border-b border-[#D7D9D6]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block mb-2">
                MODULE 02 / STRUCTURE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
                把复杂的信息，变得容易理解
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#868C96] max-w-2xl">
                网络使用涉及协议、客户端、设备权限与网络分流。我们将核心知识拆分为三大横向支柱，助你建立清晰的技术认知。
              </p>
            </div>

            {/* Three Horizontal Rows (No chunky cards, minimalist strips) */}
            <div className="space-y-4">
              {/* Row 1 */}
              <Link
                href="/devices"
                className="group block p-6 sm:p-8 bg-white border border-[#D7D9D6] rounded-xl hover:border-[#3457D5] transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-3">
                    <span className="text-xs font-mono text-[#868C96] block mb-1">
                      PILLAR 01
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#17191D] group-hover:text-[#3457D5] transition-colors">
                      连接方式与终端
                    </h3>
                  </div>
                  <div className="md:col-span-7 text-xs sm:text-sm text-[#868C96] leading-relaxed">
                    全面解析 Windows 系统代理、macOS 增强模式、Android 的 VpnService 权限与 iOS 小火箭配置。了解不同设备与网络环境下的最优客户端选择。
                  </div>
                  <div className="md:col-span-2 flex justify-start md:justify-end items-center text-xs font-mono font-medium text-[#17191D] group-hover:text-[#3457D5]">
                    <span>查看设备指引 →</span>
                  </div>
                </div>
              </Link>

              {/* Row 2 */}
              <Link
                href="/plans"
                className="group block p-6 sm:p-8 bg-white border border-[#D7D9D6] rounded-xl hover:border-[#3457D5] transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-3">
                    <span className="text-xs font-mono text-[#868C96] block mb-1">
                      PILLAR 02
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#17191D] group-hover:text-[#3457D5] transition-colors">
                      使用规则与周期
                    </h3>
                  </div>
                  <div className="md:col-span-7 text-xs sm:text-sm text-[#868C96] leading-relaxed">
                    拆解套餐月流量计算、账单日重置机制、同时在线设备 IP 并发限制以及非结转特性。建立买前核对清单，杜绝盲目消费与退款纠纷。
                  </div>
                  <div className="md:col-span-2 flex justify-start md:justify-end items-center text-xs font-mono font-medium text-[#17191D] group-hover:text-[#3457D5]">
                    <span>核对套餐规则 →</span>
                  </div>
                </div>
              </Link>

              {/* Row 3 */}
              <Link
                href="/articles"
                className="group block p-6 sm:p-8 bg-white border border-[#D7D9D6] rounded-xl hover:border-[#3457D5] transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-3">
                    <span className="text-xs font-mono text-[#868C96] block mb-1">
                      PILLAR 03
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#17191D] group-hover:text-[#3457D5] transition-colors">
                      持续维护与排障
                    </h3>
                  </div>
                  <div className="md:col-span-7 text-xs sm:text-sm text-[#868C96] leading-relaxed">
                    提供节点订阅本地刷新指南、DNS 污染诊断决策树、登录异常排查以及可复制的工单证据记录模板，让日常维护有据可依。
                  </div>
                  <div className="md:col-span-2 flex justify-start md:justify-end items-center text-xs font-mono font-medium text-[#17191D] group-hover:text-[#3457D5]">
                    <span>阅读排障知识 →</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* MODULE 03: 网络指标 (Network Concepts)                     */}
        {/* ========================================================= */}
        <section
          id="network"
          className="snap-section py-20 sm:py-28 border-b border-[#D7D9D6]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block mb-2">
                MODULE 03 / METRICS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
                判断连接质量，不应该只看一个数字
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#868C96] max-w-2xl">
                网络性能是由延迟、抖动、丢包、吞吐量与可用性构成的多维物理体系。点击下方指标查看物理定义、关键影响与实用测试方法。
              </p>
            </div>

            {/* Interactive Metrics Switcher Component */}
            <NetworkMetricsInteractive />
          </div>
        </section>

        {/* ========================================================= */}
        {/* MODULE 04: 套餐中心 (Plan Center)                         */}
        {/* ========================================================= */}
        <section
          id="plans"
          className="snap-section py-20 sm:py-28 border-b border-[#D7D9D6]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block mb-2">
                MODULE 04 / PLANS & RULES
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
                把每一项服务规则看清楚，再做选择
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#868C96]">
                拒绝模糊营销。下方列出经核实的方案流量、设备并发、突发速率与退款条款。支持单月、季度、半年与年度结算切换。
              </p>
            </div>

            {/* Plan Cycle Selector & Horizontal Comparison Table */}
            <PlanCycleSelector />
          </div>
        </section>

        {/* ========================================================= */}
        {/* MODULE 05: 设备中心 (Device Center)                       */}
        {/* ========================================================= */}
        <section
          id="devices"
          className="snap-section py-20 sm:py-28 border-b border-[#D7D9D6]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block mb-2">
                MODULE 05 / DEVICES
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
                从手机到电脑，连接步骤都应该清楚
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#868C96] max-w-2xl">
                所有客户端下载均严格指向开源官方仓库与正版应用商店，坚决不把推广链接伪装成软件安装包。
              </p>
            </div>

            {/* Device Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  id: "windows",
                  name: "Windows",
                  client: "Clash Verge Rev",
                  req: "Win 10/11 64位",
                  url: "/devices/windows",
                },
                {
                  id: "macos",
                  name: "macOS",
                  client: "Clash Verge (Mac)",
                  req: "macOS 12+ / M芯片",
                  url: "/devices/macos",
                },
                {
                  id: "android",
                  name: "Android",
                  client: "Clash Meta / v2rayNG",
                  req: "Android 9.0+ / 鸿蒙",
                  url: "/devices/android",
                },
                {
                  id: "ios",
                  name: "iOS / iPadOS",
                  client: "Shadowrocket",
                  req: "iOS 15.0+ 境外ID",
                  url: "/devices/ios",
                },
              ].map((d) => (
                <Link
                  key={d.id}
                  href={d.url}
                  className="group p-6 rounded-xl bg-white border border-[#D7D9D6] hover:border-[#3457D5] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F7F7F5] border border-[#D7D9D6] flex items-center justify-center font-mono font-bold text-sm text-[#17191D] group-hover:text-[#3457D5] transition-colors">
                      {d.name.slice(0, 2).toUpperCase()}
                    </div>
                    <h3 className="text-lg font-bold text-[#17191D] group-hover:text-[#3457D5] transition-colors">
                      {d.name} 配置指南
                    </h3>
                    <div className="space-y-1 text-xs text-[#868C96]">
                      <p>推荐工具：<span className="text-[#17191D]">{d.client}</span></p>
                      <p>要求：{d.req}</p>
                    </div>
                  </div>
                  <div className="pt-6 text-xs font-mono text-[#3457D5] flex items-center gap-1 font-medium">
                    <span>查看完整步骤 →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* MODULE 06: 原创知识中心 (Original Knowledge Hub)           */}
        {/* ========================================================= */}
        <section
          id="articles"
          className="snap-section py-20 sm:py-28 border-b border-[#D7D9D6]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#D7D9D6] gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block mb-2">
                  MODULE 06 / EDITORIAL JOURNAL
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
                  连接之外，还有值得仔细了解的细节
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#868C96] max-w-2xl">
                  高级杂志目录式排版。7 篇深度中文专文，涵盖订阅生命周期、排障决策树、测速误区与日常安全防护。
                </p>
              </div>

              <Link
                href="/articles"
                className="text-xs font-mono font-semibold text-[#17191D] hover:text-[#3457D5] border border-[#D7D9D6] bg-white px-3 py-2 rounded-md transition-colors shrink-0"
              >
                浏览全部 7 篇文章 →
              </Link>
            </div>

            {/* Magazine Style Table of Contents (01 — Title — Category — Reading Time) */}
            <div className="divide-y divide-[#D7D9D6]">
              {articlesData.map((art, idx) => (
                <Link
                  key={art.id}
                  href={`/articles/${art.slug}`}
                  className="group py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/60 transition-colors px-2 rounded-lg"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#868C96] group-hover:text-[#3457D5] transition-colors pt-1">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#17191D] group-hover:text-[#3457D5] transition-colors">
                        {art.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#868C96] mt-1 line-clamp-1">
                        {art.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-[#868C96] shrink-0 self-end md:self-center">
                    <span className="px-2 py-0.5 rounded bg-white border border-[#D7D9D6] text-[#17191D]">
                      {art.category}
                    </span>
                    <span>{art.readTime}</span>
                    <span className="text-[#3457D5] font-bold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* MODULE 07: 帮助与下一步 (Help & Next Steps)                 */}
        {/* ========================================================= */}
        <section
          id="help"
          className="snap-section py-20 sm:py-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block mb-2">
                MODULE 07 / NEXT STEPS & FAQ
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
                想解决一个问题？从这里开始
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#868C96] max-w-2xl">
                汇总日常高频疑难解答。无论是订阅到期刷新、DNS 登录排查还是跨设备连接，均可展开阅读。
              </p>
            </div>

            {/* Featured FAQs (Top 6 Accordions on Home Page) */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#D7D9D6] shadow-xs">
              <FaqAccordion items={faqsData.slice(0, 6)} defaultOpenFirst={true} />
              <div className="pt-6 text-center">
                <Link
                  href="/faq"
                  className="inline-flex items-center text-xs font-mono font-semibold text-[#3457D5] hover:underline"
                >
                  查看全部 15 项常见问题与官方问答解答 →
                </Link>
              </div>
            </div>

            {/* Commercial Partner Jump Box */}
            <div className="p-8 rounded-xl bg-white border border-[#D7D9D6] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-lg font-bold text-[#17191D]">
                  准备好开启全球互联体验了吗？
                </h3>
                <p className="text-xs sm:text-sm text-[#868C96]">
                  前往合作伙伴平台查看实时可用套餐，请以收银台标价与服务条款为准。
                </p>
              </div>
              <a
                href={siteConfig.affiliateUrl}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#3457D5] hover:bg-[#2845B2] rounded-lg transition-all shadow-sm shrink-0"
              >
                前往订阅服务平台 →
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
