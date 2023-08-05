import { FunctionComponent } from "react";
import styles from "./SocialNav.module.css";

const SocialNav: FunctionComponent = () => {
    return (
        <ul className={styles.links}>
            <li className={styles.cv}>
                <img className={styles.icon} alt="" src="/cv@2x.png" />
            </li>
            <li className={styles.cv}>
                <img className={styles.icon} alt="" src="/cv1@2x.png" />
            </li>
            <li className={styles.cv}>
                <img className={styles.icon} alt="" src="/cv2@2x.png" />
            </li>
        </ul>
    )

};

export default SocialNav;
