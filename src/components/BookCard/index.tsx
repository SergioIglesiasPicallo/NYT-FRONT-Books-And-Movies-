import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Description, DetailsButton } from "./styles";
import { Props } from "./types";

const BookCard: FC<Props> = ({ id, bookTitle }) => {
  const navigate = useNavigate();

  const goToDetails = useCallback(() => {
    navigate(`/categories/${id}`, { replace: true, state:{name:bookTitle} });
  }, [bookTitle, id, navigate]);

  return (
    <Container>
      <Description> {bookTitle} </Description>
      <DetailsButton onClick={goToDetails}>Go to {bookTitle}:</DetailsButton>
    </Container>
  );
};

export default BookCard;
