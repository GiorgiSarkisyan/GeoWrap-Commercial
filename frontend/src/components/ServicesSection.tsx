"use client";
import { useEffect, useRef, useState } from "react";
import { BsEye } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { useLanguage } from "../contexts/LanguageContext";
import styles from "../styles/components/ServicesSection.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const serviceImages = [
  { id: 1, imageUrl: "/images/services/premium-quality-ppf.jpg" },
  { id: 2, imageUrl: "/images/services/premium-vinyl-wraps.jpg" },
  { id: 3, imageUrl: "/images/services/interior-detailing.jpg" },
  { id: 4, imageUrl: "/images/services/ceramic-coating.jpg" },
  { id: 5, imageUrl: "/images/services/wheel-powder-coating-paint.jpg" },
  { id: 6, imageUrl: "/images/services/window-tint.jpg" },
  { id: 7, imageUrl: "/images/services/noise-vibration-insulation.jpg" },
  { id: 8, imageUrl: "/images/services/polishing.jpg" },
  { id: 9, imageUrl: "/images/services/detailing-wash.jpg" },
  { id: 10, imageUrl: "/images/services/pdr-dent-repair.jpg" },
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const lenis = useLenis();
  const services = t.services.items.map((item, index) => ({
    ...item,
    id: index + 1,
    imageUrl: serviceImages[index].imageUrl,
  }));

  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);
  const [isClosing, setIsClosing] = useState(false);
  const serviceSectionRef = useRef<HTMLElement | null>(null);
  const serviceTitleRef = useRef<HTMLHeadingElement | null>(null);
  const serviceCardsRef = useRef<HTMLDivElement | null>(null);

  const closeModalWithAnimation = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      closeModal();
    }, 150);
  };

  const openModal = (service: (typeof services)[0]) => {
    setSelectedService(service);
    document.body.style.overflow = "static";
    lenis?.stop();
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = "";
    lenis?.start();
  };

  useEffect(() => {
    if (
      !serviceSectionRef.current ||
      !serviceTitleRef.current ||
      !serviceCardsRef.current
    )
      return;

    // Set initial states for cards only (title will remain static)
    gsap.set(serviceCardsRef.current.children, {
      opacity: 0,
      y: 80,
      scale: 0.85,
      rotationX: 15,
    });

    // Create timeline with ScrollTrigger that only runs once (on first downward scroll)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: serviceSectionRef.current,
        start: "top 70%",
        // don't reverse; play once and remove the trigger
        toggleActions: "play none none none",
        once: true,
      },
    });

    // Animate service cards with stagger (title is not animated)
    tl.to(serviceCardsRef.current.children, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 0.8,
      stagger: {
        each: 0.1,
        from: "start",
      },
      ease: "power3.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <section
        id="services"
        ref={serviceSectionRef}
        className={styles["service-section"]}
      >
        <div className={styles["service-content"]}>
          <h2 ref={serviceTitleRef} className={styles["service-title"]}>
            {t.services.title}
          </h2>
          <div
            ref={serviceCardsRef}
            className={styles["service-cards-container"]}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className={styles["service-card"]}
                onClick={() => openModal(service)}
              >
                <div
                  className={styles["service-card-bg"]}
                  style={{ backgroundImage: `url(${service.imageUrl})` }}
                />
                <div className={styles["service-card-icon"]}>
                  <BsEye />
                </div>
                <h3>{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedService && (
        <>
          {/* Backdrop */}
          <div
            className={`${styles["modal-backdrop"]} ${
              isClosing ? styles["fade-out"] : ""
            }`}
            onClick={closeModalWithAnimation}
          />

          {/* Modal */}
          <div
            className={`${styles["modal-overlay"]} ${
              isClosing ? styles["fade-out"] : ""
            }`}
          >
            <div className={styles["modal-content"]}>
              <button
                className={styles["modal-close-button"]}
                onClick={closeModalWithAnimation}
              >
                <CgClose />
              </button>

              <div
                className={styles["modal-image"]}
                style={{ backgroundImage: `url(${selectedService.imageUrl})` }}
              />

              <div className={styles["modal-content-text"]}>
                <div className={styles["modal-header"]}>
                  <h2 className={styles["modal-header-title"]}>
                    {selectedService.name}
                  </h2>
                  <h3 className={styles["modal-header-subtitle"]}>
                    {selectedService.description}
                  </h3>
                </div>
                <p className={styles["modal-paragraph"]}>
                  {selectedService.paragraph}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
