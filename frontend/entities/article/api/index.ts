import { API_URL, ELEMENTS_PER_PAGE } from "@/constants";
import { IGetArticleResponse, IGetListResponse } from "../models";
import { errorHandler } from "@/errors";

const API_ARTICLES_URL = `${API_URL}/articles`;

export const articleApi = {
  getList: ({
    limit,
    all,
  }: {
    limit: number;
    all?: boolean;
  }): Promise<IGetListResponse> => {
    const start = all ? 0 : limit - ELEMENTS_PER_PAGE;
    const currentLimit = all ? limit || ELEMENTS_PER_PAGE : ELEMENTS_PER_PAGE;
    return fetch(
      `${API_ARTICLES_URL}?pagination[start]=${start}&pagination[limit]=${currentLimit}`,
      {
        cache: "no-cache",
      },
    )
      .then((response) => response.json())
      .catch(errorHandler);
  },

  get: (id: string): Promise<IGetArticleResponse> =>
    fetch(`${API_ARTICLES_URL}/${id}?populate=*`)
      .then((response) => response.json())
      .catch(errorHandler),
};
