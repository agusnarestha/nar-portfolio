import { generateOGImage, size, contentType } from "@/components/og/OGImageLayout";

export { size, contentType };

export default async function Image() {
    return generateOGImage({
        title: "Blog",
        subtitle: "Thoughts on web development, programming & technology",
        type: "blog",
    });
}
