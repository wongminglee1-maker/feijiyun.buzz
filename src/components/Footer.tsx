import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F7F7F5] border-t border-[#D7D9D6] text-[#17191D] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-[#D7D9D6]">
          {/* Brand Info & Mission */}
          <div className="md:col-span-2 space-y-4 pr-4">
            <Logo />
            <p className="text-sm text-[#868C96] leading-relaxed max-w-sm">
              飞机云 FeiJiYun 独立中文知识专题。致力于将网络订阅规则、多端客户端连接、指标诊断与日常账号防护梳理成清爽、客观的阅读路径。
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono text-[#868C96] border border-[#D7D9D6] rounded px-2 py-1 bg-white">
                DOMAIN: HTTPS://FEIJIYUN.BUZZ
              </span>
            </div>
          </div>

          {/* Column 1: Guides & Diagnostics */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#17191D] font-mono">
              排障与指标
            </h4>
            <ul className="space-y-2 text-sm text-[#868C96]">
              <li>
                <Link href="/network" className="hover:text-[#3457D5] transition-colors">
                  网络五大指标
                </Link>
              </li>
              <li>
                <Link href="/articles/dns-browser-troubleshooting" className="hover:text-[#3457D5] transition-colors">
                  DNS 与登录异常
                </Link>
              </li>
              <li>
                <Link href="/articles/cross-device-connection" className="hover:text-[#3457D5] transition-colors">
                  跨设备排障决策树
                </Link>
              </li>
              <li>
                <Link href="/articles/network-issue-report" className="hover:text-[#3457D5] transition-colors">
                  标准故障记录模板
                </Link>
              </li>
              <li>
                <Link href="/articles/network-performance-metrics" className="hover:text-[#3457D5] transition-colors">
                  带宽与测速误区
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Devices & Clients */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#17191D] font-mono">
              设备指南
            </h4>
            <ul className="space-y-2 text-sm text-[#868C96]">
              <li>
                <Link href="/devices/windows" className="hover:text-[#3457D5] transition-colors">
                  Windows 配置说明
                </Link>
              </li>
              <li>
                <Link href="/devices/macos" className="hover:text-[#3457D5] transition-colors">
                  macOS 配置说明
                </Link>
              </li>
              <li>
                <Link href="/devices/android" className="hover:text-[#3457D5] transition-colors">
                  Android 配置说明
                </Link>
              </li>
              <li>
                <Link href="/devices/ios" className="hover:text-[#3457D5] transition-colors">
                  iOS / iPadOS 配置说明
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#3457D5] transition-colors">
                  常见问题解答 (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Site Policies & External Partner */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#17191D] font-mono">
              站点信息与服务
            </h4>
            <ul className="space-y-2 text-sm text-[#868C96]">
              <li>
                <Link href="/about" className="hover:text-[#3457D5] transition-colors">
                  关于本站与身份核实
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:text-[#3457D5] transition-colors">
                  套餐规则核对
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#3457D5] transition-colors">
                  隐私保护政策
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#3457D5] transition-colors">
                  服务使用条款
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#3457D5] transition-colors">
                  联系我们
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-[#3457D5] transition-colors font-mono text-xs">
                  Sitemap XML
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#868C96] gap-3">
          <p>© 2026 feijiyun.buzz. 保留所有原创知识内容权利。严禁未经授权全盘抓取复制。</p>
          <div className="flex items-center space-x-4">
            <span>静态生成 (SSG / Pre-rendered)</span>
            <span>•</span>
            <span>适配 Bing & Google 搜索引擎标准</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
