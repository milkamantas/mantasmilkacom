import { FunctionComponent } from "react";
import styles from "./ProjectListItem.module.css";
import { Link } from "react-router-dom";

type ProjectListItemType = {
  projectTitle?: string;
  projectSubtitle?: string;
  paragraph1?: string;
  paragraph2?: string;
  iMG?: string;
  to: string;
};

const ProjectListItem: FunctionComponent<ProjectListItemType> = ({
  projectTitle,
  projectSubtitle,
  paragraph1,
  paragraph2,
  iMG,
  to,
}) => {
  return (
    <div className={styles.projectLivestats}>
      <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.heading}>{projectTitle}</div>
          <div className={styles.paragraph}>{projectSubtitle}</div>
          <div className={styles.paragraph1}>{paragraph1}</div>
          <div className={styles.paragraph1}>{paragraph2}</div>
        </div>
        <Link className={styles.cta} to={to}>
          <div className={styles.title}>Read more</div>
        </Link>
      </div>
      <img className={styles.imgIcon} alt="" src={iMG} />
    </div>
  );
};

export default ProjectListItem;
