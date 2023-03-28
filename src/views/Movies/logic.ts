import { normalize } from "path";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Movies from ".";
import { Movie, normalizeMovie } from "../../models/movies";
import { getMoviesById } from "../../services/api/movies";

type UseLogicReturnType = {
  isLoading: boolean;
  handleGetMovie: (id?: string) => Promise<void>;
  movies: Movie[];
  categoryName: string;
  goToBack: () => void;
};

const useLogic = (): UseLogicReturnType => {
  const { id: categoryId } = useParams<{ id: string }>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetMovie = useCallback(async (id?: string) => {
    if (id) {
      setIsLoading(true);
      const movie = await getMoviesById(id);
      console.log(movie);
      setMovies(books => books.concat(normalizeMovie(movie)));
    setIsLoading(false);

    }
  }, []);

  const goToBack = useCallback(() => {
    navigate("/movies", { replace: true });
  }, [navigate]);

  useEffect(() => {
    handleGetMovie(categoryId);
  }, [handleGetMovie, categoryId]);

  return {
    isLoading,
    handleGetMovie,
    movies,
    categoryName: location.state?.name ?? "",
    goToBack,
  };
};

export default useLogic;
