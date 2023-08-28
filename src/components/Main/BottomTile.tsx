import React from "react";
import styles from "../../styles/K10.module.css"; // Import your styles

interface props {
    ReleaseDate: string,
    src: string,
    desc: string
}
const BottomTile: React.FC<props> = ({ReleaseDate, src, desc}) => {
  return (
    <div className={styles.imageParent}>
      <img className={styles.imageIcon} alt="" src={src} />
      <div className={styles.frame4}>
        <div className={styles.div16}>公開日 : {ReleaseDate}</div>
        <b className={styles.title1}>{desc}</b>
      </div>
    </div>
  );
};

export default BottomTile;
