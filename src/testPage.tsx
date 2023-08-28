import { FunctionComponent } from "react";
import styles from "./styles/K10.module.css";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import GenreSelect from "./components/Form/Genre";
import MediaSelect from "./components/Form/Media";
import CompatibleFunnel from "./components/Form/CompatibleFunnel";
import Target from "./components/Form/Target";
import TargetType from "./components/Form/TargetType";
import Demogra from "./components/Form/Demogra";
import MajorAdvertisers from "./components/Form/MajorAdvertisers";
import LowerCost from "./components/Form/LowerCost";
import FreeWord from "./components/Form/FreeWord";
import Button from "./components/Buttons/Button";
import ClearSearchCriteriaButton from "./components/Buttons/ClearSearchCriteria";
import CompareMediaButton from "./components/Buttons/CompareMedia";
import Sidebar from "./components/Main/Sidebar";
import BrandDetails from "./components/Main/BrandDetails";
import MainComponent from "./components/Main/MainComponent";

const TestPage: FunctionComponent = () => {
  return (
    <div className={styles.k10}>
      <Navbar />

      <div className={styles.headingParent}>
        <Header headingText="メディア一覧" />

        <div className={styles.frameParent2}>
          <form className={styles.frameForm}>
            <div className={styles.frameParent3}>
              <GenreSelect />
              <MediaSelect />
              <CompatibleFunnel />
              <Target />
              <TargetType />
              <Demogra />
              <MajorAdvertisers />
              <LowerCost />
              <FreeWord />
            </div>

            <div className={styles.frame1}>
              <ClearSearchCriteriaButton />
              <Button title="検索する" />
            </div>
          </form>

          <CompareMediaButton />

          <div className={styles.frameParent13}>
            <MainComponent discount={true} released={true}/>
            <MainComponent discount={false} />

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
