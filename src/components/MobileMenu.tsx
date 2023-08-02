import { FunctionComponent, useState } from "react";
import styles from "./MobileMenu.module.css";

const MobileMenu: FunctionComponent = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.mobilemenu}>
            <div 
            className={styles.mobilemenuClosed} 
            onClick={() => setIsOpen(!isOpen)}
            style={{display: isOpen ? "none" : "flex"}}
            >
                <div className={styles.mobilemenuClosedChild} />
                <div className={styles.mobilemenuClosedItem} />
                <div className={styles.mobilemenuClosedChild} />
            </div>
            <div className={styles.mobilemenuOpen}>
                <div className={styles.mobilemenuOpenChild} />
                <div className={styles.mobilemenuOpenItem} />
            </div>
        </div>
    );
}

export default MobileMenu;