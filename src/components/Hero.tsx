import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";
import Section from "./Section";
import styles from "./Hero.module.css";

type HeroType = {
  topSubtitle?: string;
  showTopSubtitle?: boolean;
  title?: string;
  subTitle?: string;

  /** Style props */
  heroColor?: Property.Color;
  heroBackgroundImage?: Property.BackgroundImage;
};

const Hero: FunctionComponent<HeroType> = memo(
  ({
    topSubtitle,
    showTopSubtitle,
    title,
    subTitle,
    heroColor,
    heroBackgroundImage,
  }) => {
    const heroStyle: CSS.Properties = useMemo(() => {
      return {
        color: heroColor,
        backgroundImage: heroBackgroundImage,
      };
    }, [heroColor, heroBackgroundImage]);

    return (
      <Section name="Hero" flexDirection="column" type="wrapper" bgImg={heroBackgroundImage}>
        <div className={styles.content} style={heroStyle}>
          {showTopSubtitle && (
            <h2>{topSubtitle}</h2>
          )}
          <h1>
            {title}
          </h1>
          <h2>{subTitle}</h2>
        </div>
      </Section>
    );
  }
);

export default Hero;
