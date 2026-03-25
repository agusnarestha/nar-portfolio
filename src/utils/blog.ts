import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, BlogMetadata } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

// Average reading speed (words per minute)
const WORDS_PER_MINUTE = 200;

function calculateReadingTime(content: string): number {
  // Remove markdown syntax and count words
  const plainText = content.replace(/[#*`_~\[\]]/g, "");
  const wordCount = plainText.trim().split(/\s+/).length;
  return Math.ceil(wordCount / WORDS_PER_MINUTE);
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      readingTime: calculateReadingTime(content),
      ...(data as BlogMetadata),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts();
  const normalizedTag = tag.toLowerCase();
  return allPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === normalizedTag)
  );
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagsMap = new Map<string, string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      const key = tag.toLowerCase();
      if (!tagsMap.has(key)) {
        tagsMap.set(key, tag);
      }
    });
  });

  return Array.from(tagsMap.values()).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      readingTime: calculateReadingTime(content),
      ...(data as BlogMetadata),
    };
  } catch (error) {
    return null;
  }
}
