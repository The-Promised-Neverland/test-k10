import React from "react";
import styles from "../../styles/K10.module.css";
import Tags from "./Tags";

interface Props {
  title: string;
  tags?: string;
}

const TopTitle: React.FC<Props> = ({ title, tags }) => {
  const TG = tags?.split(" / "); // if there are multiple tags seperating them in different tags

  return (
    <div className={styles.choiceChipbActiveParent}>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        {TG?.map((tag) => (
          <Tags tags={tag} />
        ))}
      </div>
      <b className={styles.title}>{title}</b>
    </div>
  );
};

export default TopTitle;
