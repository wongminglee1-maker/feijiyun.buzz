import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { devicesData } from "@/config/devices";
import { DeviceDetailView } from "@/components/DeviceDetailView";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "macOS 苹果电脑配置教程｜Clash Verge 与 Mihomo Party 设置指南",
  description:
    "macOS (Apple Silicon M系列及 Intel 芯片) 下的飞机云节点配置详细指南。涵盖权限授权、Gatekeeper 隔离解除、规则分流及系统代理排障。",
  alternates: {
    canonical: `${siteConfig.baseUrl}/devices/macos`,
  },
};

export default function MacDevicePage() {
  const device = devicesData.find((d) => d.slug === "macos");
  if (!device) notFound();

  return <DeviceDetailView device={device} />;
}
