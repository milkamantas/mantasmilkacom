import { FunctionComponent } from "react";
import styles from "./Header1.module.css";

type HeaderType = {
  /** Action props */
  onAboutMeClick?: () => void;
  onProjectsClick?: () => void;
  onContactMeClick?: () => void;
};

const Header: FunctionComponent<HeaderType> = ({
  onAboutMeClick,
  onProjectsClick,
  onContactMeClick,
}) => {
  return (
    <header className={styles.header} data-scroll-to="header">
      <div className={styles.logoWrap}>
        <div className={styles.mantasMilka}>Mantas Milka</div>
      </div>
      <nav className={styles.nav}>
        <a
          className={styles.aboutMe}
          href="#HeroTitle"
          onClick={onAboutMeClick}
        >
          Home
        </a>
        <a
          className={styles.projects}
          href="#Projects"
          onClick={onProjectsClick}
        >
          Projects
        </a>
        <a
          className={styles.projects}
          href="#Footer"
          onClick={onContactMeClick}
        >
          Contact me
        </a>
      </nav>
      <ul className={styles.links}>
        <li className={styles.cv}>
          <img className={styles.icon} alt="" src="/cv@2x.png" />
        </li>
        <li className={styles.cv}>
          <img className={styles.icon} alt="" src="/cv1@2x.png" />
        </li>
        <li className={styles.cv}>
          <img className={styles.icon} alt="" src="/cv2@2x.png" />
        </li>
      </ul>
      <div className={styles.mobilemenu}>
        <div className={styles.mobilemenuClosed}>
          <div className={styles.mobilemenuClosedChild} />
          <div className={styles.mobilemenuClosedItem} />
          <div className={styles.mobilemenuClosedChild} />
        </div>
        <div className={styles.mobilemenuOpen}>
          <div className={styles.mobilemenuOpenChild} />
          <div className={styles.mobilemenuOpenItem} />
        </div>
      </div>
    </header>
  );
};

export default Header;
