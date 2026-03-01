import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.dailysunrise.com/sitemap.xml",
    host: "https://www.dailysunrise.com",
  };
}
