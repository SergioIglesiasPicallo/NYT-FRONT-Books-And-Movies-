import { getToken } from "../api/storage";
import { Movie, normalizeMovie } from "../../models/movies";


export type MovieResponse = {
    id: string;
    created: string;
 title: string;
  rating: string;
  critics: number;
 byLine: string;
 publication: Date;
  updated: Date;
  link: string;

};


const BASE_API_URL="http://localhost:8000/movies"

export const getMoviesById = async (
  id: string
): Promise<Movie[]> => {
  try {
    const token = getToken();
    const response = await fetch(`${BASE_API_URL}/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data: MovieResponse[] = await response.json();
    console.log({ data });
    return data.map(normalizeMovie);
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};


