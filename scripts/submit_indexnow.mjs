// Script to submit URLs to Bing IndexNow API
const siteDomain = "feijiyun.buzz";
const baseUrl = `https://${siteDomain}`;
const indexNowKey = "4a7f9c2e8b1d6e0a3f5c7b9d1e2f4a6c";

const urlsToSubmit = [
  `${baseUrl}/`,
  `${baseUrl}/plans`,
  `${baseUrl}/network`,
  `${baseUrl}/devices`,
  `${baseUrl}/devices/windows`,
  `${baseUrl}/devices/macos`,
  `${baseUrl}/devices/android`,
  `${baseUrl}/devices/ios`,
  `${baseUrl}/guides`,
  `${baseUrl}/articles`,
  `${baseUrl}/articles/subscription-rules`,
  `${baseUrl}/articles/subscription-renewal`,
  `${baseUrl}/articles/dns-browser-troubleshooting`,
  `${baseUrl}/articles/cross-device-connection`,
  `${baseUrl}/articles/network-issue-report`,
  `${baseUrl}/articles/network-performance-metrics`,
  `${baseUrl}/articles/account-security`,
  `${baseUrl}/faq`,
  `${baseUrl}/about`,
  `${baseUrl}/contact`,
  `${baseUrl}/privacy`,
  `${baseUrl}/terms`,
];

async function submitIndexNow() {
  console.log(`Submitting ${urlsToSubmit.length} URLs to Bing IndexNow API...`);
  try {
    const payload = {
      host: siteDomain,
      key: indexNowKey,
      keyLocation: `${baseUrl}/${indexNowKey}.txt`,
      urlList: urlsToSubmit,
    };

    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    console.log(`IndexNow Response Status: ${res.status}`);
    if (res.status === 200 || res.status === 202) {
      console.log("IndexNow submission successful! Bing has received the latest URL updates.");
    } else {
      console.log(`IndexNow submission response code: ${res.status}`);
    }
  } catch (err) {
    console.error("IndexNow submission error:", err.message);
  }
}

submitIndexNow();
