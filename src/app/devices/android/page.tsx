import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { devicesData } from "@/config/devices";
import { DeviceDetailView } from "@/components/DeviceDetailView";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Android 安卓手机配置教程｜Clash Meta 与 v2rayNG 使用指南",
  description:
    "Android 手机与鸿蒙 HarmonyOS 系统下的飞机云客户端配置教程。解决 VpnService 授权、后台省电杀进程、热点共享及连通性测试常见问题。",
  alternates: {
    canonical: `${siteConfig.baseUrl}/devices/android`,
  },
};

export default function AndroidDevicePage() {
  const device = devicesData.find((d) => d.slug === "android");
  if (!device) notFound();

  return <DeviceDetailView device={device} />;
}
