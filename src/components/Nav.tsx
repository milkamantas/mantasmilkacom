// Nav.js
import { FunctionComponent } from "react";
import styles from "./Nav.module.css";

export type NavType = {
  /** Action props */
  onAboutMeClick?: () => void;  // Add this
  onProjectsClick?: () => void;  // Add this
  onContactMeClick?: () => void;  // Add this
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;  // Add this
};

const Nav: FunctionComponent<NavType> = ({
  onAboutMeClick,
  onProjectsClick,
  onContactMeClick,
  isOpen,
  setIsOpen,  // And this
}) => {
  const navClassName = isOpen ? `${styles.nav} ${styles.open}` : styles.nav;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, clickHandler?: () => void) => {
    e.preventDefault();
    setIsOpen?.(false);
    clickHandler?.();
};

return (
    <nav className={navClassName}>
      <a className={styles.navLink} href="#HeroTitle" onClick={(e) => handleLinkClick(e, onAboutMeClick)}>
        Home
      </a>
      <a className={styles.navLink} href="#Projects" onClick={(e) => handleLinkClick(e, onProjectsClick)}>
        Projects
      </a>
      <a className={styles.navLink} href="#Footer" onClick={(e) => handleLinkClick(e, onContactMeClick)}>
        Contact me
      </a>
    </nav>
  );

};

export default Nav;
