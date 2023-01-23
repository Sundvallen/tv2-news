import React, { useEffect, useState } from "react";
import { Article } from "../../types/api";
import { useNavigate } from "react-router-dom";
import getPublishedDateString from "../../utils/getPublishedDateString";
import NewsItemContent from "./NewsItemContent";
import NewsItemThumbnail from "./NewsItemThumbnail";
import styles from "./NewsItem.module.scss";

interface NewsItemProps {
  data: Article;
}

export default function NewsItem({ data }: NewsItemProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, []);

  // Function passed to NewsItemThumbnail component and used in titleContainer below
  const onClick = () => {
    if (open) {
      setOpen(false);
      return;
    }
    const el = document.getElementById(data.id);
    // Scroll selected item into view
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
    setOpen(true); // For displaying text of article
  };

  return (
    <div id={data.id} className={`${styles.container}`}>
      {/* Naive function that will check the type of the first object in content array */}
      {/* If the markup is first in array, it seems like there is no other media */}
      {data.content[0].type !== "MARKUP" ? (
        <NewsItemThumbnail onClick={onClick} data={data} />
      ) : (
        <div onClick={onClick} className={styles.titleContainer}>
          <div className={styles.publishedAt}>
            {getPublishedDateString(data.publishedAt)}
          </div>
          <h2>{data.title}</h2>
        </div>
      )}
      {/* Container for closing (set height) */}
      <div className={`${styles.contentWrapper} ${open && styles.open}`}>
        {open && <NewsItemContent data={data} />}
      </div>
    </div>
  );
}
