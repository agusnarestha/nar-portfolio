import { generateOGImage, size, contentType } from "@/components/og/OGImageLayout";
import { getPostBySlug, getAllPosts } from "@/utils/blog";

export { size, contentType };

// Generate OG images at build time to avoid fs issues on Vercel runtime
export function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

interface Props {
    params: {
        slug: string;
    };
}

export const alt = "Blog post preview image";

export default async function Image({ params }: Props) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        // Fallback OG image for invalid slugs
        return generateOGImage({
            title: "Post Not Found",
            subtitle: "Agus Narestha",
            type: "blog",
        });
    }

    return generateOGImage({
        title: post.title,
        subtitle: `By Agus Narestha • ${new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        })}`,
        type: "blog",
    });
}

