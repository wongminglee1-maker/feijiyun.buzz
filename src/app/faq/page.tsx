import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { faqsData } from "@/config/faq";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "常见问题解答中心 (FAQ)｜飞机云机场使用与排障全解",
  description:
    "飞机云 15 个常见疑问全解答：官网入口核实、VPN 区别、套餐规则、到期续费刷新、电脑手机不同步、DNS 登录排查、测速误区及账号防泄露指南。",
  alternates: {
    canonical: `${siteConfig.baseUrl}/faq`,
  },
};

export default function FaqPage() {
  // Generate valid FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Breadcrumb items={[{ name: "常见问题", href: "/faq" }]} />

          <div className="space-y-3 pb-4 border-b border-[#D7D9D6]">
            <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block">
              HELP CENTER / 15 FAQS
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
              想解决一个问题？从这里开始
            </h1>
            <p className="text-base text-[#868C96] leading-relaxed">
              这里汇总了关于飞机云品牌认知、套餐规则核验、客户端连接配置以及日常网络异常排障的 15 个关键问题。点击问题即可展开阅读详细解答。
            </p>
          </div>

          {/* Full Accordion of all 15 FAQs */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#D7D9D6] shadow-xs">
            <FaqAccordion items={faqsData} defaultOpenFirst={true} />
          </div>

          {/* Still have questions? */}
          <div className="p-8 rounded-xl bg-white border border-[#D7D9D6] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-[#17191D]">
                没有找到你遇到的特定问题？
              </h3>
              <p className="text-xs sm:text-sm text-[#868C96]">
                查阅我们的网络异常诊断专文，或按照标准故障记录模板向客服团队提交工单。
              </p>
            </div>
            <a
              href="/articles/network-issue-report"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#17191D] hover:bg-[#2A2E35] rounded-md transition-all shadow-xs shrink-0"
            >
              查看故障工单模板 →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
