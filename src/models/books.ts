import { number } from "yup";
import { BookResponse } from "../services/api/books";

export type BookInput = {
  id: string;
  title: string;
  author: string;
  publication: Date;
  isbn: number;
  description: string;
  url: string;
};

export const normalizeBook = (input: BookResponse) => {
  return {
    id: input?.id || "",
   title: input?.title|| "",
    author: input?.author || "",
    publication: input?.publication || Date(),
    isbn: input?.isbn || Number(),
    description: input?.description || "",
    url: input?.url || "",
  };
};

export type Book = ReturnType<typeof normalizeBook>;
