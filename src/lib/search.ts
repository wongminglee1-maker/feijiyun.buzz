import { articlesData } from "@/config/articles";
import { faqsData } from "@/config/faq";
import { devicesData } from "@/config/devices";

export interface SearchResult {
  id: string;
  type: "article" | "faq" | "device" | "guide";
  typeLabel: string;
  title: string;
  snippet: string;
  url: string;
}

export function performSearch(query: string): SearchResult[] {
  if (!query || query.trim().length === 0) return [];
  const q = query.trim().toLowerCase();

  const results: SearchResult[] = [];

  // Search in Articles
  for (const art of articlesData) {
    const inTitle = art.title.toLowerCase().includes(q);
    const inSubtitle = art.subtitle.toLowerCase().includes(q);
    const inDesc = art.metaDescription.toLowerCase().includes(q);
    const inKeywords = art.keywords.some((k) => k.toLowerCase().includes(q));
    const inContent = art.content.toLowerCase().includes(q);

    if (inTitle || inSubtitle || inDesc || inKeywords || inContent) {
      let snippet = art.metaDescription;
      if (!inTitle && inContent) {
        const index = art.content.toLowerCase().indexOf(q);
        const start = Math.max(0, index - 30);
        const end = Math.min(art.content.length, index + 80);
        snippet = "..." + art.content.slice(start, end).replace(/[#*`\n]/g, " ") + "...";
      }
      results.push({
        id: "art-" + art.slug,
        type: "article",
        typeLabel: "深度文章",
        title: art.title,
        snippet,
        url: `/articles/${art.slug}`,
      });
    }
  }

  // Search in FAQs
  for (const faq of faqsData) {
    const inQ = faq.question.toLowerCase().includes(q);
    const inA = faq.answer.toLowerCase().includes(q);
    const inCat = faq.category.toLowerCase().includes(q);

    if (inQ || inA || inCat) {
      let snippet = faq.answer.slice(0, 100) + "...";
      if (!inQ && inA) {
        const index = faq.answer.toLowerCase().indexOf(q);
        const start = Math.max(0, index - 20);
        const end = Math.min(faq.answer.length, index + 80);
        snippet = "..." + faq.answer.slice(start, end) + "...";
      }
      results.push({
        id: faq.id,
        type: "faq",
        typeLabel: "常见问题",
        title: faq.question,
        snippet,
        url: `/faq#${faq.id}`,
      });
    }
  }

  // Search in Devices
  for (const dev of devicesData) {
    const inName = dev.name.toLowerCase().includes(q);
    const inPlatform = dev.platform.toLowerCase().includes(q);
    const inSlug = dev.slug.toLowerCase().includes(q);
    const inReq = dev.systemRequirement.toLowerCase().includes(q);
    const inTrouble = dev.commonTroubles.some(
      (t) => t.question.toLowerCase().includes(q) || t.solution.toLowerCase().includes(q)
    );

    if (inName || inPlatform || inSlug || inReq || inTrouble) {
      results.push({
        id: "dev-" + dev.slug,
        type: "device",
        typeLabel: "设备指引",
        title: dev.name,
        snippet: dev.platform + " — " + dev.systemRequirement.slice(0, 90) + "...",
        url: `/devices/${dev.slug}`,
      });
    }
  }

  return results.slice(0, 12);
}
