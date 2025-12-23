"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { useLenis } from "lenis/react";
import { useLanguage } from "../contexts/LanguageContext";
import styles from "../styles/components/Header.module.scss";

const languages = [
  { code: "en" as const, label: "English", flag: "/images/flags/en.png" },
  { code: "ru" as const, label: "Русский", flag: "/images/flags/ru.png" },
  { code: "ka" as const, label: "ქართული", flag: "/images/flags/ka.png" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const headerRef = useRef<HTMLElement | null>(null);
  const lenis = useLenis();

  const selected =
    languages.find((lang) => lang.code === language) || languages[0];

  const scrollToSection = (id: string) => {
    if (!lenis) return;

    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.offsetTop - headerOffset;

    lenis.scrollTo(elementPosition, {
      duration: 1.2,
      easing: (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    });
  };

  const handleSelect = (lang: (typeof languages)[0]) => {
    setLanguage(lang.code);
    setOpen(false);
  };

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let ticking = false;
    let heroHeight = 0;

    const updateHeroHeight = () => {
      const heroEl = document.querySelector(
        `.${styles["main-section"]}`
      ) as HTMLElement | null;
      heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        const limit = Math.max(heroHeight * 0.6, 1);
        const ratio = Math.min(Math.max(scrollY / limit, 0), 1);
        header.style.backgroundColor = `rgba(33, 32, 32, ${ratio})`;
        ticking = false;
      });
    };

    updateHeroHeight();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateHeroHeight);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateHeroHeight);
    };
  }, []);

  return (
    <header ref={headerRef} className={styles["header"]}>
      <div className={styles["header-navigator"]}>
        <Image
          src="/images/no-bgnew.png"
          alt="geo-wrap-logo"
          width={235}
          height={45}
          onClick={() => scrollToSection("hero")}
          style={{ cursor: "pointer" }}
          priority
        />
        <nav className={styles["nav-wrapper"]}>
          <ul className={styles["list"]}>
            <li
              className={styles["list-item"]}
              onClick={() => scrollToSection("about")}
            >
              {t.nav.aboutUs}
            </li>
            <li
              className={styles["list-item"]}
              onClick={() => scrollToSection("services")}
            >
              {t.nav.services}
            </li>
            <li
              className={styles["list-item"]}
              onClick={() => scrollToSection("workshop")}
            >
              {t.nav.workshop}
            </li>
            <li
              className={styles["list-item"]}
              onClick={() => scrollToSection("contact")}
            >
              {t.nav.contact}
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={styles["language-selector"]}
        onClick={() => setOpen(!open)}
      >
        <div className={styles["selected"]}>
          <div className={styles["flag-wrapper"]}>
            <Image
              src={selected.flag}
              alt={selected.label}
              width={20}
              height={20}
            />
          </div>
          <span>{selected.code}</span>
          <FaChevronDown className={styles["arrow"]} />
        </div>
        {open && (
          <ul className={styles["dropdown"]}>
            {languages.map((lang) => (
              <li
                key={lang.code}
                className={styles["dropdown-item"]}
                onClick={() => handleSelect(lang)}
              >
                <div className={styles["flag-wrapper"]}>
                  <Image
                    src={lang.flag}
                    alt={lang.label}
                    width={20}
                    height={20}
                  />
                </div>
                <span>{lang.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
