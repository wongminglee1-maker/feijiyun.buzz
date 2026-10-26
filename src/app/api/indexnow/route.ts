import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { articlesData } from "@/config/articles";

export async function GET() {
  return NextResponse.json({
    status: "ready",
    host: siteConfig.domain,
    key: siteConfig.indexNowKey,
    keyLocation: `${siteConfig.baseUrl}/${siteConfig.indexNowKey}.txt`,
    supportedEngine: ["Bing", "Yandex", "IndexNow API"],
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const urlsToSubmit: string[] = body.urls && Array.isArray(body.urls)
      ? body.urls
      : [
          `${siteConfig.baseUrl}/`,
          `${siteConfig.baseUrl}/plans`,
          `${siteConfig.baseUrl}/network`,
          `${siteConfig.baseUrl}/devices`,
          `${siteConfig.baseUrl}/articles`,
          `${siteConfig.baseUrl}/faq`,
          ...articlesData.map((a) => `${siteConfig.baseUrl}/articles/${a.slug}`),
        ];

    const payload = {
      host: siteConfig.domain,
      key: siteConfig.indexNowKey,
      keyLocation: `${siteConfig.baseUrl}/${siteConfig.indexNowKey}.txt`,
      urlList: urlsToSubmit,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      submitted: true,
      statusCode: response.status,
      count: urlsToSubmit.length,
      note: "IndexNow submission triggered. Actual indexing depends on Bing crawler schedule.",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "IndexNow submission failed", details: message },
      { status: 500 }
    );
  }
}
