import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "联系我们与技术反馈｜飞机云 feijiyun.buzz",
  description:
    "向 feijiyun.buzz 团队提交内容更正建议、排障案例反馈或商业合作咨询。我们重视每一位读者的真实反馈。",
  alternates: {
    canonical: `${siteConfig.baseUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb items={[{ name: "联系我们", href: "/contact" }]} />

        <div className="space-y-4 pb-8 border-b border-[#D7D9D6]">
          <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block">
            CONTACT & FEEDBACK
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
            联系我们与反馈建议
          </h1>
          <p className="text-base text-[#868C96] leading-relaxed">
            如果你在阅读本站文章或设备教程时发现了笔误、过时的客户端版本，或希望补充有价值的排障案例，欢迎随时与我们取得联系。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Channel 1: Editorial & Content corrections */}
          <div className="p-6 rounded-xl bg-white border border-[#D7D9D6] space-y-4">
            <h2 className="text-lg font-bold text-[#17191D]">
              内容修订与勘误
            </h2>
            <p className="text-xs sm:text-sm text-[#868C96] leading-relaxed">
              针对知识专文、FAQ 或各操作系统客户端配置步骤的任何勘误建议，请发送邮件至我们的技术编审邮箱。
            </p>
            <div className="p-3 bg-[#F7F7F5] border border-[#D7D9D6] rounded font-mono text-xs text-[#17191D]">
              editor@feijiyun.buzz
            </div>
            <p className="text-[11px] text-[#868C96]">
              邮件通常会在 1–2 个工作日内得到审阅与回执。
            </p>
          </div>

          {/* Channel 2: Service Provider Support Notice */}
          <div className="p-6 rounded-xl bg-white border border-[#D7D9D6] space-y-4">
            <h2 className="text-lg font-bold text-[#17191D]">
              第三方服务工单提醒
            </h2>
            <p className="text-xs sm:text-sm text-[#868C96] leading-relaxed">
              请注意：本站编辑部**无法直接操作或退款你在第三方平台订购的订单**。若遇到节点连通性故障或需要查询账单，请直接登录你的实际服务平台后台，参考本站《标准用户故障记录模板》提交工单。
            </p>
            <div className="pt-2">
              <a
                href="/articles/network-issue-report"
                className="text-xs font-mono font-semibold text-[#3457D5] hover:underline"
              >
                查看标准工单模板 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
