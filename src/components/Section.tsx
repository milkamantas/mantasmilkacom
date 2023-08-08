import React, { FunctionComponent, ReactNode } from "react";
import styles from "./Section.module.css";

type SectionType = {
    name: string;
    type: "fluid" | "wrapped";
    children: ReactNode;
};

const Section: FunctionComponent<SectionType> = ({ name, type, children }) => {
    const wrapperClass = type === 'fluid' ? styles.fluid : styles.wrapped;

    return (
    <div className={styles.section} id={name} data-scroll-to={name}>
        <div className={wrapperClass}>
            {children}
        </div>
    </div>
    )
};

export default Section;