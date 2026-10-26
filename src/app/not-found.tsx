import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "404 页面未找到｜飞机云 feijiyun.buzz",
  description: "请求的页面不存在或已被移除。请返回首页或通过搜索寻找你需要的内容。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-[#D7D9D6] shadow-xs">
        <div className="inline-block font-mono text-5xl font-black text-[#17191D] tracking-tight">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-[#17191D]">
            未找到该页面
          </h1>
          <p className="text-xs sm:text-sm text-[#868C96] leading-relaxed">
            你访问的网址可能已经变更、被删除，或输入的 URL 有误。
          </p>
        </div>

        <div className="pt-4 flex flex-col gap-2.5">
          <Link
            href="/"
            className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#3457D5] hover:bg-[#2845B2] rounded-lg transition-colors"
          >
            返回飞机云首页
          </Link>
          <Link
            href="/articles"
            className="w-full py-2.5 px-4 text-xs font-semibold text-[#17191D] bg-[#F7F7F5] border border-[#D7D9D6] hover:border-[#17191D] rounded-lg transition-colors"
          >
            查阅知识库文章
          </Link>
        </div>

        <div className="text-[11px] font-mono text-[#868C96] pt-4 border-t border-[#D7D9D6]">
          DOMAIN: {siteConfig.domain}
        </div>
      </div>
    </div>
  );
}
