import { FC } from "react";
import { Comment } from "./comment/Comment";
import { IComment } from "@/entities/comment/models";

interface CommentListProps {
  comments: IComment[];
}

export const CommentList: FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="flex flex-col space-y-2 max-h-[250px] overflow-auto p-2">
      <div className="text-xl font-bold">Comments</div>
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment.attributes?.content} />
      ))}
    </div>
  );
};
