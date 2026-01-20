"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0);
  const { language, setLanguage, t } = useLanguage();
  const headerRef = useRef<HTMLElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const lenis = useLenis();

  const selected =
    languages.find((lang) => lang.code === language) || languages[0];

  const closeMobileMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setMobileMenuOpen(false);
    }, 300);
  };

  const scrollToSection = (id: string) => {
    if (!lenis) return;

    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 70;
    const elementPosition = element.offsetTop - headerOffset;

    lenis.scrollTo(elementPosition, {
      duration: 1.2,
      easing: (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    });

    closeMobileMenu();
  };

  const handleSelect = (lang: (typeof languages)[0]) => {
    setLanguage(lang.code);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        headerRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let ticking = false;
    let heroHeight = 0;

    const updateHeroHeight = () => {
      const heroEl = document.getElementById("hero") as HTMLElement | null;
      heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;

        // Header gets full color after scrolling 1.5x the hero section height
        const fadeLimit = heroHeight * 0.6;
        const ratio = Math.min(Math.max(scrollY / fadeLimit, 0), 1);

        const bgColor = `rgba(33, 32, 32, ${ratio})`;

        header.style.backgroundColor = bgColor;
        setBgOpacity(ratio);

        if (mobileMenuRef.current) {
          mobileMenuRef.current.style.backgroundColor = bgColor;
        }

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
          src="/icons/logo.png"
          alt="geo-wrap-logo"
          width={235}
          height={45}
          onClick={() => scrollToSection("hero")}
          style={{ cursor: "pointer" }}
          priority
          className={styles["logo"]}
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

      <button
        className={styles["hamburger"]}
        onClick={() => {
          if (mobileMenuOpen) {
            closeMobileMenu();
          } else {
            setMobileMenuOpen(true);
          }
        }}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className={`${styles["mobile-menu"]} ${
            isClosing ? styles["closing"] : ""
          }`}
          style={{
            backgroundColor: `rgba(33, 32, 32, ${bgOpacity})`,
          }}
        >
          <nav className={styles["mobile-nav"]}>
            <ul className={styles["mobile-list"]}>
              <li
                className={styles["mobile-list-item"]}
                onClick={() => scrollToSection("about")}
              >
                {t.nav.aboutUs}
              </li>
              <li
                className={styles["mobile-list-item"]}
                onClick={() => scrollToSection("services")}
              >
                {t.nav.services}
              </li>
              <li
                className={styles["mobile-list-item"]}
                onClick={() => scrollToSection("workshop")}
              >
                {t.nav.workshop}
              </li>
              <li
                className={styles["mobile-list-item"]}
                onClick={() => scrollToSection("contact")}
              >
                {t.nav.contact}
              </li>
            </ul>
            {/* Language Selector in Mobile Menu */}
            <div className={styles["mobile-language-section"]}>
              <div
                className={styles["mobile-language-selector"]}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
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
                  <span>{selected.label}</span>
                  <FaChevronDown className={styles["arrow"]} />
                </div>
                {open && (
                  <ul className={styles["dropdown"]}>
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        className={styles["dropdown-item"]}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelect(lang);
                        }}
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
            </div>
          </nav>
        </div>
      )}

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
