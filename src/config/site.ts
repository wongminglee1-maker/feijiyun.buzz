export interface SiteConfig {
  name: string;
  nameEn: string;
  domain: string;
  baseUrl: string;
  tagline: string;
  description: string;
  affiliateUrl: string;
  affiliatePlatformName: string;
  affiliateDisclosure: string;
  nonOfficialDisclaimer: string;
  indexNowKey: string;
  navLinks: { name: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  name: "飞机云",
  nameEn: "FeiJiYun",
  domain: "feijiyun.buzz",
  baseUrl: "https://feijiyun.buzz",
  tagline: "飞机云 FeiJiYun，让每一次连接更有方向",
  description: "了解飞机云 FeiJiYun 相关的机场套餐信息、VPN 客户端、设备连接及常见问题。查看订阅规则、网络线路知识、Windows、Android、iPhone 使用教程与实用帮助。",
  affiliateUrl: "https://varnexa.lingdongaff.com/#/?code=HHoxxHGa",
  affiliatePlatformName: "灵动云 / Varnexa 合作伙伴接入平台",
  affiliateDisclosure: "【商业推广与目标服务披露】本站包含第三方合作伙伴的推广链接（目标服务平台为灵动云 / Varnexa 相关服务）。通过本站推广链接注册或订阅，服务商可能会向本站支付商业佣金。本站作为独立网络资讯与使用知识整理站点，非飞机云官方直营机构，两者不存在行政隶属或唯一官方独占授权关系。请在支付前仔细核验目标平台的实际服务主体与服务条款。",
  nonOfficialDisclaimer: "【独立站点说明】feijiyun.buzz 是专注于网络连接技术、订阅生命周期管理、设备客户端排障的独立中文专题站点。本站提供客观的技术指引与核对清单，未经核验不对任何第三方服务做出绝对可用性或无条件退款担保。请用户理性核对自身网络需求后再做决策。",
  indexNowKey: "4a7f9c2e8b1d6e0a3f5c7b9d1e2f4a6c",
  navLinks: [
    { name: "首页", href: "/" },
    { name: "套餐规则", href: "/plans" },
    { name: "网络指标", href: "/network" },
    { name: "设备中心", href: "/devices" },
    { name: "知识库", href: "/articles" },
    { name: "常见问题", href: "/faq" },
    { name: "关于本站", href: "/about" },
  ],
};
