import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "隐私保护政策｜飞机云 feijiyun.buzz",
  description:
    "feijiyun.buzz 站点的隐私权保护政策。如实说明本站对用户访问日志、Cookie 使用、第三方外链跳转及个人信息保护的实际处理准则。",
  alternates: {
    canonical: `${siteConfig.baseUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb items={[{ name: "隐私保护政策", href: "/privacy" }]} />

        <div className="space-y-4 pb-8 border-b border-[#D7D9D6]">
          <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block">
            LEGAL & PRIVACY
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
            隐私保护政策 (Privacy Policy)
          </h1>
          <p className="text-xs font-mono text-[#868C96]">
            生效日期：2026年3月1日 ｜ 最近修订：2026年10月20日
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-[#17191D] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#17191D]">
              1. 本政策的适用范围
            </h2>
            <p>
              本隐私政策仅适用于由 feijiyun.buzz 域名直接提供的内容、页面检索及技术指引。本站严格遵守“最小必要收集”原则，本站本身不设用户强制注册系统，亦不要求读者提交姓名、手机号或身份证等个人敏感信息。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#17191D]">
              2. 访问日志与技术数据
            </h2>
            <p>
              当你通过浏览器访问本站时，我们的托管服务器基础架构（如 Cloudflare / Vercel）可能会自动记录标准的基础网络访问日志，包括：你的 IP 地址（通常经过匿名化截断）、浏览器 User-Agent、请求的页面 URL 以及访问时间戳。这些数据仅用于：
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#868C96]">
              <li>防御针对本站的恶意流量与 DDoS 攻击；</li>
              <li>统计站点各专文的访问热度以优化内容排版；</li>
              <li>排查服务器网络 404 或静态资源加载异常。</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#17191D]">
              3. Cookie 与本地存储说明
            </h2>
            <p>
              本站默认不植入追踪个人跨站浏览行为的第三方广告 Cookie。我们仅在必要时使用浏览器原生本地存储（LocalStorage / SessionStorage）临时记录：
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#868C96]">
              <li>全站中文检索框的最近输入建议；</li>
              <li>用户对套餐计费周期（按月/按季/按年）的临时界面切换状态。</li>
            </ul>
            <p>
              这些本地存储仅存在于你的个人设备端，不会上传至任何数据分析服务器，你可随时在浏览器设置中清空。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#17191D]">
              4. 第三方推广链接与外部站点免责
            </h2>
            <p>
              本站包含指向第三方合作伙伴平台（例如 <code>{siteConfig.affiliateUrl}</code>）的商业推广链接。一旦你点击该链接离开本站并进入第三方网站，你的个人数据处理将受到该第三方平台自身的隐私政策与服务协议约束。本站不掌握你在该第三方平台注册的账号密码、支付流水或身份凭证。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#17191D]">
              5. 政策修订与联系方式
            </h2>
            <p>
              随着法律法规的要求或站点功能的优化，我们可能会适时更新本政策。如有关于隐私数据处理的任何疑问，请通过 <code>editor@feijiyun.buzz</code> 与我们联系。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
