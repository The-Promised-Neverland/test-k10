import React from "react";
import styles from "../../styles/K10.module.css";

interface NavbarItemProps {
  iconSrc: string;
  title: string;
  inactive?: boolean; // Optional prop to control icon activation
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  iconSrc,
  title,
  inactive=true,
}) => {
  return (
    <nav className={styles.navigationItem}>
      <div className={styles.iconParent}>
        <img className={styles.menufilledIcon} alt="" src={iconSrc} />
        <div className={styles.div}>{title}</div>
      </div>
      {/* Use the inactive prop to conditionally render the icon */}
      {inactive===true && (
        <img className={styles.menufilledIcon} alt="" src="/icon1.svg" />
      )}
    </nav>
  );
};

export default NavbarItem;
