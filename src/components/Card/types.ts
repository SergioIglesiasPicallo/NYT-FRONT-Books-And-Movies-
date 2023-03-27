import { ReactNode } from "react";

export type Props = {
  id:string,
  category:string,
  onClick?: (id: string) => void;
};
