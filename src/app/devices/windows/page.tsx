import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { devicesData } from "@/config/devices";
import { DeviceDetailView } from "@/components/DeviceDetailView";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Windows 系统客户端配置教程｜Clash Verge Rev 安装与使用指引",
  description:
    "Windows 10 与 Windows 11 下的飞机云节点配置详细指南。推荐使用开源 Clash Verge Rev 客户端，涵盖系统代理设置、TUN 虚拟网卡模式及常见报错排查。",
  alternates: {
    canonical: `${siteConfig.baseUrl}/devices/windows`,
  },
};

export default function WindowsDevicePage() {
  const device = devicesData.find((d) => d.slug === "windows");
  if (!device) notFound();

  return <DeviceDetailView device={device} />;
}
