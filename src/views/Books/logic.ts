import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Book } from "../../models/books";
import { getBooks} from "../../services/api/books";


const useLogic = () => {
  const [BooksList, setBooksList] = useState<Book[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const { id: bookId } = useParams();
  const navigate = useNavigate();

  const getBooksList = useCallback(async () => {
    setIsLoading(true)
    const books = await getBooks();
      setBooksList(books);
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
    BooksList,
    goToDetails,
  };
};

export default useLogic;
