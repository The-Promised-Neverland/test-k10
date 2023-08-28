import React from "react";
import styles from "../../styles/K10.module.css"; // Update with your module CSS path

const Sidebar: React.FC = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.content6}>
        <img className={styles.maskedIcon1} alt="" src="/masked-icon1.svg" />
        <img className={styles.menufilledIcon} alt="" src="/icon11.svg" />
        <div className={styles.button8}>比較</div>
      </div>
    </div>
  );
};

export default Sidebar;
