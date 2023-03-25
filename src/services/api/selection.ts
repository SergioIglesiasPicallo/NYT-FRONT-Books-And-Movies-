import { normalizeSelection } from "../../models/selection";
import { getToken } from "./storage";

export type SelectionResponse = {
  id: string;
  selection: string;
  createdAt: Date;
  updatedAt: Date;
};

const BASE_API_URL = "http://localhost:8000/selection";

export const getCategories = async () => {
  try {
    const token = getToken();
    const response = await fetch("http://localhost:8000/selection/type", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: SelectionResponse[] = await response.json();
    return data.map(normalizeSelection);
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const syncCategories = async () => {
  try {
    const token = getToken();
    await fetch(`${BASE_API_URL}/sync`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};
