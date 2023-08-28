import React from "react";
import styles from "../../styles/K10.module.css"; // Make sure to import your styles correctly

const DiscountOfferMenu: React.FC = () => {
  return (
    <div className={styles.frameParent27}>
      <div className={styles.localOfferParent}>
        <img className={styles.localOfferIcon} alt="" src="/local-offer.svg" />
        <div className={styles.div15}>シーズン限定メニュー</div>
      </div>
      <div className={styles.descriptionWrapper2}>
        <div className={styles.description10}>直前割引情報があります！</div>
      </div>
    </div>
  );
};

export default DiscountOfferMenu;
