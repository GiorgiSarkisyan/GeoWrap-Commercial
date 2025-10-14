"use client";
import Image from "next/image";
import styles from "../styles/page/page.module.scss";
import { FaChevronDown, FaEye } from "react-icons/fa";
import { useState } from "react";
import { BsEye } from "react-icons/bs";

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
  },
  {
    id: 2,
    name: "Premium Vinyl Wraps",
    imageUrl: "/images/services/premium-vinyl-wraps.jpg",
  },
  {
    id: 3,
    name: "Interior detailing",
    imageUrl: "/images/services/interior-detailing.jpg",
  },
  {
    id: 4,
    name: "Ceramic Coatings",
    imageUrl: "/images/services/ceramic-coating.jpg",
  },
  {
    id: 5,
    name: "Wheel powder coating paint & Restoration",
    imageUrl: "/images/services/wheel-powder-coating-paing.jpg",
  },
  { id: 6, name: "Window tint", imageUrl: "/images/services/window-tint.jpg" },
  {
    id: 7,
    name: "Noise & Vibration Insulation",
    imageUrl: "/images/services/noise-vibration-insulation.jpg",
  },
  { id: 8, name: "Polishing", imageUrl: "/images/services/polishing.jpg" },
  {
    id: 9,
    name: "Detailing wash",
    imageUrl: "/images/services/detailing-wash.jpg",
  },
  {
    id: 10,
    name: "PDR Dent Repair",
    imageUrl: "/images/services/pdr-dent-repair.jpg",
  },
];

export default function Page() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);

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

            {selectedService && (
              <div className={styles["modal-overlay"]} onClick={closeModal}>
                <div
                  className={styles["modal-content"]}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className={styles["modal-close"]}
                    onClick={closeModal}
                  >
                    &times;
                  </button>
                  <div className={styles["modal-image"]}></div>
                  <h2>{selectedService.name}</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Here you can add more information about the service.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
