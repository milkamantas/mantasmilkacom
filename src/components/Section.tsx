import React, { FunctionComponent, ReactNode } from "react";
import styles from "./Section.module.css";

type SectionType = {
    name: string;
    type: "fluid" | "wrapper";
    flexDirection: "row" | "column";
    children: ReactNode;
};

const Section: FunctionComponent<SectionType> = ({ name, type, children, flexDirection }) => {
    const wrapperClass = type === 'fluid' ? styles.fluid : styles.wrapper;
    const flexDirectionClass = flexDirection === 'row' ? styles.row : styles.column;

    return (
    <div className={styles.section} id={name} data-scroll-to={name}>
        <div className={`${wrapperClass} ${flexDirectionClass}`}>
            {children}
        </div>
    </div>
    )
};

export default Section;