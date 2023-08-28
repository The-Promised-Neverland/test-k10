import React from "react";
import styles from "../../styles/K10.module.css";
import Title from "./utils/title";
import FormButton from "./utils/formButton";

const MediaSelect: React.FC = () => {
  return (
    <div className={styles.frameParent5}>
      <Title title="メディア種別" />
      <FormButton buttonText="メディア種別を選ぶ" />
    </div>
  );
};

export default MediaSelect;
