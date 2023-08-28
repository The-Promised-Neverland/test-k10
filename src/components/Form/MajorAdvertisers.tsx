import React from "react";
import styles from "../../styles/K10.module.css"; // Update with your module CSS path
import Title from "./utils/title";
import FormButton from "./utils/formButton";

const MajorAdvertisers: React.FC = () => {
  return (
    <div className={styles.frameParent5}>
      <Title title="主要広告主の業種" />
      <FormButton buttonText="主要広告主の業種" />
    </div>
  );
};

export default MajorAdvertisers;
