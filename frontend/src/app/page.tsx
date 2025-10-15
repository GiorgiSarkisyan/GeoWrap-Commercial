"use client";
import Image from "next/image";
import styles from "../styles/page/page.module.scss";
import { FaChevronDown, FaEye } from "react-icons/fa";
import { useState } from "react";
import { BsEye } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

const languages = [
  { code: "en", label: "English", flag: "/images/flags/en.png" },
  { code: "ru", label: "Русский", flag: "/images/flags/ru.png" },
  { code: "ge", label: "ქართული", flag: "/images/flags/ge.png" },
];

const services = [
  {
    id: 1,
    name: "Premium Quality PPF",
    imageUrl: "/images/services/premium-quality-ppf.jpg",
    description: "Ultimate paint protection with invisible precision.",
    paragraph:
      "Our Premium Paint Protection Film (PPF) shields your vehicle’s surface from scratches, rock chips, and environmental damage while maintaining its original shine. Installed with expert precision, it ensures your car stays flawless for years without altering its appearance.",
  },
  {
    id: 2,
    name: "Premium Vinyl Wraps",
    imageUrl: "/images/services/premium-vinyl-wraps.jpg",
    description: "Transform your vehicle’s look with stunning custom wraps.",
    paragraph:
      "Whether you want a bold color change or a sleek matte finish, our premium vinyl wraps deliver both style and protection. Each wrap is precisely applied for a smooth, durable finish that turns your car into a true statement on the road.",
  },
  {
    id: 3,
    name: "Interior Detailing",
    imageUrl: "/images/services/interior-detailing.jpg",
    description: "Refresh and restore your car’s interior to perfection.",
    paragraph:
      "Our interior detailing service deep-cleans every inch of your cabin — from seats and carpets to dashboards and vents. We use premium products to remove stains, odors, and dust buildup, leaving your interior feeling brand new and hygienically fresh.",
  },
  {
    id: 4,
    name: "Ceramic Coatings",
    imageUrl: "/images/services/ceramic-coating.jpg",
    description: "Long-lasting shine and protection against the elements.",
    paragraph:
      "Our advanced ceramic coating creates a hydrophobic layer on your car’s surface, protecting it from UV rays, oxidation, and contaminants. The result is an ultra-glossy finish that’s easier to clean and keeps your car looking freshly detailed every day.",
  },
  {
    id: 5,
    name: "Wheel Powder Coating & Restoration",
    imageUrl: "/images/services/wheel-powder-coating-paing.jpg",
    description: "Revitalize your wheels with a durable and stylish finish.",
    paragraph:
      "We restore and refinish your wheels with professional powder coating for a smooth, chip-resistant surface. Choose from a variety of finishes and colors to give your wheels a factory-fresh look while protecting them from rust and wear.",
  },
  {
    id: 6,
    name: "Window Tint",
    imageUrl: "/images/services/window-tint.jpg",
    description: "Cooler interiors, enhanced privacy, and UV protection.",
    paragraph:
      "Our window tinting service combines aesthetics with functionality, blocking harmful UV rays and reducing glare. Professionally applied film ensures a seamless finish, improved comfort, and long-term protection for both you and your vehicle’s interior.",
  },
  {
    id: 7,
    name: "Noise & Vibration Insulation",
    imageUrl: "/images/services/noise-vibration-insulation.jpg",
    description: "Drive in peace with superior sound and vibration control.",
    paragraph:
      "Experience a quieter, smoother ride with our noise and vibration insulation solutions. Using high-quality materials, we reduce cabin noise, engine vibrations, and road rumble — giving your vehicle a premium, luxury-grade feel.",
  },
  {
    id: 8,
    name: "Polishing",
    imageUrl: "/images/services/polishing.jpg",
    description: "Restore your car’s deep gloss and remove imperfections.",
    paragraph:
      "Our professional polishing process eliminates swirl marks, light scratches, and oxidation to bring back your paint’s mirror-like shine. Perfect as a pre-ceramic treatment or for restoring your car’s original luster after years of exposure.",
  },
  {
    id: 9,
    name: "Detailing Wash",
    imageUrl: "/images/services/detailing-wash.jpg",
    description: "More than a wash — a complete rejuvenation for your car.",
    paragraph:
      "This in-depth cleaning process goes beyond a standard wash, targeting every detail of your car’s exterior. From gentle hand washing to precise drying and tire care, our detailing wash restores your car’s sparkle and showroom finish.",
  },
  {
    id: 10,
    name: "PDR Dent Repair",
    imageUrl: "/images/services/pdr-dent-repair.jpg",
    description: "Flawless dent removal without damaging your paint.",
    paragraph:
      "Our Paintless Dent Repair (PDR) technique removes dents and dings while preserving your vehicle’s original finish. It’s a fast, affordable, and eco-friendly solution that restores your car’s smooth appearance without the need for repainting.",
  },
];

export default function Page() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeModalWithAnimation = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      closeModal();
    }, 150);
  };

  const openModal = (service: (typeof services)[0]) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

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
            width={235}
            height={55}
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
      <section className={styles["service-section"]}>
        <div className={styles["service-content"]}>
          <h2 className={styles["service-title"]}>Our Services</h2>
          <div className={styles["service-cards-container"]}>
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
    </div>
  );
}
