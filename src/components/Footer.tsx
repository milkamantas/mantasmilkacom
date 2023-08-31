import { FunctionComponent, useCallback } from "react";
import SocialNav from "./SocialNav";
import styles from "./Footer.module.css";
import Section from "./Section";
import { Link } from "react-router-dom";

const Footer: FunctionComponent = () => {

  const onContactMeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='platformdesktop']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <Section name="Footer" type="wrapper" flexDirection="row">
      <div className={styles.logoWrap}>
        <h4>Mantas Milka</h4>
        <div className={styles.contactLinks}>
          <Link to="mailto:mantas@mantasmilka.com">
            <h4 className={styles.contactLinkText}>
              mantas@mantasmilka.com
            </h4>
          </Link>
          <Link to="tel:+37062459890">
            <h4 className={styles.contactLinkText}>
              +370 624 59 890
            </h4>
          </Link>
        </div>
        <SocialNav />
      </div>
      <div className={styles.projects}>
        <h4>Projects</h4>
        <div className={styles.projectsList}>
          {/* <div className={styles.contactLinks}>Close-Ups</div> */}
          <Link className={styles.cta} to="/projectgeniussports">
            <h4>LiveStats</h4>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
