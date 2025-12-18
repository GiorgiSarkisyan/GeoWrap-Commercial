"use client";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useLenis } from "lenis/react";
import { useLanguage } from "../contexts/LanguageContext";
import styles from "../styles/components/HeroSection.module.scss";

export default function HeroSection() {
  const el = useRef<HTMLSpanElement | null>(null);
  const typedInstance = useRef<{ destroy: () => void } | null>(null);
  const [mounted, setMounted] = useState(false);
  const lenis = useLenis();
  const { t, language } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    if (!lenis) return;

    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 95;
    const elementPosition = element.offsetTop - headerOffset;

    lenis.scrollTo(elementPosition, {
      duration: 1.2,
      easing: (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    });
  };

  useEffect(() => {
    if (!el.current || !mounted) return;

    if (typedInstance.current) {
      typedInstance.current.destroy();
      typedInstance.current = null;
    }

    const initTyped = async () => {
      const TypedModule = (await import("typed.js")).default;
      typedInstance.current = new TypedModule(el.current!, {
        strings: t.typed,
        typeSpeed: 110,
        backSpeed: 50,
        loop: true,
        startDelay: 1000,
        backDelay: 500,
        showCursor: true,
      });
    };

    initTyped();

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
        typedInstance.current = null;
      }
    };
  }, [language, mounted, t.typed]);

  return (
    <section id="hero" className={styles["main-section"]}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles["background-video"]}
        preload="auto"
        style={{ contentVisibility: "auto" }}
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles["main-content"]}>
        <div className={styles["main-content-inner"]}>
          <h1>
            {t.hero.title} <span ref={el}></span>
          </h1>
          <button onClick={() => scrollToSection("workshop")}>
            {t.hero.button}
          </button>
        </div>
        <div className={styles["scroll-indicator"]}>
          <span>{t.hero.scrollText}</span>
          <FaChevronDown className={styles["scroll-arrow"]} />
        </div>
      </div>
    </section>
  );
}
