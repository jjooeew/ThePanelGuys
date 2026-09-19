import type { Metadata } from "next";
import { Barlow_Semi_Condensed, IBM_Plex_Sans } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const display = Barlow_Semi_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "The Panel Guys | Custom Cool Rooms & Freezers";
const description =
  "Custom commercial cool rooms, freezers and storage rooms. Design, construction, repairs and maintenance from Northland to Taupō.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "thepanelguys.co.nz";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: {
      default: title,
      template: "%s | The Panel Guys",
    },
    description,
    openGraph: {
      type: "website",
      title,
      description,
      images: [
        {
          url: "/brand/the-panel-guys.png",
          width: 1536,
          height: 1024,
          alt: "The Panel Guys Ltd — Chiller & Freezer Construction",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/brand/the-panel-guys.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
