import { ImageResponse } from "next/og";
import { RESUME_DATA } from "@/data/resume-data";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#030712",
        color: "#f9fafb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #374151",
        fontFamily: "system-ui, sans-serif",
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1,
      }}
    >
      {RESUME_DATA.initials}
    </div>,
    {
      ...size,
    }
  );
}
