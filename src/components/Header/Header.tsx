import React from "react";
import styles from "../../styles/K10.module.css";

interface HeaderProps {
  headingText: string;
}

const Header: React.FC<HeaderProps> = ({ headingText }) => {
  return (
    <div className={styles.heading}>
      <b className={styles.b1}>{headingText}</b>
    </div>
  );
};

export default Header;
