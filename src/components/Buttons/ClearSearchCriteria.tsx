import React from "react";
import styles from "../../styles/K10.module.css"; 

const ClearSearchCriteriaButton: React.FC = () => {
  return (
    <button className={styles.buttonoutlined5}>
      <div className={styles.unstyledbutton5}>
        <div className={styles.button5}>検索条件をクリア</div>
      </div>
    </button>
  );
};

export default ClearSearchCriteriaButton;
