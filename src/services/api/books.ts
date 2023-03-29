import { getToken } from "../storage";
import { Book, normalizeBook } from "../../models/books";

export type BookResponse = {
  id: string;
  title: string;
author: string;
critics: number;
isbn: string;
publication: Date;
description: string;
url: string;

};

const BASE_API_URL="http://localhost:8000/books"

export const getBooksById = async (
  id: string
): Promise<Book[]> => {
  try {
    const token = getToken();
    const response = await fetch(`${BASE_API_URL}/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data: BookResponse[] = await response.json();
    console.log({ data });
    return data.map(normalizeBook);
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const getBooks = async () => {
  try {
    const token = getToken();
    const response = await fetch("http://localhost:8000/categories/type", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: BookResponse[] = await response.json();
    return data.map(normalizeBook);
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};