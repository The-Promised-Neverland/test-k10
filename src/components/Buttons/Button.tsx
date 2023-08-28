import React from "react";
import styles from "../../styles/K10.module.css"; 

interface props {
  title: string,
  buttonclass?: string
}
const Button: React.FC<props> = ({ title, buttonclass = "buttonoutlined6" }) => {
  const btnclass=styles[buttonclass];
  return (
    <button className={btnclass}>
      <div className={styles.unstyledbutton5}>
        <div className={styles.button6}>{title}</div>
      </div>
    </button>
  );
};

export default Button;
