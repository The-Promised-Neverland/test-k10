import React from "react";
import styles from "../../styles/K10.module.css"; // Update with your module CSS path
import Title from "./utils/title";
import FormButton from "./utils/formButton";

const Demogra: React.FC = () => {
  return (
    <div className={styles.frameParent5}>
      <Title title="デモグラ" />
      <FormButton buttonText="デモグラを選ぶ" />
    </div>
  );
};

export default Demogra;
