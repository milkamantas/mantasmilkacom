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
        <h4>Mantas Milka</h4>
        <div className={styles.contactLinks}>
          <h4 className={styles.contactLinkText}>
            mantas@mantasmilka.com
          </h4>
          <h4 className={styles.contactLinkText}>
            +370 624 59 890
          </h4>
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
      <div className={styles.projects}>
        <h4>Projects</h4>
        <div className={styles.projectsList}>
          {/* <div className={styles.contactLinks}>Close-Ups</div> */}
          <h4>LiveStats</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
