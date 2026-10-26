import React from "react";
import Link from "next/link";
import { DeviceGuideItem } from "@/config/devices";
import { Breadcrumb } from "@/components/Breadcrumb";
import { siteConfig } from "@/config/site";

interface DeviceDetailViewProps {
  device: DeviceGuideItem;
}

export const DeviceDetailView: React.FC<DeviceDetailViewProps> = ({ device }) => {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb
          items={[
            { name: "设备中心", href: "/devices" },
            { name: device.name, href: `/devices/${device.slug}` },
          ]}
        />

        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-[#D7D9D6]">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#3457D5] uppercase tracking-wider">
            <span>DEVICE TUTORIAL / {device.slug.toUpperCase()}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
            {device.name}
          </h1>
          <p className="text-sm sm:text-base text-[#868C96] leading-relaxed">
            {device.platform} 环境下的完整连接配置、官方客户端获取与日常疑难排查。
          </p>
        </div>

        {/* Section 1: System requirements & Official Clients */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#17191D]">
            一、系统要求与推荐客户端（官方渠道）
          </h2>
          <div className="p-4 rounded-lg bg-white border border-[#D7D9D6] text-xs sm:text-sm text-[#17191D]">
            <p>
              <strong>系统基线：</strong> {device.systemRequirement}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {device.recommendedClients.map((c, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-white border border-[#D7D9D6] space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-base text-[#17191D]">
                      {c.name}
                    </h3>
                    {c.isRecommended && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3457D5] text-white">
                        优先推荐
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#868C96] leading-relaxed">
                    {c.description}
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href={c.officialSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-mono font-medium text-[#3457D5] hover:underline"
                  >
                    前往官方正规发布通道下载 ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Prerequisites */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#17191D]">
            二、配置准备事项
          </h2>
          <ul className="space-y-2.5">
            {device.prerequisites.map((pre, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#D7D9D6] text-xs sm:text-sm text-[#17191D]"
              >
                <span className="font-mono text-xs font-bold text-[#3457D5] mt-0.5">
                  0{idx + 1}
                </span>
                <span>{pre}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Step by Step */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#17191D]">
            三、四步配置流程
          </h2>
          <div className="space-y-4">
            {device.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#D7D9D6] space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#17191D] text-white text-xs font-mono flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-[#17191D]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#868C96] pl-8 leading-relaxed">
                  {step.detail}
                </p>
                {step.notice && (
                  <div className="ml-8 mt-2 p-2.5 rounded bg-[#F7F7F5] border border-[#D7D9D6] text-[11px] text-[#17191D]">
                    <strong>安全注意：</strong> {step.notice}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Verification Checklist */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#17191D]">
            四、连接生效检查清单
          </h2>
          <div className="p-6 rounded-xl bg-white border border-[#D7D9D6] space-y-3">
            {device.verificationChecklist.map((check, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17191D]">
                <span className="text-[#3457D5] font-bold">✓</span>
                <span>{check}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Common Troubles */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#17191D]">
            五、该系统高频疑难解答
          </h2>
          <div className="space-y-3">
            {device.commonTroubles.map((tr, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-white border border-[#D7D9D6] space-y-2"
              >
                <h3 className="text-sm sm:text-base font-bold text-[#17191D]">
                  Q: {tr.question}
                </h3>
                <p className="text-xs sm:text-sm text-[#868C96] leading-relaxed">
                  A: {tr.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA & Disclaimers */}
        <div className="pt-8 border-t border-[#D7D9D6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/articles/cross-device-connection"
            className="text-xs sm:text-sm font-semibold text-[#3457D5] hover:underline"
          >
            ← 阅读深度分析：《电脑正常、手机却无法连接？一次看懂不同设备的网络配置差异》
          </Link>
          <a
            href={siteConfig.affiliateUrl}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#3457D5] hover:bg-[#2845B2] rounded-md transition-all shadow-xs"
          >
            获取可用节点配置 →
          </a>
        </div>
      </div>
    </div>
  );
};
