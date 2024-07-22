import { IComment } from "@/entities/comment/models";

export interface IArticle {
  id: number;
  attributes: {
    title: string;
    imgUrl: string;
    content: string;
    comments: {
      data: IComment[];
    };
  };
}

export interface IGetListResponse {
  data: IArticle[];
  meta: {
    pagination: {
      total: number;
    };
  };
}

export interface IGetArticleResponse {
  data: IArticle;
}
