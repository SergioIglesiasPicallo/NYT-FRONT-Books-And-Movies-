import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Book } from "../../models/books";
import { getBooksById } from "../../services/api/books";

const useLogic = () => {

  const { id: categoryId } = useParams();
  const [books, setCocktails] = useState<Book[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation()

  const handleGetOrdinaryDrink = useCallback(async (id?: string) => {
    if (id) {
      setIsLoading(true);
      const books = await getBooksById(id);
      console.log(books);
      setCocktails(books);
      setTimeout(() => {
        setIsLoading(false)
      }, 3000);    }
  }, []);

  const goToBack = useCallback(() => {
    navigate("/categories", { replace: true });
  }, [navigate]);

  useEffect(() => {
    handleGetOrdinaryDrink(categoryId);
  }, [handleGetOrdinaryDrink, categoryId]);

    return{
      isloading,
     handleGetOrdinaryDrink,
     books,
     categoryName:location.state.name,
     goToBack
    }
}

export default useLogic