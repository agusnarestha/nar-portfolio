import { generateOGImage, size, contentType } from "@/components/og/OGImageLayout";
import { getPostBySlug } from "@/utils/blog";

export { size, contentType };

interface Props {
    params: {
        slug: string;
    };
}

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
