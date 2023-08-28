import React from "react";
import styles from "../../styles/K10.module.css"; // Update with your module CSS path
import Title from "./utils/title";
import ShowButtons from "./utils/ShowButtons";

const TargetType: React.FC = () => {
  return (
    <div className={styles.frameParent5}>
      <Title title="ターゲット種別" />
      <div className={styles.chips1InputbTextOnlyAParent}>
        <ShowButtons label="toC" />
        <ShowButtons label="toB" />
        <ShowButtons label="両方" />
      </div>
    </div>
  );
};

export default TargetType;
