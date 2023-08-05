import { FunctionComponent, useCallback } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {

  const onContactMeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='platformdesktop']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.platformdesktop}
    data-scroll-to="platformdesktop">
      <div className={styles.logoWrap}>
        <div className={styles.mantasMilka}>Mantas Milka</div>
        <div className={styles.mantasmantasmilkacomParent}>
          <div className={styles.mantasmantasmilkacom}>
            mantas@mantasmilka.com
          </div>
          <div className={styles.mantasmantasmilkacom}>+370 624 59 890</div>
        </div>
        <div className={styles.social}>
          <div className={styles.cv}>
            <div className={styles.cvChild} />
            <div className={styles.cv1}>CV</div>
          </div>
          <img className={styles.cv} alt="" src="/-icon-rounded-linkedin.svg" />
          <img
            className={styles.cv}
            alt=""
            src="/-icon-rounded-instagram.svg"
          />
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.mantasMilka}>Projects</div>
        <div className={styles.closeUpsParent}>
          {/* <div className={styles.mantasmantasmilkacom}>Close-Ups</div> */}
          <div className={styles.mantasmantasmilkacom}>LiveStats</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
