import React from "react";
import styles from "../../../styles/K10.module.css"; // Update with your module CSS path

interface DropDownButtonProps {
  buttonText: string;
}

const DropDownButton: React.FC<DropDownButtonProps> = ({ buttonText }) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.textFieldoutlinedParent}>
        <div className={styles.textFieldoutlined}>
          <div className={styles.input}>
            <div className={styles.container1}>
              <div className={styles.label18}>{buttonText}</div>
            </div>
          </div>
        </div>
        <div className={styles.arrowdropdownfilled}>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        </div>
      </div>
    </div>
  );
};

export default DropDownButton;
