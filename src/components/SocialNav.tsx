import { FunctionComponent } from "react";
import styles from "./SocialNav.module.css";

//Add props here for type if Footer or Header


const SocialNav: FunctionComponent = () => {
    return (
        <ul className={styles.links}>
            <li className={styles.cv}>
                <a href="https://mantasmilka.com/CV/CV-MantasMilkintas-UXUIDesigner.pdf" target="_blank" rel="noopener noreferrer">
                    <img className={styles.icon} alt="CV" src="/cv@2x.png" />
                </a>
            </li>
            <li className={styles.cv}>
                <a href="https://www.linkedin.com/in/mantasmilka/" target="_blank" rel="noopener noreferrer">
                    <img className={styles.icon} alt="Other link" src="/cv1@2x.png" />
                </a>
            </li>
        </ul>
    )

};

export default SocialNav;
