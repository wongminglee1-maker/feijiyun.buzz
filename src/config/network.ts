export interface NetworkMetric {
  id: string;
  nameEn: string;
  nameZh: string;
  unit: string;
  shortDesc: string;
  definition: string;
  keyFactors: string[];
  impactOnUser: string;
  testingAdvice: string;
  recommendedThreshold: string;
  diagramConcept: string;
}

export const networkMetrics: NetworkMetric[] = [
  {
    id: "latency",
    nameEn: "Latency",
    nameZh: "网络延迟 (RTT)",
    unit: "ms (毫秒)",
    shortDesc: "数据包从本地发出到目标服务器返回确认所需的往返时间",
    definition: "网络延迟即 RTT（Round Trip Time），反映数据传输在物理距离、中继跳数、路由器排队处理及协议握手阶段所累积的时间消耗。",
    keyFactors: [
      "光纤传输的物理距离极限（光在玻璃中的传播速度约为 20 万公里/秒）",
      "本地宽带（光猫/Wi-Fi）至城域网出口的接入层耗时",
      "跨国海底光缆与骨干网互联点（IXP）的中转跳数",
      "目标服务器本身的 TCP/TLS 握手处理响应时间",
    ],
    impactOnUser: "高延迟会导致网页点击后白屏等待时间延长、SSH 终端敲击字符明显卡顿、实时音视频通话产生回声或对话打断。",
    testingAdvice: "建议使用原生 Ping 命令或 MTR 工具连续发送 50 次 ICMP/TCP 探测包，剔除首个冷启动包，观察平均值与中位数，而非只看单次瞬时最优值。（注：原理示意，非本站实测）",
    recommendedThreshold: "同城中继 < 20ms；亚太直连线路 < 80ms；欧美跨洋中继 140ms - 220ms 属于物理常态。",
    diagramConcept: "客户端 ——[接入跳步]—— 运营商出口 ——[物理海底光缆]—— 远端服务器",
  },
  {
    id: "jitter",
    nameEn: "Jitter",
    nameZh: "网络抖动",
    unit: "ms (变化幅度)",
    shortDesc: "连续两个数据包往返时间之间的偏差波动程度",
    definition: "抖动是指网络延迟的时间方差。如果第一个数据包耗时 40ms，第二个耗时 180ms，第三个耗时 50ms，网络便存在显著抖动。",
    keyFactors: [
      "无线 Wi-Fi 信号受到微波炉、蓝牙或邻居同信道干扰产生的重传",
      "骨干路由器在高峰时段出现的瞬时缓冲区膨胀（Bufferbloat）",
      "多路径动态路由协议（BGP）频繁切换下一跳造成的路径差异",
    ],
    impactOnUser: "抖动对大文件下载影响较小，但对 Zoom/Teams 视频会议、Discord 语音通话、在线联机游戏是致命的，会导致声音断续、画面骤降卡顿。",
    testingAdvice: "通过 iperf3 使用 UDP 协议进行 30 秒流传输测试，或者在终端运行连续 ping 测试并观察标准方差（mdev/stddev）。（注：原理示意，非本站实测）",
    recommendedThreshold: "优质语音环境应控制在抖动 < 8ms；普通网页浏览建议抖动 < 25ms。",
    diagramConcept: "稳定流: |---|---|---|  抖动流: |-|-------|--|----|",
  },
  {
    id: "packet-loss",
    nameEn: "Packet Loss",
    nameZh: "网络丢包率",
    unit: "% (百分比)",
    shortDesc: "在传输过程中被路由器丢弃或未能送达目的地的数据包比例",
    definition: "数据包在经过拥塞的交换机队列或信噪比极低的有线/无线物理链路时，超出接收能力被直接抛弃的现象。",
    keyFactors: [
      "晚高峰期跨国国际出口（China Telecom 163 / China Unicom 169）带宽拥塞",
      "家庭网线破损、水晶头老化或无线信号边缘覆盖不良",
      "中间安全设备或防火墙检测到突发高频流进行的限速丢弃",
    ],
    impactOnUser: "TCP 协议在遇到丢包时会主动触发拥塞控制（如加法递增乘法递减），导致传输速率瞬间呈断崖式下跌，甚至降至原来的 1/2 或 1/4。",
    testingAdvice: "使用 mtr --report -c 100 目标IP 检测整条路由链路上每一个跳点的丢包率，排查究竟是本地光猫丢包还是远端机房丢包。（注：原理示意，非本站实测）",
    recommendedThreshold: "理想连接丢包率应为 0.00%；若持续丢包超过 2%，TCP 传输吞吐量将出现显著衰减；超过 5% 会发生明显卡顿断流。",
    diagramConcept: "发出 [1][2][3][4][5] ——> 拥塞网关 [X 3丢弃] ——> 接收 [1][2][4][5] (触发重传)",
  },
  {
    id: "throughput",
    nameEn: "Throughput",
    nameZh: "实际吞吐量 (有效带宽)",
    unit: "Mbps / MB/s",
    shortDesc: "在单位时间内端到端应用层真正成功传输的有效净载荷容量",
    definition: "许多用户容易混淆理论标称带宽与实际吞吐量。即使你办理了 1000Mbps 的家庭千兆光纤，如果远端单连接由于延迟与丢包限制了 TCP 窗口大小，实际有效吞吐量可能只有 30Mbps。",
    keyFactors: [
      "TCP 窗口大小（Bandwidth-Delay Product, BDP = 延迟 × 瓶颈带宽）",
      "客户端及服务端 TCP 拥塞控制算法（BBR vs Cubic）",
      "加密与解密计算对路由器或移动设备 CPU 单核性能的占用消耗",
    ],
    impactOnUser: "吞吐量直接决定了拉取 4K/8K 视频缓冲条的速度、下载大体积项目依赖包或 ISO 镜像所耗费的时长。",
    testingAdvice: "使用单线程与多线程测速对比测试。若多线程能跑满但单线程极慢，说明受制于高 RTT 及单流 TCP 拥塞窗口。（注：原理示意，非本站实测）",
    recommendedThreshold: "4K 视频流畅播放需持续稳定 25–40 Mbps 吞吐；8K 视频需 80–120 Mbps 稳定吞吐。",
    diagramConcept: "1000M 物理管道 ===[BDP与拥塞窗口瓶颈]---> 45M 实际有效流速",
  },
  {
    id: "availability",
    nameEn: "Availability",
    nameZh: "网络可用性 (SLA)",
    unit: "% (在线率)",
    shortDesc: "系统在特定统计周期内能够正常接受请求并正确响应的健康时长比率",
    definition: "可用性通常用“几个 9”衡量。99% 意味着一个月内允许中断约 7.2 小时；99.9%（3个9）意味着每月中断不超过 43.2 分钟。",
    keyFactors: [
      "机房供电双路冗余与物理服务器硬件故障率",
      "上游电信运营商海缆故障、BGP 路由震荡或不可抗力事故",
      "域名 DNS 服务解析节点遭遇 DDoS 攻击引发的解析中断",
    ],
    impactOnUser: "低可用性意味着服务在关键时刻出现打不开、登录失效或配置拉取失败，严重干扰日常工作的连续性。",
    testingAdvice: "建议部署 Uptime Kuma 或使用跨地域监控探针，每隔 60 秒发起一次健康检查探测，记录月度总不可用时长。（注：原理示意，非本站实测）",
    recommendedThreshold: "优质商用网络服务通常追求 99.5% 以上可用性；在公共互联网环境下由于链路复杂，必须具备备用路由切换机制。",
    diagramConcept: "健康探测 [OK][OK][OK][TIMEOUT][OK][OK] => 计算月度在线率百分比",
  },
];
