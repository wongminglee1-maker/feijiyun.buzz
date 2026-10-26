import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { devicesData } from "@/config/devices";
import { DeviceDetailView } from "@/components/DeviceDetailView";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "iOS / iPadOS 苹果手机配置教程｜Shadowrocket 小火箭使用指南",
  description:
    "iPhone 与 iPad 设备的飞机云使用教程。从境外 Apple ID 下载正版 Shadowrocket（小火箭）、配置规则分流、系统 VPN 凭证信任到 iCloud 私人转寄冲突排查。",
  alternates: {
    canonical: `${siteConfig.baseUrl}/devices/ios`,
  },
};

export default function IosDevicePage() {
  const device = devicesData.find((d) => d.slug === "ios");
  if (!device) notFound();

  return <DeviceDetailView device={device} />;
}
