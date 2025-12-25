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
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "GeoWrap",
    image: "https://www.geowrap.ge/images/no-bgnew.png",
    "@id": "https://www.geowrap.ge",
    url: "https://www.geowrap.ge",
    telephone: "+995593103113",
    email: "geowraptbilisi@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Parsadani street 9",
      addressLocality: "Tbilisi",
      postalCode: "0131",
      addressCountry: "GE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.784737,
      longitude: 44.765556,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "87",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.geowrap.ge",
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GeoWrap",
    url: "https://www.geowrap.ge",
    logo: "https://www.geowrap.ge/images/no-bgnew.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+995593103113",
      contactType: "customer service",
      areaServed: "GE",
      availableLanguage: ["en", "ka", "ru"],
    },
    sameAs: [
      "https://www.facebook.com/Iwrapconceptz.ge",
      "https://www.instagram.com/geowrap/",
    ],
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
