import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../models/post';
import { deletePost, getAllPosts } from '../../services/api/post';
import { togglePostFav } from '../../services/api/user';

const useLogic = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);

  //Función para cambiar corazón de no favorito a favorito
  const toggleFavorite = useCallback(async (id: string) => {
    await togglePostFav(id);
  }, []);

  const navigate = useNavigate();

  const getPostList = useCallback(async () => {
    const post = await getAllPosts();
    console.log('post', post);
    setPosts(post);
  }, []);

  //   const syncData = useCallback(async () => {
  //     await syncCategories();
  //     setIsLoading(false);
  //     getCategoriesList();
  //   }, []);

  useEffect(() => {
    getPostList();
  }, [getPostList]);

  const goToBack = useCallback(() => {
    navigate('/landing', { replace: true });
  }, [navigate]);

  const removePost = useCallback(async (id: string) => {
    setIsLoading(true);
    await deletePost(id);
    setPosts((prev) =>
      prev.filter((item) => {
        console.log({ itemId: item.id, id });
        return item.id !== id;
      })
    );
    setIsLoading(false);
  }, []);

  return {
    isloading,
    goToBack,
    posts,
    toggleFavorite,
    removePost,
  };
};

export default useLogic;
