import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Hero.module.css";

type HeroType = {
  topSubtitle?: string;
  showTopSubtitle?: boolean;
  headingColorBlack?: boolean;
  title?: string;
  subTitle?: string;

  /** Style props */
  heroBackgroundImage?: Property.BackgroundImage;
};

const Hero: FunctionComponent<HeroType> = memo(
  ({
    topSubtitle,
    showTopSubtitle,
    headingColorBlack,
    title,
    subTitle,
    heroBackgroundImage,
  }) => {
    const heroStyle: CSS.Properties = useMemo(() => {
      return {
        backgroundImage: heroBackgroundImage,
      };
    }, [heroBackgroundImage]);

    return (
      <div className={styles.hero} style={heroStyle}>
        <div className={styles.wrapper}>
          {showTopSubtitle && (
            <h2 
              className={styles.heyImMantas} 
            >
              {topSubtitle}
            </h2>
          )}
            <h1
              className={styles.uxUiDesigner}
              id="HeroTitle"
            >
              {title}
            </h1>

            <h2 
              className={styles.heyImMantas} 
              >
              {subTitle}
            </h2>
        </div>
      </div>
    );
  }
);

export default Hero;
