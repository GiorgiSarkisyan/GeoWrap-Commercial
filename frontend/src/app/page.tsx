"use client";
import { LanguageProvider } from "../contexts/LanguageContext";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WorkshopSection from "../components/WorkshopSection";
import ContactSection from "../components/ContactSection";
import ReviewsSection from "../components/ReviewsSection";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <LanguageProvider>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkshopSection />
      <ContactSection />
      <ReviewsSection />
      <Footer />
    </LanguageProvider>
  );
}
