import { ImageResponse } from "next/og";
import { OG_IMAGE_ALT, OG_IMAGE_SIZE } from "@/lib/social-images";

export const alt = OG_IMAGE_ALT;
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(155deg, #2a2418 0%, #0d0d0d 42%, #0d0d0d 100%)",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c5a35a",
            marginBottom: 20,
          }}
        >
          Las Vegas Strip
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "#f5f0e6",
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Palms Place Condos for Sale
        </div>
        <div
          style={{
            fontSize: 34,
            color: "rgba(245, 240, 230, 0.88)",
            marginTop: 24,
            maxWidth: 820,
          }}
        >
          High-rise residences · Dr. Jan Duffy, Realtor
        </div>
        <div
          style={{
            fontSize: 22,
            color: "rgba(245, 240, 230, 0.55)",
            marginTop: 48,
          }}
        >
          palmsplacecondos.com
        </div>
      </div>
    ),
    { ...size },
  );
}
