export interface DeviceGuideItem {
  id: string;
  name: string;
  slug: string;
  platform: string;
  systemRequirement: string;
  recommendedClients: {
    name: string;
    description: string;
    officialSourceUrl: string;
    isRecommended: boolean;
  }[];
  prerequisites: string[];
  steps: {
    title: string;
    detail: string;
    notice?: string;
  }[];
  verificationChecklist: string[];
  commonTroubles: {
    question: string;
    solution: string;
  }[];
}

export const devicesData: DeviceGuideItem[] = [
  {
    id: "windows",
    name: "Windows 系统配置",
    slug: "windows",
    platform: "Windows 10 / Windows 11 (64-bit / ARM64)",
    systemRequirement: "建议 Windows 10 1903 以上或 Windows 11 最新稳定版，需具备本地管理员权限安装网络适配器驱动。",
    recommendedClients: [
      {
        name: "Clash Verge Rev",
        description: "现代、美观且活跃维护的开源 Clash 内核客户端，支持 TUN 虚拟网卡模式与规则分流。",
        officialSourceUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
        isRecommended: true,
      },
      {
        name: "v2rayN",
        description: "经典、轻量且底层的 Windows 代理配置工具，支持 Xray / Sing-box 双内核。",
        officialSourceUrl: "https://github.com/2dust/v2rayN/releases",
        isRecommended: false,
      },
    ],
    prerequisites: [
      "请先在合法服务平台获取完整的通用订阅链接（以 https:// 开头）。",
      "确保本地时间已与 Windows 时钟服务器自动同步（时间偏差不得超过 60 秒）。",
      "若安装了第三方安全软件，请确认放行客户端建立 TUN 虚拟网络接口。",
    ],
    steps: [
      {
        title: "第一步：下载并安装官方开源客户端",
        detail: "通过 GitHub 官方 Release 页面下载适用于你系统的 .exe 安装包或便携版压缩包，完成安装并启动客户端。",
        notice: "切勿从不知名第三方网盘或破解论坛下载修改版客户端，以防注入后门或被劫持流量。",
      },
      {
        title: "第二步：导入订阅链接并拉取节点",
        detail: "进入客户端的「订阅 / 订阅配置」管理界面，粘贴你的专属订阅 URL，点击「下载 / 刷新」按钮拉取远程节点清单。",
      },
      {
        title: "第三步：选择运行模式与节点地区",
        detail: "在路由规则设置中选择「规则模式 (Rule)」，避免选用全局代理导致国内网站也被中继。在节点列表中选择延迟适中的目标节点。",
      },
      {
        title: "第四步：开启系统代理或 TUN 模式",
        detail: "在主界面勾选「系统代理」开关；若需要代理 UWP 应用或全局游戏网络，可开启「TUN 虚拟网卡模式」。",
      },
    ],
    verificationChecklist: [
      "打开浏览器访问百度或淘宝，确认加载迅速且 IP 依然显示为本地运营商（证明国内流量未走代理）。",
      "访问国际网络检测页面，检查是否正常获取海外节点 IP 并通过安全连接。",
      "客户端日志面板中无持续红字报错（如 Handshake Error 或 DNS Lookup Timeout）。",
    ],
    commonTroubles: [
      {
        question: "打开系统代理后，浏览器提示“代理服务器未响应”？",
        solution: "通常是因为客户端意外退出但 Windows 系统设置里的「手动设置代理」未自动清除。请前往 Windows 设置 -> 网络和 Internet -> 代理，关闭手动代理服务器开关，并重新启动客户端。",
      },
      {
        question: "订阅更新提示 Fetch Timeout 或 Request Failed？",
        solution: "可能是本地网络与订阅分发服务器直连不畅。尝试在客户端中临时开启节点代理后再更新订阅，或联系服务商确认订阅域名解析是否正常。",
      },
    ],
  },
  {
    id: "macos",
    name: "macOS 系统配置",
    slug: "macos",
    platform: "macOS 12 Monterey / 13 Ventura / 14 Sonoma / 15 Sequoia (Apple Silicon M系列及 Intel)",
    systemRequirement: "支持最新 macOS 系统，首次运行需要系统偏好设置中授权允许安装辅助帮助程序与系统扩展。",
    recommendedClients: [
      {
        name: "Clash Verge Rev (macOS)",
        description: "原生适配 Apple Silicon 与 Intel 架构，支持深色模式与增强模式。",
        officialSourceUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
        isRecommended: true,
      },
      {
        name: "Sing-box / Mihomo Party",
        description: "现代通用代理客户端，图形化仪表盘丰富。",
        officialSourceUrl: "https://github.com/mihomo-party-org/mihomo-party/releases",
        isRecommended: false,
      },
    ],
    prerequisites: [
      "准备好有效订阅链接，支持 HTTPS 传输。",
      "系统时间需设定为「自动设定日期与时间」，避免 TLS 握手证书校验因时差失败。",
      "系统安全保护若阻止未签名应用，需在「隐私与安全性」中点击「仍要打开」。",
    ],
    steps: [
      {
        title: "第一步：安装客户端至应用程序文件夹",
        detail: "下载对应架构（aarch64 对应 M 系列芯片，x64 对应 Intel 芯片）的 .dmg 镜像包，拖动到 Applications 文件夹。",
      },
      {
        title: "第二步：导入订阅并更新配置",
        detail: "打开软件后，在「Profiles / 配置」板块添加远程 URL，填入订阅地址并保存更新。",
      },
      {
        title: "第三步：配置出站规则与分流",
        detail: "建议选用「Rule 规则分流」模式，使大陆域名直连，海外域名走代理通道。",
      },
      {
        title: "第四步：授权系统代理或安装 Service Mode",
        detail: "开启「Set as System Proxy」。如需接管终端（Terminal）环境流量，可在软件内安装 Service Mode 启用 TUN。",
      },
    ],
    verificationChecklist: [
      "Safari 与 Chrome 均能正常访问目标工作网站。",
      "系统偏好设置 -> 网络 -> 详细信息 -> 代理中能看到自动配置的本地监听端口（默认通常为 7897 或 7890）。",
      "隔空投送（AirDrop）与局域网打印机功能不受影响。",
    ],
    commonTroubles: [
      {
        question: "macOS 提示“应用程序已损坏，无法打开”？",
        solution: "这是由于 macOS Gatekeeper 机制导致的。可在终端中运行 sudo xattr -rd com.apple.quarantine /Applications/Clash\\ Verge.app 命令解除系统隔离标记。",
      },
      {
        question: "睡眠唤醒后网络断开无网？",
        solution: "休眠唤醒可能导致系统网络接口重新初始化。尝试在客户端中开关一次「系统代理」或重启内核即可快速恢复。",
      },
    ],
  },
  {
    id: "android",
    name: "Android 系统配置",
    slug: "android",
    platform: "Android 9.0 及以上版本（支持 HarmonyOS 鸿蒙系统）",
    systemRequirement: "支持标准 VpnService API，系统内存建议 3GB 以上，需给予客户端自启动和后台电量保活权限。",
    recommendedClients: [
      {
        name: "Clash Meta for Android (CMFA)",
        description: "开源且功能强大的 Android 代理工具，完整支持 Clash Meta 内核。",
        officialSourceUrl: "https://github.com/MetaCubeX/ClashMetaForAndroid/releases",
        isRecommended: true,
      },
      {
        name: "v2rayNG",
        description: "轻便小巧、对老旧机型兼容度极高的安卓客户端。",
        officialSourceUrl: "https://github.com/2dust/v2rayNG/releases",
        isRecommended: false,
      },
    ],
    prerequisites: [
      "在手机浏览器中复制完整的订阅导入链接。",
      "确认手机未开启其他安全软件的全局网络过滤或私有 DNS 冲突。",
    ],
    steps: [
      {
        title: "第一步：安装官方 APK 安装包",
        detail: "从 GitHub 官方 Releases 页面下载适合架构（通常为 arm64-v8a）的安装包并完成安装。",
      },
      {
        title: "第二步：添加配置并拉取订阅",
        detail: "点击「配置 / 新建配置」->「从 URL 导入」，填写名称与订阅链接，点击保存并点击更新图标下载配置。",
      },
      {
        title: "第三步：选择接入策略与节点",
        detail: "在配置中选择刚刚拉取的规则包，进入「代理」页面选择期望使用的接入节点地区。",
      },
      {
        title: "第四步：授权系统 VPN 连接权限",
        detail: "返回主界面，点击「已停止」开关。系统会弹出「网络连接请求」系统安全弹窗，点击「确定」允许建立 VPN 通道。",
      },
    ],
    verificationChecklist: [
      "手机状态栏上方出现小钥匙图标或 VPN 标识。",
      "微信、国内银行 App 能正常秒开且无网络阻断警告。",
      "海外学术搜索引擎与目标平台加载正常。",
    ],
    commonTroubles: [
      {
        question: "后台运行一段时间后自动断开网络？",
        solution: "国内厂商的定制 Android 系统（如 MIUI/HyperOS, ColorOS, OriginOS）具有激进的后台省电杀进程策略。请在系统设置中将该客户端的「电池管理」设置为「无限制 / 允许后台高耗电」，并在多任务卡片页面加锁锁定。",
      },
      {
        question: "热点共享无法将代理网络分享给笔记本？",
        solution: "Android 默认的 VPN 不会路由热点共享流量。需要在客户端高级设置中开启「允许来自局域网的连接」或「VPN 热点路由共享」功能。",
      },
    ],
  },
  {
    id: "ios",
    name: "iOS / iPadOS 系统配置",
    slug: "ios",
    platform: "iOS 15.0 / iPadOS 15.0 及以上版本",
    systemRequirement: "由于 App Store 区域政策限制，需使用非中国大陆区 Apple ID（如美区、日区、港区等）在 App Store 下载专业网络工具。",
    recommendedClients: [
      {
        name: "Shadowrocket (小火箭)",
        description: "iOS 上功能完备、性价比高且广为流行的规则网络工具（App Store 付费软件，约 $2.99）。",
        officialSourceUrl: "https://apps.apple.com/us/app/shadowrocket/id932747118",
        isRecommended: true,
      },
      {
        name: "Loon / Quantumult X",
        description: "高级脚本规则与流量重写网络调试工具，适合进阶用户定制。",
        officialSourceUrl: "https://apps.apple.com/us/app/loon/id1372235491",
        isRecommended: false,
      },
    ],
    prerequisites: [
      "准备一个境外区域 Apple ID 并登录 App Store（仅在 App Store 登录，切勿在系统 iCloud 登录境外账号以防安全风险）。",
      "从正规服务提供商处获取专用的订阅节点链接（或 Shadowrocket 一键导入短链）。",
    ],
    steps: [
      {
        title: "第一步：从 App Store 获取正版应用",
        detail: "在境外 Apple ID 下搜索并下载正版 Shadowrocket 应用。",
        notice: "严禁在搜索引擎中随意下载来历不明的 iOS 共享证书安装包，谨防设备被远程锁机或 Apple ID 遭封禁。",
      },
      {
        title: "第二步：一键导入或手动添加订阅",
        detail: "打开 Shadowrocket，点击右上角「+」号，类型选择「Subscribe」，在 URL 栏粘贴订阅链接并完成命名保存。",
      },
      {
        title: "第三步：选择节点并设置全局路由",
        detail: "在首页选择想要连接的服务器节点。在「全局路由」选项中，务必选择「配置 (Config)」以启用智能分流规则。",
      },
      {
        title: "第四步：开启连接并信任 VPN 配置",
        detail: "轻触顶部开关，系统将弹出「Shadowrocket 想要添加 VPN 配置」弹窗，点击「允许」并使用面容 ID / 指纹完成授权。",
      },
    ],
    verificationChecklist: [
      "iPhone 灵动岛或状态栏显示 VPN 标识。",
      "本地 App（如高德地图、外卖软件）定位正常，海外网站加载迅速。",
      "在 Shadowrocket「连通性测试」中，节点延迟显示为合理数值。",
    ],
    commonTroubles: [
      {
        question: "连接后微信收发图片缓慢或海外应用依然打不开？",
        solution: "检查全局路由是否误设为「直连」或「全局代理」。请确保设为「配置」。另外在「配置」页面长按默认规则文件，选择「立即更新」以拉取最新的规则列表。",
      },
      {
        question: "更换 Wi-Fi 后出现长时间无网络？",
        solution: "iOS 在 Wi-Fi 与蜂窝数据交替时可能会挂起网络握手。点击一次 Shadowrocket 的开关键关闭后重新开启即可瞬间复位。",
      },
    ],
  },
];
