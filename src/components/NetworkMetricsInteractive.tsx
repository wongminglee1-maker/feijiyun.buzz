"use client";

import React, { useState } from "react";
import { networkMetrics, NetworkMetric } from "@/config/network";

export const NetworkMetricsInteractive: React.FC = () => {
  const [activeMetricId, setActiveMetricId] = useState<string>("latency");

  const currentMetric: NetworkMetric =
    networkMetrics.find((m) => m.id === activeMetricId) || networkMetrics[0];

  return (
    <div className="w-full space-y-8">
      {/* Horizontal Tabs Switcher */}
      <div className="flex border-b border-[#D7D9D6] overflow-x-auto gap-2 sm:gap-4 pb-px">
        {networkMetrics.map((metric) => {
          const isActive = metric.id === activeMetricId;
          return (
            <button
              key={metric.id}
              onClick={() => setActiveMetricId(metric.id)}
              className={`pb-3 px-3 text-xs sm:text-sm font-medium transition-all whitespace-nowrap border-b-2 flex items-center gap-1.5 ${
                isActive
                  ? "border-[#3457D5] text-[#3457D5] font-semibold"
                  : "border-transparent text-[#868C96] hover:text-[#17191D] hover:border-[#D7D9D6]"
              }`}
            >
              <span>{metric.nameZh}</span>
              <span className="font-mono text-[11px] opacity-70">({metric.nameEn})</span>
            </button>
          );
        })}
      </div>

      {/* Metric Detail Card (Minimalist Premium Layout) */}
      <div className="bg-white border border-[#D7D9D6] rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#D7D9D6] gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F7F7F5] border border-[#D7D9D6] text-[#3457D5]">
                {currentMetric.nameEn}
              </span>
              <span className="text-xs text-[#868C96] font-mono">
                标准度量单位：{currentMetric.unit}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#17191D]">
              {currentMetric.nameZh}
            </h3>
          </div>
          <div className="text-xs font-mono px-3 py-1.5 rounded bg-[#F7F7F5] border border-[#D7D9D6] text-[#17191D] self-start sm:self-auto">
            参考合理阈值：{currentMetric.recommendedThreshold}
          </div>
        </div>

        {/* Definition & Short summary */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-[#868C96] uppercase tracking-wider font-mono">
            概念本质定义
          </h4>
          <p className="text-sm sm:text-base text-[#17191D] leading-relaxed">
            {currentMetric.definition}
          </p>
        </div>

        {/* Principle Diagram Visualizer (Principle Only / Non-faked data) */}
        <div className="p-4 sm:p-5 rounded-lg bg-[#F7F7F5] border border-[#D7D9D6] space-y-2">
          <div className="flex items-center justify-between text-xs text-[#868C96]">
            <span className="font-mono font-semibold">【网络链路物理原理示意图】</span>
            <span className="text-[10px] text-[#868C96] border border-[#D7D9D6] px-1.5 py-0.5 rounded bg-white">
              原理示意 • 非本站实测
            </span>
          </div>
          <div className="p-3 bg-white border border-[#D7D9D6] rounded font-mono text-xs sm:text-sm text-[#17191D] overflow-x-auto text-center">
            {currentMetric.diagramConcept}
          </div>
          <p className="text-[11px] text-[#868C96] leading-normal">
            说明：实际网络中的表现受制于本地接入运营商、海缆跳数与目标服务器防火墙规则，任何声称“全球节点 10ms 零延迟”的宣传均为虚假营销。
          </p>
        </div>

        {/* Two Columns: Influencing Factors vs Practical Testing Advice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#868C96] uppercase tracking-wider font-mono">
              决定该指标的核心物理因素
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#17191D]">
              {currentMetric.keyFactors.map((factor, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3457D5] shrink-0 mt-2" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#868C96] uppercase tracking-wider font-mono">
              可操作的个人测试排查建议
            </h4>
            <div className="text-xs sm:text-sm text-[#17191D] leading-relaxed bg-[#F7F7F5] p-3.5 rounded-lg border border-[#D7D9D6]">
              {currentMetric.testingAdvice}
            </div>
            <div className="text-xs text-[#868C96]">
              <strong>对日常使用的直观影响：</strong> {currentMetric.impactOnUser}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
