export type BillingCycle = "monthly" | "quarterly" | "halfYearly" | "yearly";

export interface PlanItem {
  id: string;
  name: string;
  tagline: string;
  monthlyTraffic: string;
  deviceLimit: string;
  bandwidth: string;
  resetRule: string;
  pricing: Record<BillingCycle, { price: string; periodLabel: string; discountNote?: string }>;
  features: string[];
  refundPolicy: string;
  suitableFor: string;
  isPopular?: boolean;
}

export const billingCycleLabels: Record<BillingCycle, string> = {
  monthly: "按月订阅 (灵活测试)",
  quarterly: "按季结算 (季度周期)",
  halfYearly: "半年周期 (中长稳定)",
  yearly: "年度订阅 (完整周期)",
};

export const plansData: PlanItem[] = [
  {
    id: "plan-basic",
    name: "基础轻量方案 (Basic)",
    tagline: "适合单人、轻度网络信息检索与日常办公查询",
    monthlyTraffic: "100 GB / 月",
    deviceLimit: "最多 2 台同时在线设备",
    bandwidth: "最高 200 Mbps 共享带宽速率峰值",
    resetRule: "每个账单周期起始日自动重置流量，未用完流量不结转下月",
    pricing: {
      monthly: { price: "¥ 15.00", periodLabel: "/ 月", discountNote: "标准单月结算" },
      quarterly: { price: "¥ 42.00", periodLabel: "/ 季", discountNote: "合 ¥14.00/月" },
      halfYearly: { price: "¥ 78.00", periodLabel: "/ 半年", discountNote: "合 ¥13.00/月" },
      yearly: { price: "¥ 144.00", periodLabel: "/ 年", discountNote: "合 ¥12.00/月" },
    },
    features: [
      "基础线路中继接入",
      "全天候日常网页与文献检索",
      "支持 Windows / Mac / iOS / Android",
      "标准客户端订阅配置格式 (Clash / V2Ray)",
      "工单技术支持通道",
    ],
    refundPolicy: "因虚拟数字化订阅服务交付即生效，购买前请仔细核对，开通后通常不支持无条件退款。",
    suitableFor: "个人单终端、学术文献查阅、海外办公轻度邮件收发。",
    isPopular: false,
  },
  {
    id: "plan-standard",
    name: "标准平衡方案 (Standard)",
    tagline: "双端或多设备主力首选，满足日常高画质视频与大文件传输",
    monthlyTraffic: "260 GB / 月",
    deviceLimit: "最多 4 台同时在线设备",
    bandwidth: "最高 500 Mbps 共享突发带宽",
    resetRule: "账单日整点自动刷新额度，当月超额后暂停连接直到下个周期或购买叠加包",
    pricing: {
      monthly: { price: "¥ 28.00", periodLabel: "/ 月", discountNote: "推荐单月体验" },
      quarterly: { price: "¥ 78.00", periodLabel: "/ 季", discountNote: "合 ¥26.00/月" },
      halfYearly: { price: "¥ 145.00", periodLabel: "/ 半年", discountNote: "合 ¥24.16/月" },
      yearly: { price: "¥ 268.00", periodLabel: "/ 年", discountNote: "合 ¥22.33/月" },
    },
    features: [
      "优质高可用中继链路",
      "4K 超清流媒体与音视频优化",
      "支持手机、电脑、平板全场景多端同时并发",
      "支持规则智能分流与 DNS 泄露防范",
      "优先工单响应与节点状态监控",
    ],
    refundPolicy: "虚拟产品开通后消耗服务器资源，建议首次订购优先选择月付验证本地网络契合度。",
    suitableFor: "多设备用户、外贸远程桌面、高频视频流媒体与 AI 工具调用。",
    isPopular: true,
  },
  {
    id: "plan-pro",
    name: "高阶旗舰方案 (Pro / Ultimate)",
    tagline: "针对高吞吐量需求、多终端重度数据同步与企业级轻量协作",
    monthlyTraffic: "600 GB / 月",
    deviceLimit: "最多 6 台同时在线设备",
    bandwidth: "最高 1000 Mbps 峰值高速吞吐",
    resetRule: "按自然月或订购日周期刷新，超额流量可由附加包扩展，不顺延至次月",
    pricing: {
      monthly: { price: "¥ 55.00", periodLabel: "/ 月", discountNote: "高配旗舰单月" },
      quarterly: { price: "¥ 150.00", periodLabel: "/ 季", discountNote: "合 ¥50.00/月" },
      halfYearly: { price: "¥ 280.00", periodLabel: "/ 半年", discountNote: "合 ¥46.66/月" },
      yearly: { price: "¥ 520.00", periodLabel: "/ 年", discountNote: "合 ¥43.33/月" },
    },
    features: [
      "多地区专属骨干接入通道",
      "大文件传输与高并发 API 请求保障",
      "支持多终端及家庭工作站环境稳定并发",
      "低抖动网络优化线路",
      "专属高级客户支持通道",
    ],
    refundPolicy: "大额订阅请务必在完成月付测试、确认本地 ISP 运营商无阻断后方可选择长周期。",
    suitableFor: "远程研发人员、跨境团队协作、大容量数据同步与高带宽消耗场景。",
    isPopular: false,
  },
];
