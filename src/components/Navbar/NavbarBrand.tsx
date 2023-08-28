import React from "react";
import styles from "../../styles/K10.module.css"; // Import your styles

interface BrandProps {
  src: string;
}

const NavbarBrand: React.FC<BrandProps> = ({ src }) => {
  return (
    <div className={styles.image1Wrapper}>
      <img className={styles.image1Icon} alt="brand" src={src} />
    </div>
  );
};

export default NavbarBrand;
