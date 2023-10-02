import { FunctionComponent } from "react";
import styles from "./Footer.module.css";
import Section from "./Section";
import SocialNav from "./SocialNav";
import ContactInfo from "./ContactInfo";
import ProjectList from "./ProjectList";
import socialNavStyles from './SocialNav.module.css'
import contactInfoStyles from './ContactInfo.module.css';
import projectListStyles from './ProjectList.module.css';


const Footer: FunctionComponent = () => {
  return (
    <Section name="Footer" type="wrapper" flexDirection="row">
      <div className={styles.leftSide}>
        <ContactInfo className={`${contactInfoStyles.ContactInfoClass} ${styles.contactInfoInFooter}`} />
        <SocialNav className={`${socialNavStyles.SocialNav} ${styles.SocialNavInFooter}`} />
      </div>
      <div className={styles.rightSide}>
        <ProjectList className={`${projectListStyles.defaultProjectListClass} ${styles.projectListInFooter}`} />
      </div>
    </Section>
  );
};

export default Footer;
