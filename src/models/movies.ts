import { MovieResponse } from "../services/api/movies";

export interface MovieModel = {
  id: string;
  created: number;
  title: string;
  rating: string;
  critics:number;
  byLIne:string;
  createdAt: Date;
  updatedAt: Date;
  link: string
};

export const normalizeMovie = (input: MovieResponse) => {
  return {
    id: input?.id || "",
    title: input?.title || "",
    rating: input?.rating || "",
    critics: input?.critics || Number(),
    byLine: input?.byLine || "",
    link: input?.link || "",
    created: input?.created || Date(),
    updated: input?.updated || Date(),
  };
};

export type Movie = ReturnType<typeof normalizeMovie>;
