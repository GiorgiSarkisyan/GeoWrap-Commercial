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

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.geowrap.ge"),
  title: {
    default: "GeoWrap | Car Wrapping & PPF Services in Georgia",
    template: "%s | GeoWrap",
  },
  description:
    "automotive customization studio in Georgia, specializing in paint protection film (PPF), vinyl car wrapping, ceramic coating, and auto detailing services. Transform your vehicle today.",
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
    "car wrapping services Georgia",
    "automotive customization Tbilisi",
    "PPF installation Georgia",
    "vehicle protection film",
    "car wrap specialists",
    "professional car detailing",
    "geo wrap",
    "ჯეო ვრაპი",
    "джео врап",
    "ჯეოვრაპი",
  ],
  authors: [{ name: "GeoWrap" }],
  creator: "GeoWrap",
  publisher: "GeoWrap",
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.geowrap.ge/",
    languages: {
      "en-US": "https://www.geowrap.ge/",
      "ka-GE": "https://www.geowrap.ge/",
      "ru-RU": "https://www.geowrap.ge/",
    },
  },
  icons: {
    icon: [
      { url: "/images/black-icon.png", sizes: "any" },
      { url: "/images/black-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/black-icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/black-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/images/black-icon.png"],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ka_GE", "ru_RU"],
    url: "https://www.geowrap.ge",
    siteName: "GeoWrap",
    title: "GeoWrap | Car Wrapping & PPF Services in Georgia",
    description:
      "automotive customization studio in Tbilisi, Georgia specializing in paint protection film (PPF), vinyl car wrapping, ceramic coating, and auto detailing services.",
    images: [
      {
        url: "https://www.geowrap.ge/images/workshop/ferrari-296gtb.jpg",
        width: 1200,
        height: 630,
        alt: "GeoWrap - Car Wrapping & PPF Services - Ferrari 296 GTB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GeoWrap | Car Wrapping & PPF Services in Georgia",
    description:
      "automotive customization studio in Georgia specializing in paint protection film (PPF), vinyl car wrapping, ceramic coating, and detailing services.",
    images: ["https://www.geowrap.ge/images/workshop/ferrari-296gtb.jpg"],
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
    google: "8v2-RcwxjlhvzcKb-V6tu2MCdKxYxPdv953Jn1qxOEY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "GeoWrap",
              url: "https://www.geowrap.ge",
            }),
          }}
        />
      </head>
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
