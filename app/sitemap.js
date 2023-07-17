export default async function sitemap() {
  const baseUrl = "https://www.matthewchukwu.com.ng";

  return [{ url: baseUrl, lastModified: new Date() }];
}
