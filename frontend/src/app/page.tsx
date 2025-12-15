"use client";
import Image from "next/image";
import styles from "../styles/page/page.module.scss";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { BsEye, BsInstagram, BsTelephone } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { BiEnvelope } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import Typed from "typed.js";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const languages = [
  { code: "en", label: "English", flag: "/images/flags/en.png" },
  { code: "ru", label: "Русский", flag: "/images/flags/ru.png" },
  { code: "ge", label: "ქართული", flag: "/images/flags/ge.png" },
];

const workshop = [
  {
    id: 1,
    imageUrl: "/images/workshop/audi-rs6.jpg",
    title: "Audi RS6",
    type: "High-performance luxury car",
  },
  {
    id: 2,
    imageUrl: "/images/workshop/bmw-m850.jpg",
    title: "BMW M850",
    type: "High-performance luxury grand tourer",
  },
  {
    id: 3,
    imageUrl: "/images/workshop/chevrolet-corvette-c3.jpg",
    title: "Chevrolet Corvette C3",
    type: "Classic American sports car",
  },
  {
    id: 4,
    imageUrl: "/images/workshop/ferrari-296gtb.jpg",
    title: "Ferrari 296GTB",
    type: "Supercar",
  },
  {
    id: 5,
    imageUrl: "/images/workshop/lamborghini-urus-performante.jpg",
    title: "Lamborghini Urus Performante",
    type: "High-performance luxury SUV",
  },
  {
    id: 6,
    imageUrl: "/images/workshop/mercedes-sl190.jpg",
    title: "Mercedes SL190",
    type: "Classic luxury roadster",
  },
  {
    id: 7,
    imageUrl: "/images/workshop/mercedes-v300.jpg",
    title: "Mercedes V300",
    type: "Luxury van",
  },
  {
    id: 8,
    imageUrl: "/images/workshop/mercedes-gt63.jpg",
    title: "Mercedes GT63",
    type: "High-performance luxury sports sedan",
  },
  {
    id: 9,
    imageUrl: "/images/workshop/porsche-911-carrera.jpg",
    title: "Porsche 911 Carrera",
    type: "High-performance luxury sports car",
  },
  {
    id: 10,
    imageUrl: "/images/workshop/porsche-911-carrera-gts.jpg",
    title: "Porsche 911 Carrera GTS",
    type: "High-performance luxury sports car",
  },
  {
    id: 11,
    imageUrl: "/images/workshop/porsche-gt3.jpg",
    title: "Porsche GT3",
    type: "Track-focused sports car",
  },
  {
    id: 12,
    imageUrl: "/images/workshop/shelby-cobra.jpg",
    title: "Shelby Cobra",
    type: "Classic American sports car",
  },
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
    imageUrl: "/images/services/wheel-powder-coating-paint.jpg",
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
  const lenis = useLenis();

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

  const el = useRef<HTMLSpanElement | null>(null);
  const typedInstance = useRef<Typed | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const aboutTitleRef = useRef<HTMLHeadingElement | null>(null);
  const aboutSecondaryRef = useRef<HTMLHeadingElement | null>(null);
  const aboutDescriptionRef = useRef<HTMLParagraphElement | null>(null);
  const aboutBoxesRef = useRef<HTMLDivElement | null>(null);
  const aboutImageRef = useRef<HTMLDivElement | null>(null);
  const aboutBadgeRef = useRef<HTMLDivElement | null>(null);
  const serviceSectionRef = useRef<HTMLElement | null>(null);
  const serviceTitleRef = useRef<HTMLHeadingElement | null>(null);
  const serviceCardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!el.current) return;

    typedInstance.current = new Typed(el.current, {
      strings: [
        "masterpiece",
        "elegance",
        "work of art",
        "legend",
        "showpiece",
        "masterwork",
        "head turner",
        "showstopper",
        "refinement",
        "centerpiece",
      ],
      typeSpeed: 110,
      backSpeed: 50,
      loop: true,
      startDelay: 1000,
      backDelay: 500,
    });

    return () => {
      typedInstance.current?.destroy();
    };
  }, []);

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

  // GSAP animations for About Us section
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

    gsap.set(aboutImageRef.current, {
      opacity: 0,
      scale: 0.7,
      rotationY: 15,
      rotationZ: -5,
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

    // Animate image with dramatic entrance
    tl.to(
      aboutImageRef.current,
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        rotationZ: 0,
        duration: 1.2,
        ease: "power4.out",
      },
      "-=1"
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

  // GSAP animations for Services section
  useEffect(() => {
    if (
      !serviceSectionRef.current ||
      !serviceTitleRef.current ||
      !serviceCardsRef.current
    )
      return;

    // Set initial states
    gsap.set(serviceTitleRef.current, {
      opacity: 0,
      y: 60,
      scale: 0.9,
    });

    gsap.set(serviceCardsRef.current.children, {
      opacity: 0,
      y: 80,
      scale: 0.85,
      rotationX: 15,
    });

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: serviceSectionRef.current,
        start: "top 70%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate title with dynamic effect
    tl.to(serviceTitleRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power4.out",
    });

    // Animate service cards with stagger
    tl.to(
      serviceCardsRef.current.children,
      {
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
      },
      "-=0.6"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div>
      <header ref={headerRef} className={styles["header"]}>
        <div className={styles["header-navigator"]}>
          <Image
            src="/images/no-bg.png"
            alt="geo-wrap-logo"
            width={235}
            height={55}
            onClick={() => scrollToSection("hero")}
            style={{ cursor: "pointer" }}
          />
          <nav className={styles["nav-wrapper"]}>
            <ul className={styles["list"]}>
              <li
                className={styles["list-item"]}
                onClick={() => scrollToSection("about")}
              >
                About us
              </li>
              <li
                className={styles["list-item"]}
                onClick={() => scrollToSection("services")}
              >
                Services
              </li>
              <li
                className={styles["list-item"]}
                onClick={() => scrollToSection("workshop")}
              >
                Workshop
              </li>
              <li
                className={styles["list-item"]}
                onClick={() => scrollToSection("contact")}
              >
                Contact
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

      <section id="hero" className={styles["main-section"]}>
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
        <div className={styles["main-content"]}>
          <div className={styles["main-content-inner"]}>
            <h1>
              This is how your ride becomes a <span ref={el}></span>
            </h1>
            <button onClick={() => scrollToSection("workshop")}>
              Our Workshop
            </button>
          </div>
          <div className={styles["scroll-indicator"]}>
            <span>Scroll to explore</span>
            <FaChevronDown className={styles["scroll-arrow"]} />
          </div>
        </div>
      </section>
      <section
        id="about"
        ref={aboutSectionRef}
        className={styles["about-section"]}
      >
        <div className={styles["about-content"]}>
          <div className={styles["about-content-informative"]}>
            <div className={styles["about-content-inner"]}>
              <div className={styles["about-content-text"]}>
                <h2
                  ref={aboutTitleRef}
                  className={styles["about-content-title"]}
                >
                  About Us
                </h2>
                <h3
                  ref={aboutSecondaryRef}
                  className={styles["about-content-secondary"]}
                >
                  Turning Everyday Cars Into{" "}
                  <span>Eye-Catching Masterpieces</span>
                </h3>
                <p
                  ref={aboutDescriptionRef}
                  className={styles["about-content-description"]}
                >
                  GeoWrap is a leading provider of innovative geospatial
                  solutions, dedicated to transforming the way businesses and
                  organizations harness the power of location data. With a team
                  of experienced professionals and cutting-edge technology, we
                  deliver tailored services that meet the unique needs of our
                  clients across various industries.
                </p>
              </div>
              <div
                ref={aboutBoxesRef}
                className={styles["about-content-boxes"]}
              >
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
          <div ref={aboutImageRef} className={styles["about-content-image"]}>
            <div ref={aboutBadgeRef} className={styles["about-content-badge"]}>
              Premium Vehicle
            </div>
          </div>
        </div>
      </section>
      <section
        id="services"
        ref={serviceSectionRef}
        className={styles["service-section"]}
      >
        <div className={styles["service-content"]}>
          <h2 ref={serviceTitleRef} className={styles["service-title"]}>
            Our Services
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
      <section id="workshop" className={styles["workshop-section"]}>
        <div className={styles["workshop-header"]}>
          <h2 className={styles["workshop-section-title"]}>Workshop</h2>
          <span className={styles["workshop-section-second-title"]}>
            Check out our most impressive works
          </span>
        </div>
        <div className={styles["workshop-content"]}>
          <Swiper
            effect="coverflow"
            className={styles["swiper"]}
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            grabCursor={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ el: ".custom-pagination" }}
          >
            {workshop.map((item) => (
              <SwiperSlide
                key={item.id}
                style={{ width: "500px", height: "600px" }}
              >
                <div
                  className={styles["workshop-card"]}
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                  <div className={styles["workshop-card-content"]}>
                    <h3 className={styles["workshop-card-car-type"]}>
                      {item.type}
                    </h3>
                    <h2 className={styles["workshop-card-car-title"]}>
                      {item.title}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination"></div>
        </div>
      </section>
      <section id="contact" className={styles["contact-section"]}>
        <div className={styles["contact-content"]}>
          <div className={styles["contact-content-informational"]}>
            <div className={styles["contact-content-titles"]}>
              <h3>Contact Us</h3>
              <h2>
                Ready To <br />
                <span>Get Started?</span>
              </h2>
              <p>
                Reach out to us today and discover how we can elevate your
                automotive experience with our premium services and expert team.
              </p>
            </div>
            <div className={styles["contact-content-contacts"]}>
              <div className={styles["contact-content-contact-item"]}>
                <a
                  href="https://maps.app.goo.gl/ynD8toPz3VBikkHt5"
                  target="_blank"
                  className={styles["contact-content-contact-link"]}
                  rel="noopener noreferrer"
                >
                  <span className={styles["contact-content-contact-label"]}>
                    <CiLocationOn />
                  </span>
                  <span className={styles["contact-content-contact-text"]}>
                    Tbilisi, Parsadani street 9
                  </span>
                </a>
              </div>
              <div className={styles["contact-content-contact-item"]}>
                <a
                  href="tel:+995593103113"
                  className={styles["contact-content-contact-link"]}
                  aria-label="Call GeoWrap"
                >
                  <span className={styles["contact-content-contact-label"]}>
                    <BsTelephone />
                  </span>
                  <span className={styles["contact-content-contact-text"]}>
                    +995 593 10 31 13
                  </span>
                </a>
              </div>
              <div className={styles["contact-content-contact-item"]}>
                <a
                  href="mailto:geowraptbilisi@gmail.com"
                  className={styles["contact-content-contact-link"]}
                  aria-label="Email GeoWrap"
                >
                  <span className={styles["contact-content-contact-label"]}>
                    <BiEnvelope />
                  </span>
                  <span className={styles["contact-content-contact-text"]}>
                    geowraptbilisi@gmail.com
                  </span>
                </a>
              </div>
            </div>
            <div className={styles["contact-content-socials"]}>
              <span>Follow our journey</span>
              <div className={styles["contact-content-social-icons"]}>
                <a
                  href="https://www.instagram.com/geowrap/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  className={styles["contact-content-contact-link"]}
                >
                  <span>
                    <BsInstagram />
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/Iwrapconceptz.ge"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  className={styles["contact-content-contact-link"]}
                >
                  <span>
                    <FiFacebook />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles["contact-map"]}>
            <iframe
              className={styles["contact-iframe"]}
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2975.0221181533357!2d44.763077076079874!3d41.784736971252215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDQ3JzA1LjEiTiA0NMKwNDUnNTYuNCJF!5e0!3m2!1sru!2sge!4v1764684491051!5m2!1sru!2sge"
              loading="lazy"
              title="GeoWrap location"
              aria-hidden="false"
              allowFullScreen={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
