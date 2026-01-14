"use client";
import { useRef, useEffect, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../contexts/LanguageContext";
import styles from "../styles/components/ReviewsSection.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

gsap.registerPlugin(ScrollTrigger);

export default function ReviewsSection() {
  const { t } = useLanguage();
  const reviews = t.reviews.items;
  const sectionRef = useRef<HTMLElement>(null);
  const googleRatingRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !googleRatingRef.current ||
      !carouselRef.current ||
      !buttonRef.current
    )
      return;

    gsap.set(googleRatingRef.current, {
      opacity: 0,
      y: -30,
    });

    gsap.set(carouselRef.current, {
      opacity: 0,
      scale: 0.95,
    });

    gsap.set(buttonRef.current, {
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(googleRatingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    tl.to(
      carouselRef.current,
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3"
    );

    tl.to(
      buttonRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className={styles["reviews-section"]}
    >
      <div className={styles["reviews-content"]}>
        <div ref={googleRatingRef} className={styles["reviews-header"]}>
          <div className={styles["google-rating"]}>
            <FcGoogle className={styles["google-icon"]} />
            <div className={styles["rating-info"]}>
              <div className={styles["stars"]}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p>5.0 {t.reviews.basedOn}</p>
            </div>
          </div>
        </div>

        <div ref={carouselRef} className={styles["reviews-carousel"]}>
          <div className={styles["swiper-container-wrapper"]}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                clickable: true,
                el: `.${styles["swiper-pagination"]}`,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={400}
              loop={true}
              className={styles["review-swiper"]}
              onInit={(swiper) => {
                // @ts-expect-error possible null value
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-expect-error possible null value
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className={styles["review-card"]}>
                    <div className={styles["review-header"]}>
                      <div className={styles["reviewer-info"]}>
                        <div className={styles["avatar"]}>
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h4>{review.name}</h4>
                          <div className={styles["review-stars"]}>
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className={styles["review-text"]}>
                      &quot;{review.text}&quot;
                    </p>
                  </div>
                </SwiperSlide>
              ))}
              {/* Move pagination element inside Swiper for correct targeting and mobile visibility */}
              <div className={styles["swiper-pagination"]} />
            </Swiper>
          </div>
          <div className={styles["nav-buttons-wrapper"]}>
            <button
              ref={prevRef}
              className={`${styles["nav-button"]} ${styles["nav-button-prev"]}`}
              aria-label="Previous review"
              type="button"
            >
              <FaChevronLeft />
            </button>

            <a
              ref={buttonRef}
              href="https://maps.app.goo.gl/2MEk65V3cRrb1Q2q9"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["view-all-link"]}
            >
              {t.reviews.viewAll}
            </a>

            <button
              ref={nextRef}
              className={`${styles["nav-button"]} ${styles["nav-button-next"]}`}
              aria-label="Next review"
              type="button"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
