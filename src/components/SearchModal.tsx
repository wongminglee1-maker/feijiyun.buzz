"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { performSearch, SearchResult } from "@/lib/search";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setResults([]);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Global shortcut Cmd/Ctrl + K and Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setQuery(text);
    if (text.trim().length > 0) {
      const res = performSearch(text);
      setResults(res);
    } else {
      setResults([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#17191D]/40 backdrop-blur-sm transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="站内检索"
    >
      <div
        className="w-full max-w-2xl bg-[#F7F7F5] border border-[#D7D9D6] rounded-xl shadow-2xl overflow-hidden animate-fade-up text-[#17191D]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#D7D9D6] bg-white gap-3">
          <svg
            className="w-5 h-5 text-[#868C96] shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="搜索文章、FAQ、设备配置或技术概念 (如: 续费, 安卓, DNS, 丢包)..."
            className="w-full bg-transparent border-none text-[16px] text-[#17191D] placeholder-[#868C96] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-[12px] font-mono px-2 py-1 rounded bg-[#F7F7F5] border border-[#D7D9D6] text-[#868C96] hover:text-[#17191D]"
          >
            ESC
          </button>
        </div>

        {/* Results / Suggestions Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {query.trim().length === 0 ? (
            <div className="py-8 text-center text-[#868C96]">
              <p className="text-sm">支持中文关键词与拼音检索</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {["订阅规则", "续费排障", "DNS无法登录", "Android设置", "测速误区", "同时在线设备"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setQuery(tag);
                        setResults(performSearch(tag));
                      }}
                      className="text-xs px-2.5 py-1 rounded-full bg-white border border-[#D7D9D6] text-[#17191D] hover:border-[#3457D5] transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-[#868C96]">
              <p className="text-sm">未找到与 “{query}” 相关的匹配结果</p>
              <p className="text-xs mt-1 text-[#868C96]/80">尝试缩短词语或更换关键词（例如搜索 “规则” 或 “手机”）</p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-xs font-mono text-[#868C96] px-1 pb-1">
                找到 {results.length} 项相关结果：
              </div>
              {results.map((res) => (
                <Link
                  key={res.id}
                  href={res.url}
                  onClick={onClose}
                  className="block p-3 rounded-lg bg-white border border-[#D7D9D6] hover:border-[#3457D5] hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#F7F7F5] border border-[#D7D9D6] text-[#868C96] group-hover:text-[#3457D5] group-hover:border-[#3457D5]/40 transition-colors">
                      {res.typeLabel}
                    </span>
                    <h4 className="text-[15px] font-semibold text-[#17191D] group-hover:text-[#3457D5] transition-colors">
                      {res.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#868C96] line-clamp-2 leading-relaxed">
                    {res.snippet}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-[#F0F0EE] border-t border-[#D7D9D6] flex items-center justify-between text-[11px] text-[#868C96]">
          <span>feijiyun.buzz 全文索引</span>
          <span>按 ESC 键或点击外部关闭</span>
        </div>
      </div>
    </div>
  );
};
