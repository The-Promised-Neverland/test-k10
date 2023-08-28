import React from "react";
import styles from "../../styles/K10.module.css";

interface tags {
  tags: string;
}

const Tags: React.FC<tags> = ({ tags }) => {
  return (
    <div className={styles.choiceChipbActive}>
      <div className={styles.label8}>
        <div className={styles.label20}>{tags}</div>
      </div>
    </div>
  );
};

export default Tags;
