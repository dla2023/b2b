import { articleApi } from "@/entities/article/api";
import { ArticleProps } from "@/features/article/Article";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: ArticleProps): Promise<Metadata | undefined> {
  const articleId = params.slug;
  const { data: article } = await articleApi.get(articleId);

  if (!article) {
    return;
  }

  return {
    title: article.attributes?.title,
    description: article.attributes?.content,
    openGraph: {
      title: article.attributes?.title,
      description: article.attributes?.content,
      type: "article",
      locale: "en_US",
      url: `http://localhost:8080/article/${params.slug}`,
    },
  };
}

export { Article as default } from "@/features/article/Article";
