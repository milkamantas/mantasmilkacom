import { FunctionComponent, useEffect } from "react";
import styles from "./Mobile.module.css";

type MobileType = {
  onClose?: () => void;
};

const Mobile: FunctionComponent<MobileType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.mobile} data-animate-on-scroll>
      <div className={styles.menu}>
        <div className={styles.header}>
          <div className={styles.logoWrap}>
            <div className={styles.mantasMilka}>Mantas Milka</div>
            <div className={styles.logo}>
              <img
                className={styles.mantasMilkaIcon}
                alt=""
                src="/mantas-milka1.svg"
              />
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameChild} />
          </div>
        </div>
        <a className={styles.section}>
          <div className={styles.aboutMe}>About me</div>
          <div className={styles.aboutMe}>Projects</div>
          <div className={styles.aboutMe}>Contact me</div>
          <div className={styles.social}>
            <div className={styles.cv}>
              <div className={styles.cvChild} />
              <b className={styles.cv1}>CV</b>
            </div>
            <img
              className={styles.cv}
              alt=""
              src="/-icon-rounded-linkedin11.svg"
            />
            <img
              className={styles.cv}
              alt=""
              src="/-icon-rounded-instagram11.svg"
            />
          </div>
          <div className={styles.mantasmantasmilkacomParent}>
            <div className={styles.mantasmantasmilkacom}>
              mantas@mantasmilka.com
            </div>
            <div className={styles.mantasmantasmilkacom}>+370 624 59 890</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Mobile;
