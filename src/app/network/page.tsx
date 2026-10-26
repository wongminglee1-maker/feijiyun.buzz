import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { NetworkMetricsInteractive } from "@/components/NetworkMetricsInteractive";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "网络指标与连接质量诊断｜延迟、抖动、丢包与吞吐量解析",
  description:
    "深入理解网络延迟（Latency）、抖动（Jitter）、丢包率（Packet Loss）、有效吞吐量（Throughput）与可用性（SLA）。掌握科学的网络测试排查方法与物理原理。",
  alternates: {
    canonical: `${siteConfig.baseUrl}/network`,
  },
};

export default function NetworkPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb items={[{ name: "网络指标", href: "/network" }]} />

        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase text-[#3457D5] tracking-widest block">
            NETWORK METRICS & DIAGNOSTICS
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight">
            判断连接质量，不应该只看一个数字
          </h1>
          <p className="text-base text-[#868C96] leading-relaxed">
            很多用户习惯用“测速能跑多少 Mbps”作为衡量网络好坏的唯一标准。然而，高延迟会导致网页白屏等待，高丢包会导致视频反复卡顿转圈。点击下方指标，了解真正的物理指标原理与测试建议。
          </p>
        </div>

        {/* Interactive Metrics */}
        <NetworkMetricsInteractive />

        {/* Deep Dive Articles Callout */}
        <div className="p-8 rounded-xl bg-white border border-[#D7D9D6] space-y-4">
          <h2 className="text-xl font-bold text-[#17191D]">
            深入学习相关排障专文
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/articles/network-performance-metrics"
              className="p-4 rounded-lg bg-[#F7F7F5] border border-[#D7D9D6] hover:border-[#3457D5] transition-all group"
            >
              <h3 className="text-sm font-bold text-[#17191D] group-hover:text-[#3457D5] transition-colors">
                《下载速度、网页响应和视频缓冲：为什么三种体验不能只看 Mbps？》 →
              </h3>
              <p className="text-xs text-[#868C96] mt-1">
                拆解宽带标称带宽、首字节响应时间（TTFB）与长连接吞吐量。
              </p>
            </Link>

            <Link
              href="/articles/network-issue-report"
              className="p-4 rounded-lg bg-[#F7F7F5] border border-[#D7D9D6] hover:border-[#3457D5] transition-all group"
            >
              <h3 className="text-sm font-bold text-[#17191D] group-hover:text-[#3457D5] transition-colors">
                《如何记录一次可靠的网络故障？测试时间、环境与关键证据整理方法》 →
              </h3>
              <p className="text-xs text-[#868C96] mt-1">
                掌握 MTR 链路探测与脱敏工单记录规范，避免无效沟通。
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
