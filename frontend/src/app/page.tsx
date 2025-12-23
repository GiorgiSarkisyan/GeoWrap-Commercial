"use client";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WorkshopSection from "../components/WorkshopSection";
import ContactSection from "../components/ContactSection";
import ReviewsSection from "../components/ReviewsSection";
import Footer from "../components/Footer";
import MessengerChat from "../components/MessengerChat";
import Script from "next/script";

export default function Page() {
  // Structured Data for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "GeoWrap",
    image: "https://geowrap.ge/images/no-bgnew.png",
    "@id": "https://geowrap.ge",
    url: "https://geowrap.ge",
    telephone: "+995593103113",
    email: "geowraptbilisi@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Parsadani street 9",
      addressLocality: "Tbilisi",
      addressCountry: "GE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.784737,
      longitude: 44.765556,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
    sameAs: [
      "https://www.facebook.com/Iwrapconceptz.ge",
      "https://www.instagram.com/geowrap/",
    ],
    priceRange: "$$",
    description:
      "GeoWrap is a automotive customization and protection workshop based in Tbilisi, Georgia, specializing in high-end vehicle wrapping and detailing services.",
    serviceType: [
      "Paint Protection Film (PPF)",
      "Vinyl Car Wrapping",
      "Ceramic Coating",
      "Interior Detailing",
      "Window Tinting",
      "Auto Detailing",
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkshopSection />
      <ContactSection />
      <ReviewsSection />
      <Footer />
      <MessengerChat />
    </>
  );
}
