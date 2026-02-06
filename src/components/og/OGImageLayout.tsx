import { ImageResponse } from "next/og";

interface OGImageLayoutProps {
    title: string;
    subtitle?: string;
    type?: "blog" | "page";
}

/**
 * Reusable OG Image Layout Component
 * Generates a 1200x630 Open Graph image with consistent branding
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
                    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                    fontFamily: "system-ui, sans-serif",
                    padding: "60px",
                }}
            >
                {/* Top accent bar */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "8px",
                        background: "linear-gradient(90deg, #FF6B6B 0%, #FFE66D 50%, #4ECDC4 100%)",
                    }}
                />

                {/* Type badge */}
                {type === "blog" && (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "24px",
                            padding: "8px 24px",
                            background: "rgba(255, 107, 107, 0.2)",
                            borderRadius: "999px",
                            border: "2px solid #FF6B6B",
                        }}
                    >
                        <span
                            style={{
                                color: "#FF6B6B",
                                fontSize: "24px",
                                fontWeight: 600,
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                            }}
                        >
                            Blog
                        </span>
                    </div>
                )}

                {/* Main title */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        maxWidth: "1000px",
                    }}
                >
                    <h1
                        style={{
                            color: "#ffffff",
                            fontSize: title.length > 50 ? "48px" : title.length > 30 ? "56px" : "72px",
                            fontWeight: 800,
                            lineHeight: 1.2,
                            margin: 0,
                            textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                        {title}
                    </h1>

                    {/* Subtitle / Author */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "32px",
                            gap: "16px",
                        }}
                    >
                        <div
                            style={{
                                width: "60px",
                                height: "2px",
                                background: "linear-gradient(90deg, transparent, #4ECDC4)",
                            }}
                        />
                        <span
                            style={{
                                color: "#94a3b8",
                                fontSize: "28px",
                                fontWeight: 500,
                            }}
                        >
                            {subtitle}
                        </span>
                        <div
                            style={{
                                width: "60px",
                                height: "2px",
                                background: "linear-gradient(90deg, #4ECDC4, transparent)",
                            }}
                        />
                    </div>
                </div>

                {/* Bottom branding */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "40px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                    }}
                >
                    <span
                        style={{
                            color: "#64748b",
                            fontSize: "20px",
                            fontWeight: 500,
                        }}
                    >
                        agusnarestha.dev
                    </span>
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
