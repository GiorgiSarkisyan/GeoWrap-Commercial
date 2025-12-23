import "../styles/global.scss";
import { Montserrat, Oswald, Exo_2 } from "next/font/google";
import { LoadingProvider } from "../contexts/LoadingContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import Wrapper from "./wrapper";
import type { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });

export const metadata: Metadata = {
  title: "GeoWrap Tbilisi | Car Wrapping & PPF Services in Georgia",
  description:
    "GeoWrap is Georgia's automotive customization studio specializing in paint protection film (PPF), vinyl wraps, ceramic coating, and premium detailing services in Tbilisi.",
  keywords: [
    "car wrapping Tbilisi",
    "PPF Georgia",
    "paint protection film",
    "vinyl wrap Tbilisi",
    "ceramic coating Georgia",
    "car detailing Tbilisi",
    "vehicle customization",
    "GeoWrap",
    "auto detailing Georgia",
    "window tint Tbilisi",
  ],
  authors: [{ name: "GeoWrap" }],
  creator: "GeoWrap",
  publisher: "GeoWrap",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ka_GE", "ru_RU"],
    url: "https://geowrap.ge",
    siteName: "GeoWrap",
    title: "GeoWrap Tbilisi | Car Wrapping & PPF Services",
    description:
      " automotive customization and protection services in Tbilisi, Georgia. Specializing in PPF, vinyl wraps, ceramic coating, and detailing.",
    images: [
      {
        url: "/images/no-bgnew.png",
        width: 1200,
        height: 630,
        alt: "GeoWrap - Car Wrapping Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GeoWrap Tbilisi | Car Wrapping & PPF Services",
    description:
      "Premium automotive customization and protection services in Tbilisi, Georgia.",
    images: ["/images/no-bgnew.png"],
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
  verification: {
    // Add Google Search Console verification here when ready
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${oswald.variable} ${exo2.variable}`}
      >
        <LoadingProvider>
          <LanguageProvider>
            <Wrapper>{children}</Wrapper>
          </LanguageProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
