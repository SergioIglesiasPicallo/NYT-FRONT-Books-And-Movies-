import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Description, DetailsButton } from "./styles";
import { Props } from "./types";

const Card: FC<Props> = ({ id, categoryName }) => {
  const navigate = useNavigate();

  const goToDetails = useCallback(() => {
    navigate(`/categories/${id}`, { replace: true, state:{name:categoryName} });
  }, [categoryName, id, navigate]);

  return (
    <Container>
      <Description> {categoryName} </Description>
      <DetailsButton onClick={goToDetails}>Go to {categoryName}:</DetailsButton>
    </Container>
  );
};

export default Card;
