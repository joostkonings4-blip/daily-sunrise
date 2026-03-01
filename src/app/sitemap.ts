import { MetadataRoute } from "next";

const BASE_URL = "https://www.dailysunrise.com";

const BLOG_SLUGS = [
  "the-art-of-doing-nothing",
  "morning-light-ritual",
  "your-body-is-not-broken",
  "earthing-and-grounding",
  "slow-food-movement",
  "digital-detox-sunrise",
];

const STATIC_PAGES = [
  { path: "/about",       priority: 0.8 },
  { path: "/philosophy",  priority: 0.8 },
  { path: "/blog",        priority: 0.8 },
  { path: "/social",      priority: 0.8 },
  { path: "/subscribe",   priority: 0.8 },
  { path: "/privacy",     priority: 0.8 },
  { path: "/terms",       priority: 0.8 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const homepage: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  const staticRoutes: MetadataRoute.Sitemap = STATIC_PAGES.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...homepage, ...staticRoutes, ...blogRoutes];
}
