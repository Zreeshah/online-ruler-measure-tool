const siteUrl = 'https://www.online-ruler.onl';
const host = 'www.online-ruler.onl';
const key = '33a2ef7af7115d1f149f6352c3ae3069';
const keyLocation = `${siteUrl}/${key}.txt`;

const sitemapResponse = await fetch(`${siteUrl}/sitemap.xml`);
if (!sitemapResponse.ok) {
  throw new Error(`Unable to fetch the live sitemap (HTTP ${sitemapResponse.status}).`);
}
const sitemap = await sitemapResponse.text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

if (urlList.length === 0 || urlList.some((url) => new URL(url).host !== host)) {
  throw new Error('Sitemap contains no URLs or includes a URL outside the canonical host.');
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
});

if (!response.ok && response.status !== 202) {
  const body = await response.text();
  throw new Error(`IndexNow submission failed (${response.status}): ${body}`);
}

console.log(`IndexNow accepted ${urlList.length} canonical URLs with HTTP ${response.status}.`);
