import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from './ProjectList.module.css';

const ProjectList: FunctionComponent<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <Link className={styles.cta} to="/projectvinted">
        <h4>Close-Ups</h4>
      </Link>
      <Link className={styles.cta} to="/projectgeniussports">
        <h4>LiveStats</h4>
      </Link>
    </div>
  );
};

export default ProjectList;
