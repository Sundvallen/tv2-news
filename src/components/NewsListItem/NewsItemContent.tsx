import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../../types/api";
import getPublishedDateString from "../../utils/getPublishedDateString";
import generateSlug from "../../utils/generateSlug";
import styles from "./NewsItemContent.module.scss";

interface NewsItemContentProps {
  data: Article;
}

export default function NewsItemContent({ data }: NewsItemContentProps) {
  const redirectUrl = `/${data.portals[0].slug}/${generateSlug(data.title)}/${
    data.id
  }`;

  return (
    <>
      {/* Render Content that is markup */}
      {data.content.map((content, i) => {
        if (content.type === "MARKUP") {
          return (
            <div key={i} className={styles.content}>
              <article
                dangerouslySetInnerHTML={{ __html: content.data }}
              ></article>
              <Link to={redirectUrl} state={{ post: data }}>
                Se artikkel
              </Link>

              <br />
              <p className={styles.articleFooter}>
                {`${data.publishedBy.fullName} - ${getPublishedDateString(
                  data.publishedAt
                )}`}
              </p>
            </div>
          );
        }
      })}
    </>
  );
}
