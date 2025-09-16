import Image from "next/image";
import styles from "../styles/page/page.module.scss";

export default function Page() {
  return (
    <div>
      <header className={styles["header"]}>
        <Image
          src="/images/logo-black.png"
          alt="geo-wrap-logo"
          width={220}
          height={80}
        />
        <nav className="nav-wrapper">
          <ul className="list">
            <li className="list-item">Home</li>
            <li className="list-item">About</li>
            <li className="list-item">Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
