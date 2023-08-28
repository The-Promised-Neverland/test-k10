import React from "react";
import styles from "../../../styles/K10.module.css"; // Update with your module CSS path

interface titleProps {
  title: string;
}

const Title: React.FC<titleProps> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <b className={styles.b3}>{title}</b>
    </div>
  );
};

export default Title;
