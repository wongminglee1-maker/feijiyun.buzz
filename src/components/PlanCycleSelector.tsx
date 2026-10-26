"use client";

import React, { useState } from "react";
import { plansData, BillingCycle, billingCycleLabels } from "@/config/plans";
import { siteConfig } from "@/config/site";

export const PlanCycleSelector: React.FC = () => {
  const [selectedCycle, setSelectedCycle] = useState<BillingCycle>("monthly");

  const cycles: BillingCycle[] = ["monthly", "quarterly", "halfYearly", "yearly"];

  return (
    <div className="w-full space-y-8">
      {/* Billing Cycle Switcher Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 bg-white border border-[#D7D9D6] rounded-xl shadow-xs gap-1 overflow-x-auto max-w-full">
          {cycles.map((cycle) => (
            <button
              key={cycle}
              onClick={() => setSelectedCycle(cycle)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCycle === cycle
                  ? "bg-[#17191D] text-white shadow-xs"
                  : "text-[#868C96] hover:text-[#17191D] hover:bg-[#F7F7F5]"
              }`}
            >
              {billingCycleLabels[cycle]}
            </button>
          ))}
        </div>
      </div>

      {/* Transparent Cycle Advice Callout */}
      <div className="max-w-3xl mx-auto p-4 rounded-lg bg-white border border-[#D7D9D6] text-xs text-[#868C96] leading-relaxed flex items-start gap-3">
        <span className="text-[#3457D5] font-bold text-sm shrink-0">💡 消费建议</span>
        <div>
          {selectedCycle === "monthly" && (
            <span>
              <strong>单月灵活订阅：</strong>强烈推荐首次接触网络服务的用户选择按月订阅。单月试错成本极低，可完整测试本地运营商（电信/联通/移动）在晚高峰的连接稳定性。
            </span>
          )}
          {selectedCycle === "quarterly" && (
            <span>
              <strong>按季结算周期：</strong>适合已完成首月网络测试、确定节点符合自身工作流的平稳型用户，避免每月重复操作续费。
            </span>
          )}
          {selectedCycle === "halfYearly" && (
            <span>
              <strong>半年稳定周期：</strong>折算月费更低，适合长期有海外文献查阅、代码仓库协同及跨境电商后台维护需求的用户。
            </span>
          )}
          {selectedCycle === "yearly" && (
            <span>
              <strong>年度长期订阅：</strong>单月平均成本最优，但请注意网络服务受国际海缆与出口政策影响，订购年度方案前务必确认自身具备持续使用需求。
            </span>
          )}
        </div>
      </div>

      {/* Horizontal Minimalist Plan Comparison Table / Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plansData.map((plan) => {
          const pricing = plan.pricing[selectedCycle];
          return (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-white border transition-all ${
                plan.isPopular
                  ? "border-[#3457D5] shadow-md ring-1 ring-[#3457D5]/20"
                  : "border-[#D7D9D6] shadow-xs hover:border-[#868C96]"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 right-6 bg-[#3457D5] text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  多数用户推荐
                </div>
              )}

              {/* Plan Header */}
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#17191D]">{plan.name}</h3>
                </div>
                <p className="text-xs text-[#868C96] min-h-[32px] leading-relaxed mb-6">
                  {plan.tagline}
                </p>

                {/* Pricing Display */}
                <div className="pb-6 border-b border-[#D7D9D6]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
                      {pricing.price}
                    </span>
                    <span className="text-sm font-medium text-[#868C96]">
                      {pricing.periodLabel}
                    </span>
                  </div>
                  {pricing.discountNote && (
                    <div className="text-xs text-[#3457D5] font-mono mt-1 font-medium">
                      {pricing.discountNote}
                    </div>
                  )}
                </div>

                {/* Core Hard Rules Grid */}
                <div className="py-5 space-y-3 text-xs text-[#17191D] border-b border-[#D7D9D6]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#868C96]">每月可用流量：</span>
                    <span className="font-semibold font-mono">{plan.monthlyTraffic}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#868C96]">并发设备限制：</span>
                    <span className="font-semibold font-mono">{plan.deviceLimit}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#868C96]">峰值突发速率：</span>
                    <span className="font-semibold font-mono">{plan.bandwidth}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="pt-5 space-y-2.5">
                  <span className="text-xs font-semibold text-[#868C96] uppercase tracking-wider block font-mono">
                    包含服务能力
                  </span>
                  <ul className="space-y-2 text-xs text-[#17191D]">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-[#3457D5] shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions & Policy */}
              <div className="pt-8 space-y-3">
                <a
                  href={siteConfig.affiliateUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-lg transition-all shadow-xs ${
                    plan.isPopular
                      ? "bg-[#3457D5] text-white hover:bg-[#2845B2]"
                      : "bg-[#17191D] text-white hover:bg-[#2A2E35]"
                  }`}
                >
                  核对并订购此方案
                  <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <p className="text-[10px] text-center text-[#868C96]">
                  点击将跳转至合作接入平台收银台，请以结算页最终标价为准
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
