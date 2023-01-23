import { VideoCamera } from "phosphor-react";
import React from "react";
import { Article } from "../../types/api";
import getPublishedDateString from "../../utils/getPublishedDateString";
import { getThumbnailUrl } from "../../utils/getThumbnailUrl";
import styles from "./NewsItemThumbnail.module.scss";

interface NewsItemThumbnailProps {
  data: Article;
  onClick: () => void;
}

export default function NewsItemThumbnail({
  data,
  onClick,
}: NewsItemThumbnailProps) {
  return (
    // passed from NewsItem.tsx, runs logic for opening and closing item
    <div onClick={onClick} className={styles.imageWrapper}>
      <img src={getThumbnailUrl(data)} alt="" />
      <div className={styles.cardShadow}>
        <div className={styles.publishedShadow}></div>
      </div>
      <div className={styles.publishedAt}>
        {getPublishedDateString(data.publishedAt)}
      </div>
      <div className={styles.titleContainer}>
        {/* Video Icon */}
        {data.content[0].type === "VIDEO" && (
          <VideoCamera
            className={styles.contentIcon}
            color="white"
            size={32}
            weight="regular"
          />
        )}
        <h2>{data.title}</h2>
      </div>
    </div>
  );
}
