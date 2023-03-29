import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Movie } from "../../models/movies";
import { getMovies} from "../../services/api/movies";


const useLogic = () => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const { id: bookId } = useParams();
  const navigate = useNavigate();

  const getBooksList = useCallback(async () => {
    setIsLoading(true)
    const movies = await getMovies();
    setMoviesList(movies);
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, []);

  /*
  const syncData = useCallback(async () => {
    setIsLoading(true)
    await syncCategories();
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);  }, []);
*/
  useEffect(() => {
    getBooksList();
  }, [getBooksList]);

  const goToBack = useCallback(() => {
    navigate("/landing", { replace: true });
  }, [navigate]);

  const goToDetails = useCallback(() => {
    navigate(`/books/${bookId}`, { replace: true });
  }, [bookId, navigate]);
  
  return {
    isloading,
    goToBack,
    //syncData,
    moviesList,
    goToDetails,
  };
};

export default useLogic;
