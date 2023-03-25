import type { SelectionResponse } from "../services/api/selection";

export type SelectionInput = {
  id: string;
  selection: string;
  createdAt: Date;
  updatedAt: Date;
};


export const normalizeSelection = (input: SelectionResponse) => {
 
  return {
    id: input?.id || "",
    category: input?.selection || "",
    createdAt: input?.createdAt || Date(),
    updatedAt: input?.updatedAt || Date(),
  };
};

export type selection = ReturnType<typeof normalizeSelection>;
