"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/Logo";
import { SearchModal } from "@/components/SearchModal";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#F7F7F5]/90 backdrop-blur-md border-b border-[#D7D9D6] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7" aria-label="主要导航">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[14px] font-medium transition-colors ${
                    isActive
                      ? "text-[#3457D5] font-semibold"
                      : "text-[#17191D] hover:text-[#3457D5]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Search + Affiliate CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#868C96] bg-white border border-[#D7D9D6] rounded-md hover:border-[#3457D5] hover:text-[#17191D] transition-colors"
              aria-label="搜索全站内容"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>搜索</span>
              <kbd className="font-mono text-[10px] bg-[#F7F7F5] border border-[#D7D9D6] px-1 py-0.5 rounded text-[#868C96]">⌘K</kbd>
            </button>

            <a
              href={siteConfig.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-[13px] font-semibold text-white bg-[#3457D5] hover:bg-[#2845B2] rounded-md transition-all shadow-sm"
              title="前往合作伙伴平台查看连接服务 (商业推广链接)"
            >
              了解连接方案
              <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Right Controls: Search button + Hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#17191D] rounded-md hover:bg-white transition-colors"
              aria-label="打开搜索"
            >
              <svg className="w-5 h-5 text-[#868C96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#17191D] rounded-md hover:bg-white transition-colors"
              aria-label="打开导航菜单"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-[#D7D9D6] bg-[#F7F7F5] px-4 pt-2 pb-6 space-y-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-[15px] font-medium transition-colors ${
                    isActive
                      ? "bg-white text-[#3457D5] font-semibold border border-[#D7D9D6]"
                      : "text-[#17191D] hover:bg-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-[#D7D9D6]">
              <a
                href={siteConfig.affiliateUrl}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="w-full flex items-center justify-center px-4 py-2.5 text-[14px] font-medium text-white bg-[#3457D5] hover:bg-[#2845B2] rounded-md transition-all shadow-sm"
              >
                前往连接服务平台
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <p className="mt-2 text-[11px] text-center text-[#868C96]">
                包含第三方推广链接，跳转至灵动云合作服务平台
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Global Interactive Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
