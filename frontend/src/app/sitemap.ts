import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://geowrap.ge";

  return [
    {
      url: baseUrl,
      lastModified: "2025-12-24",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
