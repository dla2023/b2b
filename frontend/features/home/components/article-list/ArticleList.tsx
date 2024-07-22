"use client";

import { FC, useEffect, useState } from "react";
import { Article } from "./article/Article";
import { Pagination } from "./article/Pagination";
import { IArticle } from "@/entities/article/models";
import { articleApi } from "@/entities/article/api";

interface ArticleListProps {
  articles: IArticle[];
  total: number;
  limit: string;
  isLimitReached: boolean;
  searchParams?: {
    page?: number;
  };
}

export const ArticleList: FC<ArticleListProps> = ({
  articles,
  isLimitReached,
  total,
  limit,
}) => {
  const [data, setData] = useState(articles);
  const [isLimitReachedClient, setLimitReachedClient] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const isPaginationDisabled =
    isLimitReached || isLoading || isLimitReachedClient;

  useEffect(() => {
    if (data?.length >= total) {
      setLimitReachedClient(true);
    }
  }, [data, total]);

  const handleUpdateData = (limit: number) => {
    setLoading(true);
    return articleApi
      .getList({ limit })
      .then((response) => {
        setData((p) => [...p, ...response.data]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container flex flex-col items-center space-y-3">
      <div className="text-center mb-4 text-5xl">Articles</div>
      {data?.map((article) => <Article key={article.id} article={article} />)}
      <Pagination
        limit={limit}
        onChange={handleUpdateData}
        disabled={isPaginationDisabled}
      />
    </div>
  );
};
