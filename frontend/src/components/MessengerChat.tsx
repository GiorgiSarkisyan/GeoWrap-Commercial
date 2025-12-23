"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { FiFacebook } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import styles from "../styles/components/MessengerChat.module.scss";

export default function MessengerChat() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      if (document.getElementById("facebook-jssdk")) return;

      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      window.fbAsyncInit = function () {
        if (window.FB) {
          window.FB.init({
            xfbml: true,
            version: "v18.0",
          });
        }
      };
    };

    loadFacebookSDK();
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    
    setTimeout(() => {
      if (window.FB && window.FB.CustomerChat) {
        if (!isOpen) {
          window.FB.CustomerChat.show(true);
          window.FB.CustomerChat.showDialog();
        } else {
          window.FB.CustomerChat.hideDialog();
        }
      }
    }, 100);
  };

  return (
    <>
      {/* Facebook Customer Chat Plugin */}
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        // @ts-expect-error - Facebook plugin attributes
        attribution="biz_inbox"
        page_id="100063698337217"
        theme_color="#0084ff"
        logged_in_greeting={t.messenger.greeting}
        logged_out_greeting={t.messenger.greeting}
      ></div>

      {/* Custom Messenger Button */}
      <div className={styles["messenger-chat"]}>
        <button
          className={`${styles["messenger-button"]} ${
            isOpen ? styles["open"] : ""
          }`}
          onClick={toggleChat}
          aria-label={isOpen ? "Close Messenger chat" : "Open Messenger chat"}
        >
          {isOpen ? (
            <CgClose className={styles["messenger-icon"]} />
          ) : (
            <FiFacebook className={styles["messenger-icon"]} />
          )}
        </button>
      </div>
    </>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    FB: any;
    fbAsyncInit: () => void;
  }
}

