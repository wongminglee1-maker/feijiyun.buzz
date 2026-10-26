import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { articlesData } from "@/config/articles";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "原创知识库与技术深度专文｜飞机云 FeiJiYun",
  description:
    "飞机云原创技术专文集。涵盖订阅规则核验、生命周期管理、DNS 登录排障、跨设备连接决策树、网络故障规范记录、测速误区及账号安全维护。",
  alternates: {
    canonical: `${siteConfig.baseUrl}/articles`,
  },
};

export default function ArticlesIndexPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb items={[{ name: "知识库", href: "/articles" }]} />

        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block">
            EDITORIAL JOURNAL / 7 ARTICLES
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
            连接之外，还有值得仔细了解的细节
          </h1>
          <p className="text-base text-[#868C96] leading-relaxed">
            不同于泛滥的营销软文与简单搬运，本站七篇专文均以 1500–2000 字的深度篇幅，从网络底层协议、消费规则核验与真实故障树出发，提供高价值的实操指引。
          </p>
        </div>

        {/* Magazine Style List */}
        <div className="divide-y divide-[#D7D9D6] border-y border-[#D7D9D6]">
          {articlesData.map((art, idx) => (
            <div
              key={art.id}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-white/50 transition-colors p-4 rounded-xl"
            >
              <div className="md:col-span-1 font-mono text-xl font-bold text-[#868C96]">
                {String(idx + 1).padStart(2, "0")}
              </div>

              <div className="md:col-span-8 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-[#D7D9D6] text-[#3457D5]">
                    {art.category}
                  </span>
                  <span className="text-xs font-mono text-[#868C96]">
                    更新于 {art.updateDate}
                  </span>
                </div>
                <Link href={`/articles/${art.slug}`}>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#17191D] hover:text-[#3457D5] transition-colors">
                    {art.title}
                  </h2>
                </Link>
                <p className="text-xs sm:text-sm text-[#868C96] leading-relaxed">
                  {art.subtitle}
                </p>
                <p className="text-xs text-[#868C96]/90 line-clamp-2 pt-1">
                  {art.metaDescription}
                </p>
              </div>

              <div className="md:col-span-3 flex flex-col md:items-end justify-between h-full space-y-4">
                <span className="text-xs font-mono text-[#868C96]">
                  {art.readTime}
                </span>
                <Link
                  href={`/articles/${art.slug}`}
                  className="inline-flex items-center text-xs font-mono font-semibold text-[#3457D5] hover:underline"
                >
                  阅读全文 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
