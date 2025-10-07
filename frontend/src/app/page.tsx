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
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className={styles["about-section"]}>
        <div className={styles["about-content"]}>
          <div className={styles["about-content-informative"]}>
            <div className={styles["about-content-inner"]}>
              <div className={styles["about-content-text"]}>
                <h2 className={styles["about-content-title"]}>About Us</h2>
                <h3 className={styles["about-content-secondary"]}>
                  Turning Everyday Cars Into{" "}
                  <span>Eye-Catching Masterpieces</span>
                </h3>
                <p className={styles["about-content-description"]}>
                  GeoWrap is a leading provider of innovative geospatial
                  solutions, dedicated to transforming the way businesses and
                  organizations harness the power of location data. With a team
                  of experienced professionals and cutting-edge technology, we
                  deliver tailored services that meet the unique needs of our
                  clients across various industries.
                </p>
              </div>
              <div className={styles["about-content-boxes"]}>
                <div className={styles["about-content-box"]}>
                  <h3 className={styles["about-content-box-subtitle"]}>5+</h3>
                  <span className={styles["about-content-box-span"]}>
                    Years Experience
                  </span>
                </div>
                <div className={styles["about-content-box"]}>
                  <h3 className={styles["about-content-box-subtitle"]}>500+</h3>
                  <span className={styles["about-content-box-span"]}>
                    Clients
                  </span>
                </div>
                <div className={styles["about-content-box"]}>
                  <h3 className={styles["about-content-box-subtitle"]}>24/7</h3>
                  <span className={styles["about-content-box-span"]}>
                    Support
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["about-content-image"]}>
            <div className={styles["about-content-badge"]}>Premium Vehicle</div>
          </div>
        </div>
      </section>
      <section className={styles["services-section"]}>
        <div className={styles["services-content"]}>
          <h2 className={styles["services-title"]}>Our Services</h2>
          <div className={styles["services-cards-container"]}>
            <div className={styles["service-card"]}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
