import { ReactNode } from "react";

export type Props = {
  id:string,
  categoryName:string,
  onClick?: (id: string) => void;
};
