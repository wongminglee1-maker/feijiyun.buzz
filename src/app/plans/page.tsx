import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PlanCycleSelector } from "@/components/PlanCycleSelector";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "套餐规则与周期核验｜飞机云机场价格与订购注意事项",
  description:
    "全面了解飞机云套餐规则、月度流量额度、同时在线设备限制、重置时间、计费周期与退款条款。支持月付、季付、半年付与年付对比。",
  alternates: {
    canonical: `${siteConfig.baseUrl}/plans`,
  },
};

export default function PlansPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb items={[{ name: "套餐规则", href: "/plans" }]} />

        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block">
            PLANS & VERIFIED RULES
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
            把每一项服务规则看清楚，再做选择
          </h1>
          <p className="text-base text-[#868C96] leading-relaxed">
            购买网络服务不是冲动消费。我们整理了经实际核对的方案参数、设备并发数、流量重置机制与退款免责声明。请根据自己的设备数量和日常工作需求理性选择。
          </p>
        </div>

        {/* Plan Switcher & Cards */}
        <PlanCycleSelector />

        {/* Deep Dive: 4 Decision Rules */}
        <div className="pt-12 border-t border-[#D7D9D6] space-y-6">
          <h2 className="text-2xl font-bold text-[#17191D]">
            订购前必看的四大决策原则
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white border border-[#D7D9D6] space-y-2">
              <h3 className="text-base font-bold text-[#17191D]">
                1. 坚持“首月试错”原则
              </h3>
              <p className="text-xs sm:text-sm text-[#868C96] leading-relaxed">
                网络服务与你本地的宽带运营商（电信、联通、移动）契合度极高。首次订购请务必选择单月周期，验证晚高峰实际体验后再决定是否长约。
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-[#D7D9D6] space-y-2">
              <h3 className="text-base font-bold text-[#17191D]">
                2. 并发设备数是以“出口公网 IP”为准
              </h3>
              <p className="text-xs sm:text-sm text-[#868C96] leading-relaxed">
                同一 Wi-Fi 下的多台设备通常共享一个公网出口，算作 1 个 IP；但如果手机开着移动 5G 同时连接，就会占用第 2 个 IP 并发配额。
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-[#D7D9D6] space-y-2">
              <h3 className="text-base font-bold text-[#17191D]">
                3. 未用流量绝不滚存
              </h3>
              <p className="text-xs sm:text-sm text-[#868C96] leading-relaxed">
                机房带宽成本按月向运营商结算，未用完的配额会在下一个账单日整点自动归零，不存在累积滚存机制。
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-[#D7D9D6] space-y-2">
              <h3 className="text-base font-bold text-[#17191D]">
                4. 目标结算平台身份核验
              </h3>
              <p className="text-xs sm:text-sm text-[#868C96] leading-relaxed">
                点击跳转后将进入灵动云/Varnexa 等合作平台收银台，请仔细核对实际账单金额及商户信息，保留好支付流水截图。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
