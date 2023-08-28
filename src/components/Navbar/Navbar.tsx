import React from "react";
import styles from "../../styles/K10.module.css";
import NavbarItem from "./NavbarItem";
import AdvertiserInfo from "./NavbarBottom";
import NavbarBrand from "./NavbarBrand";
import NavDropdown from "./NavDropdown";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <NavDropdown />
      <NavbarBrand src="/image-1@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <NavbarItem iconSrc="/icon.svg" title="ホーム" />
            <NavbarItem iconSrc="/icon2.svg" title="登録情報" />
            <NavbarItem iconSrc="/icon3.svg" title="与件一覧" />
            <NavbarItem iconSrc="/icon4.svg" title="担当者一覧" />
            <NavbarItem iconSrc="/icon5.svg" title="商談管理" />
            <NavbarItem iconSrc="/icon6.svg" title="メディア一覧" />
            <NavbarItem iconSrc="/icon7.svg" title="お気に入りメディア" />
            <NavbarItem iconSrc="/icon8.svg" title="お知らせ" />
          </div>
          <div className={styles.frameContainer}>
            <NavbarItem
              iconSrc="/icon9.svg"
              title="ログアウト"
              inactive={false}
            />
          </div>
        </div>
        <AdvertiserInfo src="/image-11@2x.png" />
      </div>
    </nav>
  );
};

export default Navbar;
