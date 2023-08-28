import React from "react";
import styles from "../../../styles/K10.module.css"; // Update with your module CSS path

interface ShowButtonsProps {
  label: string;
  buttonClass?: string;
  labelClass?: string
}

const ShowButtons: React.FC<ShowButtonsProps> = ({
  label,
  buttonClass = "chips1InputbTextOnlyA", // Default class name
  labelClass = "label1",
}) => {
  const buttonClassName = styles[buttonClass];
  const labelClassName = styles[labelClass];

  return (
    <button className={buttonClassName}>
      <label className={styles.label}>
        <div className={labelClassName}>{label}</div>
      </label>
    </button>
  );
};

export default ShowButtons;
