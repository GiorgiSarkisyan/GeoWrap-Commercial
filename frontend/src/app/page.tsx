"use client";
import Image from "next/image";
import styles from "../styles/page/page.module.scss";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const languages = [
  { code: "en", label: "English", flag: "/images/flags/en.png" },
  { code: "ru", label: "Русский", flag: "/images/flags/ru.png" },
  { code: "ge", label: "ქართული", flag: "/images/flags/ge.png" },
];

export default function Page() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  const handleSelect = (lang: (typeof languages)[0]) => {
    setSelected(lang);
    setOpen(false);
  };

  return (
    <div>
      <header className={styles["header"]}>
        <div className={styles["header-navigator"]}>
          <Image
            src="/images/cropped.png"
            alt="geo-wrap-logo"
            width={260}
            height={60}
          />
          <nav className={styles["nav-wrapper"]}>
            <ul className={styles["list"]}>
              <li className={styles["list-item"]}>About us</li>
              <li className={styles["list-item"]}>Services</li>
              <li className={styles["list-item"]}>Workshop</li>
              <li className={styles["list-item"]}>Contact</li>
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

      <section className={styles["main-section"]}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles["background-video"]}
        >
          <source src="/background.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
}
