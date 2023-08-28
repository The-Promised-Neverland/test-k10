import React from "react";
import styles from "../../styles/K10.module.css";
import Sidebar from "./Sidebar";
import BrandDetails from "./BrandDetails";
import DiscountOfferMenu from "./DiscountOfferMenu";
import Section from "./Section";
import ShowButtons from "../Form/utils/ShowButtons";
import BottomTile from "./BottomTile";
import FavouriteButton from "../Buttons/FavouriteButton";
import Button from "../Buttons/Button";
import TopTitle from "./TopTitle";

interface MainProps {
  discount?: boolean;
  released?: boolean
}

const MainComponent: React.FC<MainProps> = ({ discount = false, released=false }) => {
  return (
    <div className={styles.frameParent14}>
      <Sidebar />
      <div className={styles.frameParent15}>
        
        <div className={styles.frameParent17}>
          <BrandDetails />
          <div className={styles.frameParent24}>
            <TopTitle
              title="MediaTitleMediaTitle"
              tags="ライフスタイル"
            />

            <div className={styles.frameParent25}>
              <div className={styles.frameParent26}>
                <Section
                  title="メディア概要"
                  value="概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト"
                />

                <div className={styles.top3Group}>
                  {/* Title  */}
                  <div className={styles.div11}>対応ファネル</div>
                  <div className={styles.chips1InputbTextOnlyAContainer}>
                    <ShowButtons
                      label="認知"
                      buttonClass="chips1InputbTextOnlyA9"
                      labelClass="label22"
                    />

                    <ShowButtons
                      label="興味"
                      buttonClass="chips1InputbTextOnlyA10"
                      labelClass="label24"
                    />

                    <ShowButtons
                      label="理解"
                      buttonClass="chips1InputbTextOnlyA10"
                      labelClass="label24"
                    />

                    <ShowButtons
                      label="購買 / 来店促進"
                      buttonClass="chips1InputbTextOnlyA9"
                      labelClass="label22"
                    />

                    <ShowButtons
                      label="リピート"
                      buttonClass="chips1InputbTextOnlyA10"
                      labelClass="label24"
                    />

                    <ShowButtons
                      label="推奨"
                      buttonClass="chips1InputbTextOnlyA10"
                      labelClass="label24"
                    />
                  </div>
                </div>

                <Section
                  title="広告主の業種/商材Top3"
                  value="1.食品・飲料 00% / 2.家庭用品・トイレタリー 00% / 3.化粧品 00%"
                />

                <Section title="メディア種別" value="ポータルメディア" />

                <Section title="読者ターゲット" value="女性 , 社会人" />
              </div>

              {discount === true && <DiscountOfferMenu />}
            </div>
          </div>
        </div>

        {released===true && <BottomTile
          desc="記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル"
          src="/image@2x.png"
          ReleaseDate="2022/12/20"
        />}

        <div className={styles.unstyledbuttonParent}>
          <FavouriteButton label="お気に入り" />
          <Button title="お問い合わせ" buttonclass="buttonoutlined8" />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
