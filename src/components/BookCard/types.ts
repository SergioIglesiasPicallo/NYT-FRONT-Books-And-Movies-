import { ReactNode } from "react";

export type Props = {
  id:string,
  bookTitle:string,
  onClick?: (id: string) => void;
};
