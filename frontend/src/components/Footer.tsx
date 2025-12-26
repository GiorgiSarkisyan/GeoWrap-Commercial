"use client";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { useLenis } from "lenis/react";
import { useLanguage } from "../contexts/LanguageContext";
import styles from "../styles/components/Footer.module.scss";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-left"]}>
          <div className={styles["footer-logo"]}>
            <Image
              src="/images/logo.png"
              alt="GeoWrap Logo"
              width={200}
              height={38}
              priority
            />
          </div>
          <p className={styles["footer-tagline"]}>{t.footer.tagline}</p>
        </div>

        <div className={styles["footer-center"]}>
          <p className={styles["footer-copyright"]}>
            &copy; {new Date().getFullYear()} GeoWrap. {t.footer.rights}
          </p>
        </div>

        <div className={styles["footer-right"]}>
          <div className={styles["footer-socials"]}>
            <a
              href="https://www.instagram.com/geowrap/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles["social-icon"]}
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.facebook.com/geowrap/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={styles["social-icon"]}
            >
              <FiFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
