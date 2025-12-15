import { useLanguage } from "../contexts/LanguageContext";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import styles from "../styles/components/ContactSection.module.scss";

export default function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className={styles["contact-section"]}>
      <div className={styles["contact-content"]}>
        <div className={styles["contact-content-informational"]}>
          <div className={styles["contact-content-titles"]}>
            <h3>{t.contact.title}</h3>
            <h2>
              {t.contact.heading} <br />
              <span>{t.contact.headingHighlight}</span>
            </h2>
            <p>
              {t.contact.description}
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
                  {t.contact.address}
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
                  {t.contact.phone}
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
                  {t.contact.email}
                </span>
              </a>
            </div>
          </div>
          <div className={styles["contact-content-socials"]}>
            <span>{t.contact.followText}</span>
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
  );
}
