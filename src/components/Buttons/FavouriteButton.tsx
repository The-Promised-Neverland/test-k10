import React from "react";
import styles from "../../styles/K10.module.css";

interface props {
    label: string
}

const FavouriteButton: React.FC<props> = ({label}) => {
  return (
    <button className={styles.unstyledbutton8}>
      <img className={styles.menufilledIcon} alt="" src="/icon12.svg" />
      <div className={styles.button5}>{label}</div>
      <div className={styles.unstyledbuttonChild} />
      <div className={styles.button5}>10</div>
    </button>
  );
};

export default FavouriteButton;
