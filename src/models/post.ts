import { PostResponse } from "../services/api/post";

export type PostInput = {
  title: string;
  image: string;
  comment: string;
};

export const normalizePost = (input: PostResponse) => {
  return {
    id: input?.id || "",
    title: input?.title || "",
    image: input?.image || "",
    comment: input?.comment || "",
    isFav: input?.isFav || false
  };
};

export type Post = ReturnType<typeof normalizePost>;
