import { ImageResponse } from "next/og";
import { loadOgFont } from "@/lib/og-font";

interface OGImageLayoutProps {
  title: string;
  subtitle?: string;
  type?: "blog" | "page";
}

/**
 * Collage-style OG image layout.
 * Paper ground, a white sheet, ink rules, tape-like accents.
 */
export async function generateOGImage({
  title,
  subtitle = "Agus Narestha",
  type = "page",
}: OGImageLayoutProps): Promise<ImageResponse> {
  const font = await loadOgFont().catch(() => null);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#EDF0F4",
          fontFamily: "Archivo Black, system-ui, sans-serif",
          padding: "48px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "1104px",
            height: "534px",
            backgroundColor: "#FFFFFF",
            border: "2px solid #15161A",
            boxShadow: "8px 8px 0 #15161A",
            padding: "44px",
            position: "relative",
          }}
        >
          {/* Tape strip */}
          <div
            style={{
              position: "absolute",
              top: "-14px",
              left: "80px",
              width: "140px",
              height: "28px",
              backgroundColor: "#FFEE3B",
              opacity: 0.78,
              transform: "rotate(-3deg)",
            }}
          />

          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                backgroundColor: type === "blog" ? "#FF8DC7" : "#2446F2",
                border: "2px solid #15161A",
                color: type === "blog" ? "#15161A" : "#FFFFFF",
              }}
            >
              <span style={{ fontSize: "20px", textTransform: "uppercase" }}>
                {type === "blog" ? "Blog" : "Portfolio"}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 18px",
                backgroundColor: "#FFF7B8",
                border: "2px solid #15161A",
                color: "#15161A",
              }}
            >
              <span style={{ fontSize: "18px" }}>agusnarestha.dev</span>
            </div>
          </div>

          <div style={{ display: "flex", maxWidth: "960px" }}>
            <h1
              style={{
                color: "#15161A",
                fontSize:
                  title.length > 50 ? "46px" : title.length > 30 ? "56px" : "68px",
                lineHeight: 1.1,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h1>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "54px",
                height: "54px",
                backgroundColor: "#FFEE3B",
                border: "2px solid #15161A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
              }}
            >
              👨‍💻
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <span style={{ color: "#15161A", fontSize: "22px" }}>
                {subtitle}
              </span>
              <span style={{ color: "#444A57", fontSize: "16px" }}>
                Web Developer & Data Enthusiast
              </span>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              display: "flex",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                backgroundColor: "#FF5130",
                border: "2px solid #15161A",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                width: "14px",
                height: "14px",
                backgroundColor: "#FFEE3B",
                border: "2px solid #15161A",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                width: "14px",
                height: "14px",
                backgroundColor: "#2FD49A",
                border: "2px solid #15161A",
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
      ...(font
        ? {
            fonts: [
              {
                name: "Archivo Black",
                data: font,
                weight: 900 as const,
                style: "normal" as const,
              },
            ],
          }
        : {}),
    }
  );
}

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
