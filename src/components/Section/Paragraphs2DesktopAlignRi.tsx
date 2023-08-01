import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Paragraphs2DesktopAlignRi.module.css";

type Paragraphs2DesktopAlignRiType = {
  sectionTitle?: string;
  gameDescription?: string;
  gameRulesAndSizes?: string;
  showHeading?: boolean;

  /** Style props */
};

const Paragraphs2DesktopAlignRi: FunctionComponent<
  Paragraphs2DesktopAlignRiType
> = ({
  sectionTitle,
  gameDescription,
  gameRulesAndSizes,
  showHeading,
}) => {

  return (
    <div
      className={styles.paragraphs2DesktopAlignri}
    >
      <div className={styles.container}>
        {showHeading && (
          <div className={styles.heading}>
            {sectionTitle}
          </div>
        )}
        <div className={styles.paragraph}>
          {gameDescription}
        </div>
        <div className={styles.paragraph}>
          {gameRulesAndSizes}
        </div>
      </div>
    </div>
  );
};

export default Paragraphs2DesktopAlignRi;
