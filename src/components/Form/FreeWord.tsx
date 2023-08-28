import React from "react";
import styles from "../../styles/K10.module.css"; // Update with your module CSS path
import Title from "./utils/title";
import DropDownButton from "./utils/DropDownButton";

const FreeWord: React.FC = () => {
  return (
    <div className={styles.frameParent5}>
      <Title title="フリーワード" />
      <DropDownButton buttonText="キーワードを入力" />
    </div>
  );
};

export default FreeWord;
