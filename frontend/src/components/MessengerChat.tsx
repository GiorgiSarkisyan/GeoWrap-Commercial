"use client";
import { FiFacebook } from "react-icons/fi";
import styles from "../styles/components/MessengerChat.module.scss";

export default function MessengerChat() {
  const handleClick = () => {
    // Open Messenger in new window
    window.open(
      "https://m.me/Iwrapconceptz.ge",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className={styles["messenger-chat"]}>
      <button
        className={styles["messenger-button"]}
        onClick={handleClick}
        aria-label="Chat on Messenger"
      >
        <FiFacebook className={styles["messenger-icon"]} />
      </button>
    </div>
  );
}

