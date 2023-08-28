import React from "react";
import styles from "../../styles/K10.module.css"; // Update with your module CSS path

const CompareMediaButton: React.FC = () => {
  return (
    <>
      {/* In small screen sizes, search bar */}
      <div className={styles.group}>
        <div className={styles.div9}>絞り込み検索</div>
        <img className={styles.menufilledIcon} alt="" src="/icon10.svg" />
      </div>
      <button className={styles.buttonoutlined7}>
        <div className={styles.unstyledbutton5}>
          <button className={styles.content5}>
            <div className={styles.button6}>メディアを比較</div>
            <img className={styles.maskedicon} alt="" src="/masked-icon.svg" />
          </button>
        </div>
      </button>
    </>
  );
};

export default CompareMediaButton;
