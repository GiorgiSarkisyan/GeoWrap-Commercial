"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import styles from "../styles/components/AboutSection.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const { t } = useLanguage();
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const aboutTitleRef = useRef<HTMLHeadingElement | null>(null);
  const aboutSecondaryRef = useRef<HTMLHeadingElement | null>(null);
  const aboutDescriptionRef = useRef<HTMLParagraphElement | null>(null);
  const aboutBoxesRef = useRef<HTMLDivElement | null>(null);
  const aboutImageRef = useRef<HTMLDivElement | null>(null);
  const aboutBadgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      !aboutSectionRef.current ||
      !aboutTitleRef.current ||
      !aboutSecondaryRef.current ||
      !aboutDescriptionRef.current ||
      !aboutBoxesRef.current ||
      !aboutImageRef.current ||
      !aboutBadgeRef.current
    )
      return;

    // Set initial states
    gsap.set(
      [
        aboutTitleRef.current,
        aboutSecondaryRef.current,
        aboutDescriptionRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      }
    );

    gsap.set(aboutBoxesRef.current.children, {
      opacity: 0,
      scale: 0.8,
      y: 30,
    });

    gsap.set(aboutBadgeRef.current, {
      opacity: 0,
      scale: 0,
      rotation: -10,
    });

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: "top 70%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate title
    tl.to(aboutTitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Animate secondary title
    tl.to(
      aboutSecondaryRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Animate description
    tl.to(
      aboutDescriptionRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Animate boxes with stagger
    tl.to(
      aboutBoxesRef.current.children,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
      },
      "-=0.4"
    );

    // Animate badge with bounce
    tl.to(
      aboutBadgeRef.current,
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutSectionRef}
      className={styles["about-section"]}
    >
      <div className={styles["about-content"]}>
        <div className={styles["about-content-informative"]}>
          <div className={styles["about-content-inner"]}>
            <div className={styles["about-content-text"]}>
              <h2 ref={aboutTitleRef} className={styles["about-content-title"]}>
                {t.about.title}
              </h2>
              <h3
                ref={aboutSecondaryRef}
                className={styles["about-content-secondary"]}
              >
                {t.about.subtitle} <span>{t.about.subtitleHighlight}</span>
              </h3>
              <p
                ref={aboutDescriptionRef}
                className={styles["about-content-description"]}
              >
                {t.about.description}
              </p>
            </div>
            <div ref={aboutBoxesRef} className={styles["about-content-boxes"]}>
              <div className={styles["about-content-box"]}>
                <h3 className={styles["about-content-box-subtitle"]}>6+</h3>
                <span className={styles["about-content-box-span"]}>
                  {t.about.yearsExperience}
                </span>
              </div>
              <div className={styles["about-content-box"]}>
                <h3 className={styles["about-content-box-subtitle"]}>500+</h3>
                <span className={styles["about-content-box-span"]}>
                  {t.about.clients}
                </span>
              </div>
              <div className={styles["about-content-box"]}>
                <h3 className={styles["about-content-box-subtitle"]}>24/7</h3>
                <span className={styles["about-content-box-span"]}>
                  {t.about.support}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={aboutImageRef}
          className={styles["about-content-image"]}
          role="img"
          aria-label="GeoWrap workshop and team"
        >
          <div ref={aboutBadgeRef} className={styles["about-content-badge"]}>
            {t.about.badge}
          </div>
        </div>
      </div>
    </section>
  );
}
