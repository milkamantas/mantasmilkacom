import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Paragraphs1DesktopAlignLe.module.css";

type Paragraphs1DesktopAlignLeType = {
  sectionTitle?: string;
  gameDescription?: string;

  /** Style props */
  paragraphs1DesktopAlignLePosition?: Property.Position;
  paragraphs1DesktopAlignLeWidth?: Property.Width;
  paragraphs1DesktopAlignLeMaxWidth?: Property.MaxWidth;
  paragraphs1DesktopAlignLeFlex?: Property.Flex;
  paragraphs1DesktopAlignLeAlignSelf?: Property.AlignSelf;
  paragraphs1DesktopAlignLeMinWidth?: Property.MinWidth;
  headingFontSize?: Property.FontSize;
  headingLineHeight?: Property.LineHeight;
  headingFontWeight?: Property.FontWeight;
  paragraphLineHeight?: Property.LineHeight;
  paragraphFontSize?: Property.FontSize;
  paragraphFontWeight?: Property.FontWeight;
};

const Paragraphs1DesktopAlignLe: FunctionComponent<
  Paragraphs1DesktopAlignLeType
> = ({
  sectionTitle,
  gameDescription,
  paragraphs1DesktopAlignLePosition,
  paragraphs1DesktopAlignLeWidth,
  paragraphs1DesktopAlignLeMaxWidth,
  paragraphs1DesktopAlignLeFlex,
  paragraphs1DesktopAlignLeAlignSelf,
  paragraphs1DesktopAlignLeMinWidth,
  headingFontSize,
  headingLineHeight,
  headingFontWeight,
  paragraphLineHeight,
  paragraphFontSize,
  paragraphFontWeight,
}) => {
  const paragraphs1DesktopAlignLeStyle: CSS.Properties = useMemo(() => {
    return {
      position: paragraphs1DesktopAlignLePosition,
      width: paragraphs1DesktopAlignLeWidth,
      maxWidth: paragraphs1DesktopAlignLeMaxWidth,
      flex: paragraphs1DesktopAlignLeFlex,
      alignSelf: paragraphs1DesktopAlignLeAlignSelf,
      minWidth: paragraphs1DesktopAlignLeMinWidth,
    };
  }, [
    paragraphs1DesktopAlignLePosition,
    paragraphs1DesktopAlignLeWidth,
    paragraphs1DesktopAlignLeMaxWidth,
    paragraphs1DesktopAlignLeFlex,
    paragraphs1DesktopAlignLeAlignSelf,
    paragraphs1DesktopAlignLeMinWidth,
  ]);

  const heading2Style: CSS.Properties = useMemo(() => {
    return {
      fontSize: headingFontSize,
      lineHeight: headingLineHeight,
      fontWeight: headingFontWeight,
    };
  }, [headingFontSize, headingLineHeight, headingFontWeight]);

  const paragraph4Style: CSS.Properties = useMemo(() => {
    return {
      lineHeight: paragraphLineHeight,
      fontSize: paragraphFontSize,
      fontWeight: paragraphFontWeight,
    };
  }, [paragraphLineHeight, paragraphFontSize, paragraphFontWeight]);

  return (
    <div
      className={styles.paragraphs1DesktopAlignle}
      style={paragraphs1DesktopAlignLeStyle}
    >
      <div className={styles.heading} style={heading2Style}>
        {sectionTitle}
      </div>
      <div className={styles.paragraph} style={paragraph4Style}>
        {gameDescription}
      </div>
    </div>
  );
};

export default Paragraphs1DesktopAlignLe;
