import React, { useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { Article } from "../../types/api";
import NewsItem from "../NewsListItem/NewsItem";
import styles from "./NewsList.module.scss";

export default function NewsList() {
  const { state } = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const fetchPosts = async ({ pageParam = 1 }) => {
    const res = await fetch(
      `https://breaking-api.alpha.tv2.no/v1/public/posts?page=${pageParam}&limit=10&portalId=${state.id}`
    );
    return res.json();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isError, error, data, fetchNextPage, isFetchingNextPage, status } =
    useInfiniteQuery<any, Error>([`${state.category}-POSTS`], fetchPosts, {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.hasNextPage) {
          return lastPage.nextPage; // will get the number of the next page, so that fetchNextPage (see function below) will fetch the next page
        }
      },
    });

  // checks for when user is close to bottom of the page
  const handleInfiniteScroll = () => {
    if (ref.current) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 400
      ) {
        fetchNextPage();
      }
    }
  };

  useEffect(() => {
    // returns early to prevent multiple api calls
    if (isFetchingNextPage) {
      return;
    }
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [isFetchingNextPage]);

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className={styles.container} ref={ref}>
      {data &&
        data.pages.map((page) => {
          return page.docs.map((news: Article) => {
            return <NewsItem key={news.id} data={news} />;
          });
        })}

      {/* For Testing without API */}
      {/* {newsListArray.map((news) => (
        <NewsItem key={news.id} data={news} />
      ))} */}
    </div>
  );
}
