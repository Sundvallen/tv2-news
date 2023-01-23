import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Article } from "../../types/api";
import { getThumbnailUrl } from "../../utils/getThumbnailUrl";
import styles from "./NewsArticle.module.scss";

interface Post {
  post: Article;
}

export default function NewsArticle() {
  const navigate = useNavigate();
  const { state } = useLocation() || {};
  // type post
  const { post }: Post = state || {};
  const date = new Date(post.createdAt);

  useEffect(() => {
    // React Router DOM somehow doesn't do this automatically
    window.scrollTo(0, 0); // Scroll to top of page

    if (state === null) {
      navigate("/"); // Redirect to home if user tries to access this page directly
    }
  }, []);

  return (
    <div className={styles.container}>
      <img src={getThumbnailUrl(post)} alt="" />
      <div className={styles.content}>
        <h1>{post.title}</h1>
        {post.content.map((content, i) => {
          // Render Markup from content Array
          if (content.type === "MARKUP") {
            return (
              <article
                key={i}
                dangerouslySetInnerHTML={{ __html: content.data }}
              ></article>
            );
          }
        })}
        {/* Author and date bottom of article */}
        <div className={styles.metaData}>
          <p className={styles.author}>{post.publishedBy.fullName}</p>
          <p className={styles.createdAt}>{date.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
