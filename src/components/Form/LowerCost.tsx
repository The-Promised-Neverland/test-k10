import React from "react";
import styles from "../../styles/K10.module.css"; // Update with your module CSS path
import Title from "./utils/title";
import DropDownButton from "./utils/DropDownButton";

const LowerCost: React.FC = () => {
  return (
    <div className={styles.frameParent5}>
      <Title title="下限費用感" />
      <DropDownButton buttonText="選択してください" />
    </div>
  );
};

export default LowerCost;
