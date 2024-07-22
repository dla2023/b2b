import { FC } from "react";

interface CommentProps {
  comment: string;
}

export const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <div className="container border-2 border-sold rounded border-red-200 p-2">
      {comment}
    </div>
  );
};
