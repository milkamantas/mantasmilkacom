import { FunctionComponent } from "react";
import styles from "./SocialNav.module.css";

//Add props here for type if Footer or Header

const SocialNav: FunctionComponent<{ className?: string }> = ({ className}) => {
    return (
        <div className={className}>
            <div className={styles.icon}>
                <a href="https://mantasmilka.com/CV/CV-MantasMilkintas-UXUIDesigner.pdf" target="_blank" rel="noopener noreferrer">
                    <img className={styles.img} alt="CV" src="/cv@2x.png" />
                </a>
            </div>
            <div className={styles.icon}>
                <a href="https://www.linkedin.com/in/mantasmilka/" target="_blank" rel="noopener noreferrer">
                    <img className={styles.img} alt="LinkedIn" src="/cv1@2x.png" />
                </a>
            </div>
        </div>
    )

};

export default SocialNav;
