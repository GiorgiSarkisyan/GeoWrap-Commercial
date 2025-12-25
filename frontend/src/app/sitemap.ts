import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://geowrap.ge";

  return [
    {
      url: baseUrl,
      lastModified: "2025-12-25",
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
