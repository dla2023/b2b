"use server";

import { commentApi } from "@/entities/comment/api/comment-api";
import { revalidatePath } from "next/cache";

export const addCommnent = async (formData: FormData, articleId: string) => {
  const comment = formData.get("comment");

  if (comment) {
      await commentApi.createComment(articleId, comment.toString());
  }

  revalidatePath("/");
};
