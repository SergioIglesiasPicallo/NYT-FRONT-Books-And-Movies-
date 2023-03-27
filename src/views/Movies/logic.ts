import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Movies from ".";
import { Movie } from "../../models/movies";
import { getMoviesById } from "../../services/api/movies";

const useLogic = () => {

  const { id: categoryId } = useParams();
  const [cocktails, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation()

  const handleGetMovie = useCallback(async (id?: string) => {
    if (id) {
      setIsLoading(true);
      const movies = await getMoviesById(id);
      console.log(movies);
      setMovies(movies);
      setIsLoading(false);
    }
  }, []);

  const goToBack = useCallback(() => {
    navigate("/movies", { replace: true });
  }, [navigate]);

  useEffect(() => {
    handleGetMovie(movieId);
  }, [handleGetMovie, movieId]);

    return{
     isLoading,
     handleGetMovie,
     Movies,
     categoryName:location.state.name,
     goToBack
    }
}

export default useLogic