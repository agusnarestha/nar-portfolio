import { generateOGImage, size, contentType } from "@/components/og/OGImageLayout";

export { size, contentType };

export const alt = "Agus Narestha - Web Developer & Data Enthusiast";

export default async function Image() {
    return generateOGImage({
        title: "Agus Narestha",
        subtitle: "Web Developer & Data Enthusiast",
        type: "page",
    });
}
