import { FunctionComponent } from "react";
import { Link } from "react-router-dom"; // Import the Link component
import styles from "./Header.module.css";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import SocialNav from "./SocialNav";
import socialNavStyles from './SocialNav.module.css'

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
        <Link to="/"> {/* Wrap the img with Link component */}
          <img src="/logo_wrap.png" alt="Mantas Milka Logo" />
        </Link>
      </div>
      <Nav
        onAboutMeClick={onAboutMeClick}
        onProjectsClick={onProjectsClick}
        onContactMeClick={onContactMeClick}
      />
      <SocialNav className={`${socialNavStyles.SocialNav} ${styles.SocialNavInHeader}`} />
      <MobileMenu
        onAboutMeClick={onAboutMeClick}
        onProjectsClick={onProjectsClick}
        onContactMeClick={onContactMeClick}
      />
    </header>
  );
};

export default Header;
