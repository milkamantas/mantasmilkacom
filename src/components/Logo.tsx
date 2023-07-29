import { FunctionComponent } from "react";
import styles from "./Logo.module.css";

type LogoType = {
  image?: string;
};

const Logo: FunctionComponent<LogoType> = ({ image }) => {
  return (
    <div className={styles.logo}>
      <img className={styles.logoChild} alt="" src={image} />
    </div>
  );
};

export default Logo;
