import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark" | "auto";
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  theme = "auto",
  showText = true,
}) => {
  const isDark = theme === "dark";
  const iconStroke = isDark ? "#FFFFFF" : "#17191D";
  const iconAccent = "#3457D5"; // Restrained blue
  const textPrimary = isDark ? "text-white" : "text-[#17191D]";
  const textMuted = isDark ? "text-[#D7D9D6]" : "text-[#868C96]";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 transition-opacity hover:opacity-85 select-none ${className}`}
      aria-label="飞机云 FeiJiYun 官网首页"
    >
      {/* Original Minimalist Geometric Wing & Cloud SVG */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        {/* Soft geometric cloud arch background */}
        <path
          d="M8 26C8 22.6863 10.6863 20 14 20C14.7738 20 15.5135 20.1462 16.1942 20.4131C17.4339 16.6874 20.9575 14 25.1 14C29.9547 14 33.9103 17.7288 34.1852 22.4824C35.8118 23.3644 36.9 25.068 36.9 27.027C36.9 29.7735 34.6735 32 31.927 32H14C10.6863 32 8 29.3137 8 26Z"
          stroke={iconStroke}
          strokeWidth="1.5"
          strokeOpacity="0.25"
          fill="none"
        />
        {/* Sleek minimalist geometric forward plane wing (accent blue) */}
        <path
          d="M6 21.5L34 11L24 28L18 21.5L6 21.5Z"
          fill={iconAccent}
          fillOpacity="0.92"
        />
        <path
          d="M18 21.5L24 28L26 21.5L18 21.5Z"
          fill="#17191D"
          fillOpacity="0.3"
        />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`text-[17px] font-bold tracking-tight ${textPrimary}`}>
            飞机云
          </span>
          <span className={`text-[10px] tracking-widest uppercase font-mono font-medium ${textMuted}`}>
            FEIJIYUN.BUZZ
          </span>
        </div>
      )}
    </Link>
  );
};
