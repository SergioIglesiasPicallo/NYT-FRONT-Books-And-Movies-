import { normalizeProfile, Profile } from "../../models/profile";
import { getToken } from "../../services/storage";

const BASE_API_URL = "http://localhost:8000/users/profile";
const BASE_API_URL2 ="http://localhost:8000/users/profile/favList/:userID"

export const getUserInfo = async (): Promise<Profile | null> => {
  const token = getToken();
  const response = await fetch(BASE_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  });

  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return normalizeProfile(data);
};

// export const getUserFavorites = async (): Promise<UserFavorites | null> => {
//   const token = getToken();
//   const response = await fetch(BASE_API_URL2, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "content-type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     return null;
//   }
//   const data: FavoritesResponse = await response.json();

//   return normalizeUserFavorites(data);
// };
  
