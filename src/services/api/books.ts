import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Book } from "../../models/books";
import { getBooksById } from "../../services/api/books";


type UseLogicReturnType = {
  isLoading: boolean;
  handleGetBook: (id?: string) => Promise<void>;
  books: Book[];
  bookName: string;
  goToBack: () => void;
};

const useLogic = (): UseLogicReturnType => {
  const { id: categoryId } = useParams<{ id: string }>();
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

const handleGetBook = useCallback(async (id?: string) => {
    if (id) {
      setIsLoading(true);
      const books = await getBooksById(id);
      console.log(books);
      setBooks(books); 
      setIsLoading(false);
    }
  }, []);

  const goToBack = useCallback(() => {
    navigate("/books", { replace: true });
  }, [navigate]);

  useEffect(() => {
    handleGetBook(categoryId);
  }, [handleGetBook, categoryId]);

  return {
    isLoading,
    handleGetBook,
    books,
    bookName: location.state?.name ?? "",
    goToBack,
  };
};

export default useLogic;