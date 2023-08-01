import { FunctionComponent } from "react";
import styles from "./SectionGradientImage.module.css";
const SectionGradientImage: FunctionComponent = () => {
  return (
    <div className={styles.sectionImage}>
      <div className={styles.wrapper}>
        <img
          className={styles.flsConcept1}
          alt=""
          src="/fls-concept-1@2x.png"
        />
        <i className={styles.prototypePrepapredFor}>
          Prototype prepapred for Football LiveStats Usability Testing
        </i>
      </div>
    </div>
  );
};

export default SectionGradientImage;
