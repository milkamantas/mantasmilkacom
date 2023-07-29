import { FunctionComponent } from "react";
import styles from "./SectionGradientQuote.module.css";
const SectionGradientQuote: FunctionComponent = () => {
  return (
    <div className={styles.sectionGradient}>
      <div className={styles.wrapper}>
        <div className={styles.quote}>
          LiveStats bridges the gap between American football and basketball for
          statisticians, harmonizing core principles. In the high-stakes world
          of betting, it's the gold standard for accuracy and real-time updates.
        </div>
      </div>
    </div>
  );
};

export default SectionGradientQuote;
