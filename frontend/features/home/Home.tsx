import { redirect } from "next/navigation";
import { ArticleList } from "./components/article-list/ArticleList";
import { articleApi } from "@/entities/article/api";

export const Home = async ({
  searchParams,
}: {
  searchParams: {
    limit: string;
  };
}) => {
  const limit = searchParams?.limit;
  const limitNumber = parseInt(limit);

  const { data: articles, meta } = await articleApi.getList({
    limit: limitNumber,
    all: true,
  });
  const total = meta?.pagination?.total;
  const isLimitReached = articles?.length === total;

  if (limit) {
    const limitNumber = parseInt(limit);

    if (!limitNumber) {
      redirect("/not-found");
    }
  }

  return (
    <div className="flex align-middle justify-center">
      <ArticleList
        limit={limit}
        total={total}
        isLimitReached={isLimitReached}
        articles={articles}
      />
    </div>
  );
};
