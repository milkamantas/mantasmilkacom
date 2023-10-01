import React, { FunctionComponent, ReactNode } from "react";
import styles from "./Section.module.css";
import CSS from "csstype";

type SectionType = {
    name: string;
    type: "fluid" | "wrapper";
    flexDirection: "row" | "column";
    bgImg?: string;
    bgColor?: "white" | "gray" | "gray1";
    children: ReactNode;
    style?: CSS.Properties;
    fullHeight?: boolean;
};

const Section: FunctionComponent<SectionType> = ({ 
    name, 
    type, 
    children, 
    flexDirection, 
    bgImg, 
    bgColor, 
    style,
    fullHeight 
}) => {
    const wrapperClass = type === 'fluid' ? styles.fluid : styles.wrapper;
    const flexDirectionClass = flexDirection === 'row' ? styles.row : styles.column;
    const bgImageURL = bgImg ? `url("${bgImg}")` : undefined;
    const nameInClass = name;

    const backgroundColorMap = {
        white: "var(--color-white)",
        gray: "var(--color-grey)",
        gray1: "var(--gray-1)"
    };
    const backgroundColor = bgColor ? backgroundColorMap[bgColor] : undefined;

    const fullHeightStyle = fullHeight ? { minHeight: '70vh' } : {};

    return (
        <div 
            className={`${styles.section} ${nameInClass}`} 
            id={name} 
            data-scroll-to={name} 
            style={{ 
                backgroundImage: bgImageURL, 
                backgroundColor: backgroundColor, 
                ...fullHeightStyle,
                ...style 
            }}
        >
            <div className={`${wrapperClass} ${flexDirectionClass}`}>
                {children}
            </div>
        </div>
    );
};

export default Section;
