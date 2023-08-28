import React from "react";
import styles from "../../styles/K10.module.css";
import ShowButtons from "./utils/ShowButtons";
import Title from "./utils/title";

const CompatibleFunnel = () => {
  return (
    <div className={styles.frameParent5}>
      <Title title="対応ファネル" />
      <div className={styles.chips1InputbTextOnlyAParent}>
        <ShowButtons label="認知" />
        <ShowButtons label="興味" />
        <ShowButtons label="理解" />
        <ShowButtons label="購買 / 来店促進" />
        <ShowButtons label="リピート" />
        <ShowButtons label="推奨" />
      </div>
    </div>
  );
};

export default CompatibleFunnel;
