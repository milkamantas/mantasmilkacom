import { FunctionComponent } from "react";
import styles from "./Header.module.css";
import MobileMenu from "./MobileMenu";
import SocialNav from "./SocialNav";

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
      <SocialNav />
      <MobileMenu />
    </header>
  );
};

export default Header;
