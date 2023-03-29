import { normalizePost, Post } from '../../models/post';
import { getToken } from '../storage';

export type PostResponse = {
  id: string;
  title: string;
  image: string;
  comment: string;
  isFav: boolean;
  postCategory: string;
  user_FK: string;
  updatedAt: Date;
  createdAt: Date;
};

const BASE_API_URL = 'http://localhost:8000/feeds';

export const createPost = async (values: {
  title: string;
  image: string;
  comment: string;
}) => {
  try {
    const token = getToken();
    const response = await fetch(`${BASE_API_URL}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: values.title,
        image: values.image,
        comment: values.comment,
      }),
    });

    const post = await response.json();
    console.log({ post });
    return normalizePost(post);
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const updatePost = async (postId: string, data: Partial<Post>) => {
  try {
    console.log({ data });
    const token = getToken();
    const response = await fetch(`${BASE_API_URL}/${postId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const post: PostResponse = await response.json();
    console.log({ post });
    return normalizePost(post);
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const getPostById = async (postId: string): Promise<Post | any> => {
  try {
    const token = getToken();
    const response = await fetch(`${BASE_API_URL}/${postId}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data: PostResponse[] = await response.json();
    console.log({ data });
    return data.map(normalizePost);
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const getAllPosts = async (): Promise<Post | any> => {
  try {
    const token = getToken();
    const response = await fetch(`${BASE_API_URL}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data: PostResponse[] = await response.json();
    console.log({ data });
    return data.map(normalizePost);
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const deletePost = async (postId: string) => {
  try {
    const token = getToken();
    await fetch(`${BASE_API_URL}/${postId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};
