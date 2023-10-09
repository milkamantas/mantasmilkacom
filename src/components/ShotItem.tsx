// src/components/ShotItem.tsx
import React, { FunctionComponent } from "react";
import SectionFluidImage from "./Section/SectionFluidImage";
import styles from "./ShotItem.module.css";  // You may need to create this CSS module

type ShotItemType = {
  imgSrc: string;
  caption: string;
};

const ShotItem: FunctionComponent<ShotItemType> = ({ imgSrc, caption }) => {
  return (
    <div className={styles.shotItemContainer}>
        <img className={styles.shotItemImage} src={imgSrc} alt={caption} />
    <figcaption>{caption}</figcaption>
</div>
  );
};

export default ShotItem;
