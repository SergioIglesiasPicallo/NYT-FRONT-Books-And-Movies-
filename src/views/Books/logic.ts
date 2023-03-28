import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BookModel } from "../../models/books";
import { getBooksById } from "../../services/api/books";



type UseLogicReturnType = {
  isLoading: boolean;
  handleGetBook: (id?: string) => Promise<void>;
  books: BookModel[];
  bookName: string;
  goToBack: () => void;
};

const useLogic = (): UseLogicReturnType => {
  const { id: categoryId } = useParams<{ id: string }>();
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();



  const handleGetBook = useCallback(async (id?: string) => {
    if (id) {
      setIsLoading(true);
      const book = await getBooksById(id);
      console.log(book);
      setBooks(books => books.concat(normalizeBook(book)));
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
function normalizeBook(book: { id: string; title: string; author: string; publication: Date; isbn: string; description: string; url: string; }[]): ConcatArray<BookModel> {
  throw new Error("Function not implemented.");
}

