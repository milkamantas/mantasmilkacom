import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Paragraphs2DesktopAlignRi.module.css";

type Paragraphs2DesktopAlignRiType = {
  sectionTitle?: string;
  gameDescription?: string;
  gameRulesAndSizes?: string;
  showHeading?: boolean;

  /** Style props */
  paragraphs2DesktopAlignRiPosition?: Property.Position;
  paragraphs2DesktopAlignRiWidth?: Property.Width;
  paragraphs2DesktopAlignRiMaxWidth?: Property.MaxWidth;
  paragraphs2DesktopAlignRiAlignSelf?: Property.AlignSelf;
  containerMaxWidth?: Property.MaxWidth;
  headingFontSize?: Property.FontSize;
  headingLineHeight?: Property.LineHeight;
  headingFontWeight?: Property.FontWeight;
  paragraphLineHeight?: Property.LineHeight;
  paragraphLineHeight1?: Property.LineHeight;
};

const Paragraphs2DesktopAlignRi: FunctionComponent<
  Paragraphs2DesktopAlignRiType
> = ({
  sectionTitle,
  gameDescription,
  gameRulesAndSizes,
  showHeading,
  paragraphs2DesktopAlignRiPosition,
  paragraphs2DesktopAlignRiWidth,
  paragraphs2DesktopAlignRiMaxWidth,
  paragraphs2DesktopAlignRiAlignSelf,
  containerMaxWidth,
  headingFontSize,
  headingLineHeight,
  headingFontWeight,
  paragraphLineHeight,
  paragraphLineHeight1,
}) => {
  const paragraphs2DesktopAlignRiStyle: CSS.Properties = useMemo(() => {
    return {
      position: paragraphs2DesktopAlignRiPosition,
      width: paragraphs2DesktopAlignRiWidth,
      maxWidth: paragraphs2DesktopAlignRiMaxWidth,
      alignSelf: paragraphs2DesktopAlignRiAlignSelf,
    };
  }, [
    paragraphs2DesktopAlignRiPosition,
    paragraphs2DesktopAlignRiWidth,
    paragraphs2DesktopAlignRiMaxWidth,
    paragraphs2DesktopAlignRiAlignSelf,
  ]);

  const containerStyle: CSS.Properties = useMemo(() => {
    return {
      maxWidth: containerMaxWidth,
    };
  }, [containerMaxWidth]);

  const headingStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: headingFontSize,
      lineHeight: headingLineHeight,
      fontWeight: headingFontWeight,
    };
  }, [headingFontSize, headingLineHeight, headingFontWeight]);

  const paragraphStyle: CSS.Properties = useMemo(() => {
    return {
      lineHeight: paragraphLineHeight,
    };
  }, [paragraphLineHeight]);

  const paragraph1Style: CSS.Properties = useMemo(() => {
    return {
      lineHeight: paragraphLineHeight1,
    };
  }, [paragraphLineHeight1]);

  return (
    <div
      className={styles.paragraphs2DesktopAlignri}
      style={paragraphs2DesktopAlignRiStyle}
    >
      <div className={styles.container} style={containerStyle}>
        {showHeading && (
          <div className={styles.heading} style={headingStyle}>
            {sectionTitle}
          </div>
        )}
        <div className={styles.paragraph} style={paragraphStyle}>
          {gameDescription}
        </div>
        <div className={styles.paragraph} style={paragraph1Style}>
          {gameRulesAndSizes}
        </div>
      </div>
    </div>
  );
};

export default Paragraphs2DesktopAlignRi;
