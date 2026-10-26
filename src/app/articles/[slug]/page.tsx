import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articlesData, ArticleItem } from "@/config/articles";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArticleContent } from "@/components/ArticleContent";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articlesData.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title}｜飞机云知识库`,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `${siteConfig.baseUrl}/articles/${article.slug}`,
    },
    openGraph: {
      title: `${article.title}｜飞机云知识库`,
      description: article.metaDescription,
      url: `${siteConfig.baseUrl}/articles/${article.slug}`,
      siteName: siteConfig.name,
      locale: "zh_CN",
      type: "article",
      publishedTime: article.publishDate,
      modifiedTime: article.updateDate,
      authors: ["飞机云编辑部"],
      images: [
        {
          url: `${siteConfig.baseUrl}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      images: [`${siteConfig.baseUrl}/og-image.svg`],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article: ArticleItem | undefined = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Schema.org Article Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: [`${siteConfig.baseUrl}/og-image.svg`],
    datePublished: article.publishDate,
    dateModified: article.updateDate,
    author: {
      "@type": "Organization",
      name: "飞机云编辑部",
      url: siteConfig.baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.baseUrl}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.baseUrl}/articles/${article.slug}`,
    },
  };

  // Find related articles
  const relatedArticles = articlesData.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumb
            items={[
              { name: "知识库", href: "/articles" },
              { name: article.title },
            ]}
          />

          {/* Article Header */}
          <header className="space-y-4 pb-8 border-b border-[#D7D9D6]">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#868C96]">
              <span className="px-2 py-0.5 rounded bg-white border border-[#D7D9D6] text-[#3457D5] font-semibold">
                {article.category}
              </span>
              <span>发布于 {article.publishDate}</span>
              <span>•</span>
              <span>最近修订于 {article.updateDate}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#17191D] tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#868C96] leading-relaxed">
              {article.subtitle}
            </p>
          </header>

          {/* Transparent Editorial Disclaimer */}
          <div className="p-4 rounded-lg bg-white border border-[#D7D9D6] text-xs text-[#868C96] leading-relaxed">
            <strong className="text-[#17191D]">【客观技术编审原则】</strong> 本文由 feijiyun.buzz 团队独立编写，立足于通用计算机网络协议与消费常识。文章不代表任何特定服务器实测保证，文中所有排查逻辑均为标准网络故障处理流程。
          </div>

          {/* Main Rich Content */}
          <ArticleContent content={article.content} />

          {/* Bottom Commercial Jump Box */}
          <div className="my-10 p-6 rounded-xl bg-white border border-[#D7D9D6] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-bold text-[#17191D]">
                需要稳定高速的网络连接服务？
              </h4>
              <p className="text-xs text-[#868C96]">
                核对规则后再做选择。点击前往合作服务商获取实时节点配置。
              </p>
            </div>
            <a
              href={siteConfig.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="px-4 py-2.5 text-xs font-semibold text-white bg-[#3457D5] hover:bg-[#2845B2] rounded-md transition-all shadow-xs shrink-0"
            >
              了解合作方案 ↗
            </a>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="pt-8 border-t border-[#D7D9D6] space-y-4">
              <h3 className="text-lg font-bold text-[#17191D]">
                推荐延伸阅读
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/articles/${rel.slug}`}
                    className="p-4 rounded-lg bg-white border border-[#D7D9D6] hover:border-[#3457D5] transition-all group"
                  >
                    <span className="text-[10px] font-mono text-[#868C96] block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold text-[#17191D] group-hover:text-[#3457D5] transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to articles */}
          <div className="pt-6">
            <Link
              href="/articles"
              className="text-xs font-mono font-medium text-[#868C96] hover:text-[#17191D] transition-colors"
            >
              ← 返回全部知识专文列表
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
