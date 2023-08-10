import { FunctionComponent } from "react";
import styles from "./Header.module.css";
import MobileMenu from "./MobileMenu";
import SocialNav from "./SocialNav";
import Nav from "./Nav";

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
    <header className={styles.header}>
      <div className={styles.logoWrap}>
        <div className={styles.mantasMilka}>Mantas Milka</div>
      </div>
      <Nav
        onAboutMeClick={onAboutMeClick}
        onProjectsClick={onProjectsClick}
        onContactMeClick={onContactMeClick}
      />
      <SocialNav />
      <MobileMenu
        onAboutMeClick={onAboutMeClick}
        onProjectsClick={onProjectsClick}
        onContactMeClick={onContactMeClick}
      />
    </header>
  );
};

export default Header;
