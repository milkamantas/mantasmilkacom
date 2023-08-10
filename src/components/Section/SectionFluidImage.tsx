import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SectionFluidImage.module.css";

type SectionFluidImageType = {
  iMG?: string;
  caption?: string;

  /** Style props */
  sectionFluidImageHeight?: Property.Height;
};

const SectionFluidImage: FunctionComponent<SectionFluidImageType> = memo(
  ({ iMG, caption, sectionFluidImageHeight }) => {
    const sectionFluidImageStyle: CSS.Properties = useMemo(() => {
      return {
        height: sectionFluidImageHeight,
      };
    }, [sectionFluidImageHeight]);

    return (
      <div className={styles.sectionFluidImage} style={sectionFluidImageStyle}>
        <img className={styles.imgIcon} alt="" src={iMG} />
        <figcaption className={styles.caption}>{caption}</figcaption>
      </div>
    );
  }
);

export default SectionFluidImage;
