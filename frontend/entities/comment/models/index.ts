export interface IComment {
  id: number;
  attributes: {
    content: string;
  };
}

export interface ICreateCommentResponse {
  data: {
    id: number;
    attributes: {
      content: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}
