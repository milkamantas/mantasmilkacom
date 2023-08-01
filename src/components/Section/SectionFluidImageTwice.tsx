import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SectionFluidImageTwice.module.css";

type SectionFluidImageTwiceType = {
  iMGLeft?: string;
  iMGRight?: string;
  caption?: string;

  /** Style props */
  sectionFluidImageHeight?: Property.Height;
};

const SectionFluidImageTwice: FunctionComponent<SectionFluidImageTwiceType> = ({
  iMGLeft,
  iMGRight,
  caption,
  sectionFluidImageHeight,
}) => {
  const sectionFluidImage1Style: CSS.Properties = useMemo(() => {
    return {
      height: sectionFluidImageHeight,
    };
  }, [sectionFluidImageHeight]);

  return (
    <div className={styles.sectionFluidImage} style={sectionFluidImage1Style}>
      <div className={styles.wraper}>
        <img className={styles.imgLeftIcon} alt="" src={iMGLeft} />
        <img className={styles.imgLeftIcon} alt="" src={iMGRight} />
      </div>
      <i className={styles.caption}>{caption}</i>
    </div>
  );
};

export default SectionFluidImageTwice;
