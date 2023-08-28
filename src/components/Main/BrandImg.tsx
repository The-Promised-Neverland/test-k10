import React from "react";
import styles from "../../styles/K10.module.css"; // Make sure to import your styles correctly

const BrandImg: React.FC = () => {
  return (
    <>
      <img className={styles.frameChild} alt="" src="/frame-366@2x.png" />
      <div className={styles.div10}>主なユーザー属性</div>
    </>
  );
};

export default BrandImg;
