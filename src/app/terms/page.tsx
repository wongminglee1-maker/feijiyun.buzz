import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "服务使用条款｜飞机云 feijiyun.buzz",
  description:
    "feijiyun.buzz 站点的服务使用条款。明确本站原创技术内容的知识产权、非直营免责声明及读者使用规范。",
  alternates: {
    canonical: `${siteConfig.baseUrl}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb items={[{ name: "服务条款", href: "/terms" }]} />

        <div className="space-y-4 pb-8 border-b border-[#D7D9D6]">
          <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block">
            LEGAL & TERMS
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
            服务使用条款 (Terms of Service)
          </h1>
          <p className="text-xs font-mono text-[#868C96]">
            生效日期：2026年3月1日 ｜ 最近修订：2026年10月20日
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-[#17191D] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#17191D]">
              1. 协议的确认与接受
            </h2>
            <p>
              欢迎访问 feijiyun.buzz（以下简称“本站”）。访问、浏览或使用本站提供的任何网页、文章、教程或工具，即表示你已充分阅读、理解并同意接受本服务条款的全部内容。如果你不同意本条款的任何部分，请立即停止访问本站。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#17191D]">
              2. 知识产权与原创内容保护
            </h2>
            <p>
              本站发布的所有原创中文文章、排障决策树图表、结构化排版及品牌标识（FeiJiYun SVG Logo）之知识产权均归属于 feijiyun.buzz 团队所有。
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#868C96]">
              <li>允许个人学习、研究与非商业性个人阅读；</li>
              <li>任何机构或个人未经本站书面授权，严禁通过爬虫、批量抓取工具进行全盘复制、镜像盗用或伪造成第三方网站；</li>
              <li>合理引用文章片段必须明确注明来源于 <code>https://feijiyun.buzz</code> 并保留原链接。</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#17191D]">
              3. 独立性与免责声明
            </h2>
            <p>
              本站仅提供关于网络协议、客户端配置与使用常识的技术科普与信息整理。本站对以下事项不做任何形式的明示或暗示担保：
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#868C96]">
              <li>任何第三方网络服务提供商的绝对在线率、特定节点在所有本地运营商下的可用性；</li>
              <li>任何第三方平台的退款政策执行、账单纠纷或不可抗力中断；</li>
              <li>用户因个人操作不当导致的时间偏差、Token 泄露或配置错误所引发的损失。</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#17191D]">
              4. 适用法律与争议解决
            </h2>
            <p>
              本条款之解释与执行均适用普遍通用之数字版权与互联网技术惯例。如双方就本条款内容产生争议，应首先秉承客观互谅原则友好协商解决。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
