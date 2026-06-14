import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";

import "@fontsource/iosevka/400.css";
import "@fontsource/iosevka/600.css";
import "@fontsource/iosevka/700.css";
import "./globals.css";
import type React from "react";
import { ErrorBoundary } from "@/components/error-boundary";
import { RESUME_DATA } from "@/data/resume-data";
import { THEME_STORAGE_KEY } from "@/lib/theme";

export const metadata: Metadata = {
  metadataBase: new URL("https://cv.jarocki.me"),
  title: {
    default: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
    template: `%s | ${RESUME_DATA.name}`,
  },
  description: RESUME_DATA.about,
  keywords: [
    "resume",
    "cv",
    "portfolio",
    RESUME_DATA.name,
    "software engineer",
    "full stack developer",
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: RESUME_DATA.name }],
  creator: RESUME_DATA.name,
  publisher: RESUME_DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: RESUME_DATA.personalWebsiteUrl,
    siteName: `${RESUME_DATA.name}'s CV`,
    title: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
    description: RESUME_DATA.about,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
    description: RESUME_DATA.about,
    creator: "@BartoszJarocki",
  },
  alternates: {
    canonical: RESUME_DATA.personalWebsiteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Applies the saved or system theme before first paint
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
                const savedTheme = storedTheme === "light" || storedTheme === "dark"
                  ? storedTheme
                  : null;
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const theme = savedTheme ?? (prefersDark ? "dark" : "light");
                document.documentElement.classList.toggle("dark", theme === "dark");
                document.documentElement.style.colorScheme = theme;
              } catch {}
            `,
          }}
        />
      </head>
      <body>
        <ErrorBoundary>{children}</ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
