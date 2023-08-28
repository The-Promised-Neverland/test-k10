import React from "react";
import styles from "../../../styles/K10.module.css"; // Update with your module CSS path

interface TargetSelectButtonProps {
  buttonText: string;
}

const FormButton: React.FC<TargetSelectButtonProps> = ({ buttonText }) => {
  return (
    <div className={styles.buttonoutlinedWrapper}>
      <button className={styles.buttonoutlined}>
        <div className={styles.unstyledbutton}>
          <div className={styles.content}>
            <img className={styles.maskedicon} alt="" src="/maskedicon.svg" />
            <div className={styles.button}>{buttonText}</div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default FormButton;
