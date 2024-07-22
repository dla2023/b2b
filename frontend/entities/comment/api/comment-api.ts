import { API_URL } from "@/constants";
import { ICreateCommentResponse } from "../models";
import { errorHandler } from "@/errors/error-handler";

const API_COMMENTS_URL = `${API_URL}/comments`;

export const commentApi = {
  createComment: (
    articleId: string,
    content: string,
  ): Promise<ICreateCommentResponse> => {
    return fetch(`${API_COMMENTS_URL}`, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          article: articleId,
          content: content,
        },
      }),
    }).then((response) => response.json()).catch(errorHandler);
  },
};
