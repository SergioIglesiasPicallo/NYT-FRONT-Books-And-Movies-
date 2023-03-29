import { getToken } from "../storage";
import {normalizeCategory} from "../../models/categories";

export type CategoryResponse = {
  id: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
};

const BASE_API_URL = "http://localhost:8000/categories";

export const getCategories = async () => {
  try {
    const token = getToken();
    const response = await fetch("http://localhost:8000/categories/type", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: CategoryResponse[] = await response.json();
    return data.map(normalizeCategory);
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
