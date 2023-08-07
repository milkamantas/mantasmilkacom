import React, { FunctionComponent, ReactNode } from "react";
import styles from "./Section.module.css";

type SectionType = {
    name: string;
    type: "fluid" | "wrapped";
    children: ReactNode;
};

const Section: FunctionComponent<SectionType> = ({ name, type, children }) => {
    const sectionClass = `${styles[name]}`;
    const wrapperClass = type === 'fluid' ? styles.fluid : styles.wrapped;

    return (
    <div className={sectionClass}>
        <div className={wrapperClass}>
            {children}
        </div>
    </div>
    )
};

export default Section;