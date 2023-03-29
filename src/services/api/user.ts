import { getToken } from '../storage';
const BASE_API_URL = 'http://localhost:8000/users';
export const togglePostFav = async (postId: string) => {
  try {
    const token = getToken();
    await fetch(`${BASE_API_URL}/toggle-post-fav`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postId,
      }),
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};
