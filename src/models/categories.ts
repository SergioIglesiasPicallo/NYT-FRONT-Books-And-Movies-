import type { CategoryResponse } from "../services/api/categories";

export type CategoryInput = {
  id: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
};


export const normalizeCategory = (input: CategoryResponse) => {
 
  return {
    id: input?.id || "",
    category: input?.category || "",
    createdAt: input?.createdAt || Date(),
    updatedAt: input?.updatedAt || Date(),
  };
};

export type Category = ReturnType<typeof normalizeCategory>;
