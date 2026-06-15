import { getAllPosts, getAllTags } from "@/utils/blog";
import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

/**
 * Get the last git commit date for a given file path.
 * Falls back to file mtime if git history is unavailable.
 */
function getFileLastModified(relativePath: string): Date {
  try {
    const filePath = path.join(process.cwd(), relativePath);
    const { execSync } = require("child_process");
    const gitDate = execSync(
      `git log -1 --format="%aI" -- "${filePath}"`,
      { encoding: "utf8" }
    ).trim();
    if (gitDate) return new Date(gitDate);
  } catch {
    // Git command failed, fall through to file mtime
  }

  // Fallback: use file system modification time
  try {
    const filePath = path.join(process.cwd(), relativePath);
    return fs.statSync(filePath).mtime;
  } catch {
    // File doesn't exist, use today as last resort
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const baseUrl = "https://agusnarestha.dev";

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const tags = getAllTags();
  const tagUrls = tags.map((tag) => ({
    url: `${baseUrl}/blog/tag/${tag}`,
    lastModified: getFileLastModified("src/app/blog/tag/[tag]/page.tsx"),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const staticPages = [
    {
      url: baseUrl,
      lastModified: getFileLastModified("src/app/page.tsx"),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: getFileLastModified("src/app/about/page.tsx"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/project`,
      lastModified: getFileLastModified("src/app/project/page.tsx"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: getFileLastModified("src/app/blog/page.tsx"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  return [...staticPages, ...postUrls, ...tagUrls];
}
