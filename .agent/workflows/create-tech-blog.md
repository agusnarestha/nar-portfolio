---
description: How to create a new technology blog post
---
# Creating a Technology Blog Post

When asked to create a new technology blog post in this repository, follow these precise steps to ensure consistency with existing articles (like `openclaw.mdx`):

1. **Determine the Topic and Filename**
   - Research the requested technology topic to ensure the content is accurate, modern, and engaging.
   - Create a new file in the `src/content/blog/` directory.
   - File naming convention: Use a concise, kebab-case filename with the `.mdx` extension (e.g., `src/content/blog/future-of-ai.mdx`).

2. **Generate the MDX Frontmatter**
   Every blog post must begin with a standard YAML frontmatter block. Use the following format as a template:
   ```yaml
   ---
   title: "[Clear and Engaging Title]"
   date: "[Current Date in YYYY-MM-DD format]"
   description: "[A concise 1-2 sentence summary of the post's contents]"
   tags: ["Technology", "[Related Tag 1]", "[Related Tag 2]"]
   ---
   ```

3. **Draft the Markdown Content**
   - **Introduction**: Start with a strong hook that introduces the technology and why it matters. Keep paragraphs concise.
   - **Structure**: Use standard markdown headings (`##` and `###`) to logically separate sections. Common sections include "What is [Tech]?", "Key Features", "The Journey/History", and "Why It Matters".
   - **Styling**: Use bold (`**text**`) to highlight important names, features, or concepts. Use italics (`*text*`) for emphasis.
   - **Lists**: Use bullet points for features, benefits, or summaries to make the content scannable (e.g., under a "Key Features" heading).
   - **Links**: Include markdown links to official sites, repositories, or relevant resources (e.g., `[Project GitHub](https://github.com/...)`).

4. **Final Review**
   - Ensure the tone remains informative, developer-focused, and professional.
   - Verify that there are no syntax errors in the frontmatter or any MDX-specific syntax.
   - Check that tags are accurate and relevant to the technology being discussed.
