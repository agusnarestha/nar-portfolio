import { ImageResponse } from "next/og";

interface OGImageLayoutProps {
    title: string;
    subtitle?: string;
    type?: "blog" | "page";
}

/**
 * Neobrutalism OG Image Layout Component
 * Features: thick borders, offset shadows, vibrant colors, bold typography
 */
export function generateOGImage({
    title,
    subtitle = "Agus Narestha",
    type = "page",
}: OGImageLayoutProps): ImageResponse {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FFE5E5",
                    fontFamily: "system-ui, sans-serif",
                    padding: "50px",
                }}
            >
                {/* Main card with neobrutalist shadow */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        width: "1100px",
                        height: "530px",
                        backgroundColor: "#ffffff",
                        border: "4px solid #000000",
                        borderRadius: "12px",
                        boxShadow: "8px 8px 0px 0px #000000",
                        padding: "48px",
                        position: "relative",
                    }}
                >
                    {/* Top section with badge */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                        }}
                    >
                        {/* Type badge */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px 24px",
                                backgroundColor: type === "blog" ? "#FF6B6B" : "#4ECDC4",
                                border: "3px solid #000000",
                                borderRadius: "8px",
                                boxShadow: "4px 4px 0px 0px #000000",
                            }}
                        >
                            <span
                                style={{
                                    color: "#000000",
                                    fontSize: "22px",
                                    fontWeight: 800,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                }}
                            >
                                {type === "blog" ? "📝 Blog" : "🚀 Portfolio"}
                            </span>
                        </div>

                        {/* Site name */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px 20px",
                                backgroundColor: "#FFE66D",
                                border: "3px solid #000000",
                                borderRadius: "8px",
                                boxShadow: "4px 4px 0px 0px #000000",
                            }}
                        >
                            <span
                                style={{
                                    color: "#000000",
                                    fontSize: "20px",
                                    fontWeight: 700,
                                }}
                            >
                                agusnarestha.dev
                            </span>
                        </div>
                    </div>

                    {/* Title section */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            maxWidth: "950px",
                        }}
                    >
                        <h1
                            style={{
                                color: "#000000",
                                fontSize: title.length > 50 ? "48px" : title.length > 30 ? "60px" : "72px",
                                fontWeight: 900,
                                lineHeight: 1.1,
                                margin: 0,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            {title}
                        </h1>
                    </div>

                    {/* Bottom section with author */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                        }}
                    >
                        {/* Author avatar placeholder */}
                        <div
                            style={{
                                width: "56px",
                                height: "56px",
                                backgroundColor: "#FF6B6B",
                                border: "3px solid #000000",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "3px 3px 0px 0px #000000",
                            }}
                        >
                            <span style={{ fontSize: "28px" }}>👨‍💻</span>
                        </div>

                        {/* Author info */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2px",
                            }}
                        >
                            <span
                                style={{
                                    color: "#000000",
                                    fontSize: "24px",
                                    fontWeight: 800,
                                }}
                            >
                                {subtitle}
                            </span>
                            <span
                                style={{
                                    color: "#525252",
                                    fontSize: "18px",
                                    fontWeight: 600,
                                }}
                            >
                                Web Developer & Data Enthusiast
                            </span>
                        </div>
                    </div>

                    {/* Decorative corner element */}
                    <div
                        style={{
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            display: "flex",
                            gap: "8px",
                        }}
                    >
                        <div
                            style={{
                                width: "16px",
                                height: "16px",
                                backgroundColor: "#FF6B6B",
                                border: "2px solid #000000",
                                borderRadius: "50%",
                            }}
                        />
                        <div
                            style={{
                                width: "16px",
                                height: "16px",
                                backgroundColor: "#FFE66D",
                                border: "2px solid #000000",
                                borderRadius: "50%",
                            }}
                        />
                        <div
                            style={{
                                width: "16px",
                                height: "16px",
                                backgroundColor: "#4ECDC4",
                                border: "2px solid #000000",
                                borderRadius: "50%",
                            }}
                        />
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";
