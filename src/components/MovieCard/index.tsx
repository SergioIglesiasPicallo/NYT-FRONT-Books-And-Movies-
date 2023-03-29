import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Description, DetailsButton } from "./styles";
import { Props } from "./types";

const MovieCard: FC<Props> = ({ id, movieTitle }) => {
  const navigate = useNavigate();

  const goToDetails = useCallback(() => {
    navigate(`/categories/${id}`, { replace: true, state:{name:movieTitle} });
  }, [movieTitle, id, navigate]);

  return (
    <Container>
      <Description> {movieTitle} </Description>
      <DetailsButton onClick={goToDetails}>Go to {movieTitle}:</DetailsButton>
    </Container>
  );
};

export default MovieCard;
