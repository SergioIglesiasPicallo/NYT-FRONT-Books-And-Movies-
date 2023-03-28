import { BookResponse } from "../services/api/books";

export type BookModel = {
  name: string;
  image: string;
  id: string;
  title: string;
  author: string;
  publication: Date;
  isbn: string;
  description: string;
  url: string;
}


export const normalizeBook = (input: BookResponse) => {
  return {
    id: input?.id || "",
    title: input?.title || "",
    author: input?.author || "",
    publication: input?.publication || new Date(),
    isbn: input?.isbn || "",
    description: input?.description || "",
    url: input?.url || "",
  };
};

export type Book = ReturnType<typeof normalizeBook>;