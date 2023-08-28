import React from "react";
import styles from "../../styles/K10.module.css";
import Title from "./utils/title";
import FormButton from "./utils/formButton";

const GenreSelect: React.FC = () => {
  return (
    <div className={styles.frameParent5}>
      <Title title="ジャンル" />
      <FormButton buttonText="ターゲットを選ぶ" />
    </div>
  );
};

export default GenreSelect;
