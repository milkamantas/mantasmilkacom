import { FunctionComponent } from "react";
import styles from "./SocialNav.module.css";

type SocialNavItem = {
  image?: string;
  link?: string;
};

const SocialNav: FunctionComponent<SocialNavItem> = ({ 
  image,
  link,
 }) => {
  return (
    <div className={styles.logo}>
      <img className={styles.logoChild} alt="" src={image} />
    </div>
  );
};

export default SocialNav;
