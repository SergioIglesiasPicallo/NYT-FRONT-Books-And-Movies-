import { strict } from "assert"; //Sacarlo?

export type ProfileInput = {
  password: string;
  email: string;
};

export const normalizeProfile = (input: any) => {
  return {
    name: (input?.name || '') as string,
    id: (input?.id || '') as string,
    email: (input?.email || '') as string,
  };
};

export type Profile = ReturnType<typeof normalizeProfile>;


/* /// MOVER a favorites.ts
export type FavoritesInput = {
  id:string,
  title:string,
  postCategory:string,
  image:string,
  createdAt:string,
  // updatedAt:string,
  // postUserFavorites = {
  //   id:string,
  //   user_favorites_FK: string,
  //   post_favorite_FK: "4f133971-23ea-42ed-906c-2e08c9aa4b48",
  //   createdAt: "2023-03-14T21:35:38.848Z",
  //   updatedAt: "2023-03-14T21:35:38.848Z"
  // }
}
*/