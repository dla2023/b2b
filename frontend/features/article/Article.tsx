import Image from "next/image";
import { CommentList } from "./components/comment-list/CommentList";
import { Form } from "./components/form/Form";
import { articleApi } from "@/entities/article/api";
import { redirect } from "next/navigation";
import { getBlurUrl } from "@/utils/getBlurUrl";

export interface ArticleProps {
  params: {
    slug: string;
  };
}

export const Article = async ({ params }: ArticleProps) => {
  const articleId = params.slug;
  const { data: article } = await articleApi.get(articleId);
  const blurUrl = await getBlurUrl(article?.attributes?.imgUrl);

  if (!articleId || !article) {
    redirect("/not-found");
  }

  return (
    <div className="container flex flex-col align-middle justify-center gap-2">
      <div className="relative mx-auto h-[200px] w-[350px] md:w-[550px] md:h-[300px] lg:w-[700px] lg:h-[350px]">
        <Image
          className="rounded-lg object-cover"
          src={article?.attributes?.imgUrl}
          placeholder="blur"
          blurDataURL={blurUrl}
          sizes="(max-width: 768px) 350px, (max-width: 1024px) 550px, 900px"
          alt="article_logo"
          fill
        />
      </div>
      <div className="text-4xl">{article?.attributes?.title}</div>
      <hr />
      <div className="text-xl mb-10">{article?.attributes?.content}</div>
      <Form articleId={articleId} />
      <CommentList comments={article?.attributes?.comments.data} />
    </div>
  );
};
