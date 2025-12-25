"use client";
import { useLanguage } from "../contexts/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import styles from "../styles/components/WorkshopSection.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { BiLeftArrow } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";

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

export default function WorkshopSection() {
  const { t } = useLanguage();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="workshop" className={styles["workshop-section"]}>
      <div className={styles["workshop-header"]}>
        <h2 className={styles["workshop-section-title"]}>{t.workshop.title}</h2>
        <span className={styles["workshop-section-second-title"]}>
          {t.workshop.subtitle}
        </span>
      </div>
      <div className={styles["workshop-content"]}>
        <Swiper
          key={isMobile ? "mobile" : "desktop"}
          effect="coverflow"
          className={styles["swiper"]}
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          slidesPerView="auto"
          touchEventsTarget="container"
          centeredSlides
          loop
          grabCursor
          speed={600}
          touchRatio={isMobile ? 1.25 : 0.3}
          resistanceRatio={isMobile ? 1.25 : 0.8}
          shortSwipes={isMobile ? true : false}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".workshop-prev",
            nextEl: ".workshop-next",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
        >
          {workshop.map((item) => (
            <SwiperSlide key={item.id} className={styles["workshop-slide"]}>
              <div
                className={styles["workshop-card"]}
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                role="img"
                aria-label={`${item.title} - ${item.type}`}
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

          <div className={styles["pagination-nav-wrapper"]}>
            <button
              className={`${styles["nav-button"]} workshop-prev`}
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>
            <div className="custom-pagination"></div>
            <button
              className={`${styles["nav-button"]} workshop-next`}
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
