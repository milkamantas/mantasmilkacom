import { FunctionComponent } from "react";
import styles from './ContactInfo.module.css';

const ContactInfo: FunctionComponent<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.contactLinks}>
        <h4 className={styles.contactLinkText}>
          <a href="mailto:mantas@mantasmilka.com">mantas@mantasmilka.com</a>
        </h4>
        <h4 className={styles.contactLinkText}>
          <a href="tel:+37062459890">+370 624 59 890</a>
        </h4>
      </div>
    </div>
  );
};

export default ContactInfo;
