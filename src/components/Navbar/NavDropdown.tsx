import React from "react";
import styles from "../../styles/K10.module.css"; // Update with your module CSS path

interface DropdownButtonProps {
  onClick?: () => void;  // currently optional
}

const NavDropdown: React.FC<DropdownButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.iconbutton} onClick={onClick}>
      <div className={styles.unstylediconbutton}>
        <img className={styles.menufilledIcon} alt="" src="/menufilled.svg" />
      </div>
    </div>
  );
};

export default NavDropdown;
