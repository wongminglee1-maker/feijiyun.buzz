import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { articlesData } from "@/config/articles";
import { devicesData } from "@/config/devices";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;

  // Static main pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-10-25"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/plans`,
      lastModified: new Date("2026-10-24"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/network`,
      lastModified: new Date("2026-10-24"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/devices`,
      lastModified: new Date("2026-10-24"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date("2026-10-24"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date("2026-10-24"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date("2026-10-24"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-10-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-10-20"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-10-20"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-10-20"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // Device subpages
  const deviceRoutes: MetadataRoute.Sitemap = devicesData.map((dev) => ({
    url: `${baseUrl}/devices/${dev.slug}`,
    lastModified: new Date("2026-10-24"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Article pages
  const articleRoutes: MetadataRoute.Sitemap = articlesData.map((art) => ({
    url: `${baseUrl}/articles/${art.slug}`,
    lastModified: new Date(art.updateDate),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...deviceRoutes, ...articleRoutes];
}
