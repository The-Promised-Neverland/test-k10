import React from "react";
import styles from "../../styles/K10.module.css"; // Import your styles

interface sectionProps {
  title: string;
  value: string;
}

const Section: React.FC<sectionProps> = ({ title, value }) => {
  const valueLines = value.split("/").map((line, index) => <div key={index}>{line}</div>);

  return (
    <div className={styles.parent1}>
      <div className={styles.div11}>{title}</div>
      <div className={styles.descriptionFrame}>
        <div className={styles.description8}>{valueLines}</div>
      </div>
    </div>
  );
};

export default Section;
