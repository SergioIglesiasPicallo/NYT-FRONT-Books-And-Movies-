import { ReactNode } from "react";

export type Props = {
  id:string,
  movieTitle:string,
  onClick?: (id: string) => void;
};
