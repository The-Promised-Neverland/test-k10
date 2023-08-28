import React from "react";
import styles from "../../styles/K10.module.css"; // Update with your module CSS path
import Title from "./utils/title";
import FormButton from "./utils/formButton";

const Target: React.FC = () => {
  return (
    <div className={styles.frameParent5}>
      <Title title="ターゲット" />
      <FormButton buttonText="ターゲットを選ぶ" />
    </div>
  );
};

export default Target;
