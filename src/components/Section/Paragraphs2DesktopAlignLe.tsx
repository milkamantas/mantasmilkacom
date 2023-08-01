import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Paragraphs2DesktopAlignLe.module.css";

type Paragraphs2DesktopAlignLeType = {
  heading?: string;
  paragraph?: string;
  paragraph1?: string;

  /** Style props */
  paragraphs2DesktopAlignLePosition?: Property.Position;
  paragraphs2DesktopAlignLeWidth?: Property.Width;
  paragraphs2DesktopAlignLeMaxWidth?: Property.MaxWidth;
  paragraphs2DesktopAlignLeAlignSelf?: Property.AlignSelf;
  headingFontSize?: Property.FontSize;
  headingLineHeight?: Property.LineHeight;
  headingFontWeight?: Property.FontWeight;
  paragraphLineHeight?: Property.LineHeight;
  paragraphLineHeight1?: Property.LineHeight;
};

const Paragraphs2DesktopAlignLe: FunctionComponent<
  Paragraphs2DesktopAlignLeType
> = ({
  heading,
  paragraph,
  paragraph1,
  paragraphs2DesktopAlignLePosition,
  paragraphs2DesktopAlignLeWidth,
  paragraphs2DesktopAlignLeMaxWidth,
  paragraphs2DesktopAlignLeAlignSelf,
  headingFontSize,
  headingLineHeight,
  headingFontWeight,
  paragraphLineHeight,
  paragraphLineHeight1,
}) => {
  const paragraphs2DesktopAlignLeStyle: CSS.Properties = useMemo(() => {
    return {
      position: paragraphs2DesktopAlignLePosition,
      width: paragraphs2DesktopAlignLeWidth,
      maxWidth: paragraphs2DesktopAlignLeMaxWidth,
      alignSelf: paragraphs2DesktopAlignLeAlignSelf,
    };
  }, [
    paragraphs2DesktopAlignLePosition,
    paragraphs2DesktopAlignLeWidth,
    paragraphs2DesktopAlignLeMaxWidth,
    paragraphs2DesktopAlignLeAlignSelf,
  ]);

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
      className={styles.paragraphs2DesktopAlignle}
      style={paragraphs2DesktopAlignLeStyle}
    >
      <div className={styles.heading} style={headingStyle}>
        {heading}
      </div>
      <div className={styles.paragraph} style={paragraphStyle}>
        {paragraph}
      </div>
      <div className={styles.paragraph} style={paragraph1Style}>
        {paragraph1}
      </div>
    </div>
  );
};

export default Paragraphs2DesktopAlignLe;
