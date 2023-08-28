import React from "react";
import styles from "../../styles/K10.module.css"; // Import your styles

interface AdvertiserInfoProps {
  src: string;
}

const AdvertiserInfo: React.FC<AdvertiserInfoProps> = ({ src }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.description}>広告主</div>
      <div className={styles.frameParent1}>
        <div className={styles.groupWrapper}>
          <div className={styles.ellipseParent}>
            <div className={styles.groupChild} />
            <img className={styles.image1Icon1} alt="" src={src} />
          </div>
        </div>
        <div className={styles.koukokunushi}>株式会社KOUKOKUNUSHI</div>
      </div>
    </div>
  );
};

export default AdvertiserInfo;
