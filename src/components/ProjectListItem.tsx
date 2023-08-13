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
        <div className={`${styles.content} ${styles.inside}`}>
          <h2>{projectTitle}</h2>
          <h4>{projectSubtitle}</h4>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
        </div>
        <Link className={styles.cta} to={to}>
          <h4>Read more</h4>
        </Link>
      </div>
      <img className={styles.imgIcon} alt="" src={iMG} />
    </div>
  );
};

export default ProjectListItem;
