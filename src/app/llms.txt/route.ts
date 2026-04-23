import { getAllPosts } from "@/utils/blog";
import { NextResponse } from "next/server";
import projectData from "@/data/projectData.json";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  linkProject: string;
  categories: string[];
  technologies: string[];
}

export async function GET() {
  const posts = getAllPosts();
  const projects = projectData as Project[];
  const baseUrl = "https://agusnarestha.dev";

  // Build blog posts section
  const blogLines = posts
    .map(
      (post) =>
        `- [${post.title}](${baseUrl}/blog/${post.slug}): ${post.description}`
    )
    .join("\n");

  // Build projects section (only projects with live links)
  const liveProjects = projects.filter((p) => p.linkProject !== "#");
  const projectLines = liveProjects
    .map(
      (project) =>
        `- [${project.title}](${project.linkProject}): ${project.description}`
    )
    .join("\n");

  const llmsTxt = `# Agus Narestha Portfolio

> Personal portfolio website of Agus Narestha — a web developer and data enthusiast specializing in modern web technologies, full-stack development, and data analysis. Built with Next.js and deployed at agusnarestha.dev.

Agus Narestha is a Software Engineer currently working at Bali Mandira Beach Resort & Spa. He has experience in full-stack web development using technologies like Next.js, React, Laravel, TypeScript, and Node.js, as well as data analysis and visualization using tools like Google BigQuery.

This portfolio showcases his professional experience, personal projects, and technical blog posts about web development, AI tools, and automation.

## Pages

- [Home](${baseUrl}): Main landing page with introduction, about section, work experience timeline, recent projects, and recent blog posts
- [About](${baseUrl}/about): Detailed information about Agus Narestha, skills, and professional work experience timeline
- [Projects](${baseUrl}/project): Showcase of web development projects including web apps, tools, and e-commerce platforms
- [Blog](${baseUrl}/blog): Technical blog posts about web development, AI, and automation

## Blog Posts

${blogLines}

## Projects

${projectLines}

## Optional

- [RSS Feed](${baseUrl}/feed.xml): RSS feed for blog posts
- [Sitemap](${baseUrl}/sitemap.xml): Complete sitemap of all pages
`;

  return new NextResponse(llmsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
