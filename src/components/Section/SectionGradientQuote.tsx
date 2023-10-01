import { FunctionComponent } from "react";
import styles from "./SectionGradientQuote.module.css";

type SectionGradientQuoteProps = {
  quote?: string;
  gradientType?: "gs" | "vinted";
};

const SectionGradientQuote: FunctionComponent<SectionGradientQuoteProps> = ({ 
  quote = "Default quote text here.", 
  gradientType = "gs" 
}) => {
  return (
    <div className={`${styles.sectionGradient} ${styles[gradientType]}`}>
      <div className={styles.wrapper}>
        <h3>
          {quote}
        </h3>
      </div>
    </div>
  );
};

export default SectionGradientQuote;
