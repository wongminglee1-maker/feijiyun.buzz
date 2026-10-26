import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "关于本站与品牌身份说明｜飞机云 feijiyun.buzz",
  description:
    "了解 feijiyun.buzz 站点的真实运营身份、编审标准与商业披露声明。本站为独立网络技术专题，非飞机云官方直营机构，透明披露第三方合作接入关系。",
  alternates: {
    canonical: `${siteConfig.baseUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb items={[{ name: "关于本站", href: "/about" }]} />

        <div className="space-y-4 pb-8 border-b border-[#D7D9D6]">
          <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block">
            ABOUT US & TRANSPARENCY
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
            关于 feijiyun.buzz 与我们的编审标准
          </h1>
          <p className="text-base text-[#868C96] leading-relaxed">
            我们是一群长期关注计算机网络协议、数据中继路由与海外学术协作的技术爱好者。创建本站的初衷，是为了破除网络服务领域信息不对称、夸大宣传与虚假评测的乱象。
          </p>
        </div>

        {/* Section 1: Non-Official Disclaimer */}
        <div className="p-6 rounded-xl bg-white border border-[#D7D9D6] space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-[#17191D]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3457D5]" />
            <span>品牌运营身份严格核验声明</span>
          </div>
          <p className="text-xs sm:text-sm text-[#868C96] leading-relaxed">
            本站（feijiyun.buzz）是一个**完全独立的第三方网络知识专题与排障指引站点**。未经核验，本站明确声明：
          </p>
          <ul className="text-xs sm:text-sm text-[#17191D] space-y-1.5 list-disc pl-5">
            <li>本站并非飞机云官方直营运营主体；</li>
            <li>本站不持有飞机云官方独占或排他性独家授权；</li>
            <li>本站与网络上其他参考同名站点不存在股权、行政或人员隶属关系；</li>
            <li>本站提供客观的规则解读与设备指引，旨在帮助用户理性决策。</li>
          </ul>
        </div>

        {/* Section 2: Affiliate Disclosure */}
        <div className="p-6 rounded-xl bg-white border border-[#D7D9D6] space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-[#17191D]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#17191D]" />
            <span>商业推广与合作平台透明披露</span>
          </div>
          <p className="text-xs sm:text-sm text-[#868C96] leading-relaxed">
            为了维持本站服务器、域名及技术人员日常内容维护的成本，本站部分页面包含商业推广入口（指定的推广链接跳转至 <code>{siteConfig.affiliateUrl}</code>，最终归属于灵动云 / Varnexa 等合作伙伴服务平台）。
          </p>
          <p className="text-xs sm:text-sm text-[#868C96] leading-relaxed">
            当用户通过该链接在合作平台完成注册与订单订购时，平台可能会向本站支付一定比例的技术维护佣金。该推广链接绝不会伪装为软件客户端下载安装包，用户点击后需自行核对目标平台的服务条款与实际收银台价格。
          </p>
        </div>

        {/* Section 3: Editorial Integrity */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#17191D]">
            我们的三大编审原则
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg bg-white border border-[#D7D9D6] space-y-2">
              <h3 className="font-bold text-sm text-[#17191D]">
                1. 杜绝虚构测试数据
              </h3>
              <p className="text-xs text-[#868C96] leading-relaxed">
                绝不凭空发布“全球 100% 解锁”、“2026 评测冠军”等虚假营销话术。所有网络指标均如实标注为物理原理示意。
              </p>
            </div>
            <div className="p-5 rounded-lg bg-white border border-[#D7D9D6] space-y-2">
              <h3 className="font-bold text-sm text-[#17191D]">
                2. 坚持开源安全下载
              </h3>
              <p className="text-xs text-[#868C96] leading-relaxed">
                所有推荐的客户端（Clash Verge、Shadowrocket、v2rayN）必须直接指向 GitHub 官方仓库或正规应用商店，严防木马投毒。
              </p>
            </div>
            <div className="p-5 rounded-lg bg-white border border-[#D7D9D6] space-y-2">
              <h3 className="font-bold text-sm text-[#17191D]">
                3. 重视读者决策自主
              </h3>
              <p className="text-xs text-[#868C96] leading-relaxed">
                强调买前核验规则、优先选择单月低成本试错，让用户根据自身真实网络运营商做出理性判断。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
